import { getGithubProfileUrl, getPinnedRepos } from "@/lib/github";
import { fallbackProjects } from "@/data/projects-fallback";
import { ProjectsGrid } from "./projects-grid";

export async function Projects() {
  const repos = await getPinnedRepos();

  return (
    <ProjectsGrid
      projects={repos ?? fallbackProjects}
      profileUrl={getGithubProfileUrl()}
    />
  );
}
