export type OpenSourceContribution = {
  title: string;
  repository: string;
  status: "Merged" | "Open";
  prUrl: string;
  summary: string;
  impact: string;
  tech: string[];
};

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "Microsoft Agent Governance Toolkit",
    repository: "microsoft/agent-governance-toolkit",
    status: "Merged",
    prUrl: "https://github.com/microsoft/agent-governance-toolkit/pull/1654",
    summary:
      "Added a standalone TypeScript SDK quickstart showing AgentMeshClient initialization, governance checks, and result handling.",
    impact:
      "Improves onboarding for developers trying the TypeScript SDK with a concise runnable example.",
    tech: ["TypeScript", "SDK Examples", "GitHub Actions"],
  },
  {
    title: "Continue CLI model capability warning",
    repository: "continuedev/continue",
    status: "Open",
    prUrl: "https://github.com/continuedev/continue/pull/12275",
    summary:
      "Proposed a small CLI UX fix to make model capability warnings less noisy for developers using Continue.",
    impact:
      "Shows active contribution to developer tooling and willingness to improve rough edges in real OSS workflows.",
    tech: ["TypeScript", "CLI", "Developer Tools"],
  },
  {
    title: "Repository language surfacing",
    repository: "DeepSourceCorp/good-first-issue",
    status: "Open",
    prUrl: "https://github.com/DeepSourceCorp/good-first-issue/pull/2699",
    summary:
      "Proposed showing the top repository languages so first-time contributors can choose projects more quickly.",
    impact:
      "Improves discovery quality for new contributors evaluating unfamiliar repositories.",
    tech: ["Python", "Open Source", "Contributor UX"],
  },
];
