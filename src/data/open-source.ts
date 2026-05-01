export type OpenSourceContribution = {
  title: string;
  repository: string;
  status: "Merged";
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
];
