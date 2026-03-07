import { NextResponse } from "next/server";

const GITHUB_USERNAME = "MayureshTardekar";

export async function GET() {
  try {
    const [reposRes, eventsRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN
              ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
              : {}),
          },
          next: { revalidate: 300 }, // Cache for 5 minutes
        }
      ),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN
              ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
              : {}),
          },
          next: { revalidate: 300 },
        }
      ),
    ]);

    if (!reposRes.ok || !eventsRes.ok) {
      throw new Error("GitHub API error");
    }

    const repos = await reposRes.json();
    const events = await eventsRes.json();

    const formattedRepos = repos.map(
      (repo: {
        name: string;
        description: string | null;
        html_url: string;
        language: string | null;
        stargazers_count: number;
        forks_count: number;
        updated_at: string;
      }) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
      })
    );

    const formattedEvents = events
      .filter(
        (e: { type: string }) =>
          e.type === "PushEvent" ||
          e.type === "CreateEvent" ||
          e.type === "PullRequestEvent"
      )
      .slice(0, 5)
      .map(
        (e: {
          type: string;
          repo: { name: string };
          created_at: string;
          payload: {
            commits?: { message: string }[];
            ref_type?: string;
            ref?: string;
            action?: string;
          };
        }) => ({
          type: e.type,
          repo: e.repo.name,
          createdAt: e.created_at,
          message:
            e.type === "PushEvent" && e.payload.commits?.[0]
              ? e.payload.commits[0].message
              : e.type === "CreateEvent"
                ? `Created ${e.payload.ref_type} ${e.payload.ref || ""}`
                : e.type === "PullRequestEvent"
                  ? `${e.payload.action} pull request`
                  : "",
        })
      );

    return NextResponse.json({
      repos: formattedRepos,
      events: formattedEvents,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
