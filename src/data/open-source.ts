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
    title: "Render negative Pod priorities as valid label values",
    repository: "kubernetes-sigs/jobset",
    status: "Merged",
    prUrl: "https://github.com/kubernetes-sigs/jobset/pull/1291",
    summary:
      "The Pod webhook copied pod.Spec.Priority into a label verbatim, so a negative PriorityClass produced a label value the API server rejects; every child Pod failed admission and the JobSet sat at zero Pods. Negative values are now encoded with an n prefix while non-negative values keep their form, so exclusive-placement affinity keeps matching across the upgrade.",
    impact:
      "JobSets using a negative PriorityClass, including the cluster-autoscaler overprovisioning pattern, schedule again instead of retrying forever.",
    tech: ["Go", "Kubernetes", "Admission Webhooks"],
  },
  {
    title: "Bound decompressed size of gzip request bodies",
    repository: "open-telemetry/opentelemetry-collector-contrib",
    status: "Merged",
    prUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/49948",
    summary:
      "Fixed a decompression-bomb vector in the Cloudflare receiver: the compressed request body was bounded, but the gzip stream was decompressed with no limit of its own, so a small request could expand without bound in memory.",
    impact:
      "Hardens a production telemetry receiver against memory exhaustion; over-limit requests are now rejected with a 422, matching the existing uncompressed path.",
    tech: ["Go", "Security", "OpenTelemetry Collector"],
  },
  {
    title: "Map the Rate metric intake type in the Datadog exporter",
    repository: "open-telemetry/opentelemetry-collector-contrib",
    status: "Merged",
    prUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/50134",
    summary:
      "Rate metrics reached Datadog's intake as UNSPECIFIED because the type mapping only handled Count and Gauge; added the missing Rate case with table-driven tests covering all three.",
    impact:
      "Rate metrics exported through the Collector now carry the correct Datadog intake type instead of an unspecified one.",
    tech: ["Go", "Datadog", "Metrics"],
  },
  {
    title: "Clarify processor ordering relative to batching",
    repository: "open-telemetry/opentelemetry-collector",
    status: "Merged",
    prUrl: "https://github.com/open-telemetry/opentelemetry-collector/pull/15394",
    summary:
      "Updated the core Collector's processor documentation to recommend placing filtering, transformation, and enrichment processors before batching, with the rationale spelled out.",
    impact:
      "Keeps pipelines from batching telemetry that is later discarded and ensures data reaches its final form before export.",
    tech: ["Documentation", "OpenTelemetry Collector", "Pipelines"],
  },
  {
    title: "Add TypeScript SDK quickstart example",
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
