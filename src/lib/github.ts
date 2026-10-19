const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const REQUEST_TIMEOUT_MS = 8000;
const DEFAULT_USERNAME = "Sh1yden";

export type PinnedRepo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  languageColor: string | null;
  archived: boolean;
};

type RepoNode = {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  isArchived: boolean;
  primaryLanguage: { name: string; color: string | null } | null;
};

type PinnedItemsResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<RepoNode | null>;
      } | null;
    } | null;
  } | null;
  errors?: Array<{ message?: string }>;
};

const PINNED_ITEMS_QUERY = `
  query PinnedRepos($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            isArchived
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

// Cache successful responses in process memory so that a temporary GitHub
// outage during an ISR regeneration does not replace live data with fallback.
let lastGood: PinnedRepo[] | null = null;

function getUsername(): string {
  return process.env.GITHUB_USERNAME?.trim() || DEFAULT_USERNAME;
}

export function getGithubProfileUrl(): string {
  return `https://github.com/${getUsername()}`;
}

function normalizeColor(color: string | null | undefined): string | null {
  if (!color) return null;
  return color.startsWith("#") ? color : `#${color}`;
}

/**
 * Fetches the repositories pinned on the GitHub profile via the GraphQL API.
 * Returns `null` when the request fails or no token is configured, so the
 * caller can fall back to the static snapshot.
 */
export async function getPinnedRepos(): Promise<PinnedRepo[] | null> {
  const token = process.env.GITHUB_TOKEN?.trim();

  if (!token) {
    return lastGood;
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: PINNED_ITEMS_QUERY,
        variables: { login: getUsername() },
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error(`[github] GraphQL request failed: HTTP ${response.status}`);
      return lastGood;
    }

    const json = (await response.json()) as PinnedItemsResponse;

    if (json.errors?.length) {
      const details = json.errors.map((e) => e.message).join("; ");
      console.error(`[github] GraphQL errors: ${details}`);
      return lastGood;
    }

    const nodes = json.data?.user?.pinnedItems?.nodes ?? [];
    const repos = nodes
      .filter((node): node is RepoNode => Boolean(node))
      .map((node) => ({
        name: node.name,
        description: node.description,
        url: node.url,
        stars: node.stargazerCount,
        language: node.primaryLanguage?.name ?? null,
        languageColor: normalizeColor(node.primaryLanguage?.color),
        archived: node.isArchived,
      }));

    if (repos.length === 0) {
      console.error("[github] pinned items list is empty");
      return lastGood;
    }

    lastGood = repos;
    return repos;
  } catch (error) {
    console.error("[github] failed to fetch pinned repositories:", error);
    return lastGood;
  }
}
