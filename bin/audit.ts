import { rawVersion, isValidSemVer } from "./shared";

interface Advisory {
  id: number;
  title: string;
  severity: "low" | "moderate" | "high" | "critical";
  url: string;
  vulnerable_versions: string;
}

export interface AuditResult {
  severity: string;
  title: string;
  url: string;
  id: number;
}

/**
 * runSecurityAudit - Audit packages against the NPM Registry Security Advisories API
 * @param packageMap - Object mapping package name to version string
 * @returns Object mapping package name to vulnerability info
 */
export async function runSecurityAudit(
  packageMap: Record<string, string>,
): Promise<Record<string, AuditResult>> {
  if (Object.keys(packageMap).length === 0) {
    return {};
  }

  const payload: Record<string, string[]> = {};
  for (const [name, version] of Object.entries(packageMap)) {
    if (version && isValidSemVer(version)) {
      const cleanVersion = rawVersion(version).version;
      payload[name] = [cleanVersion];
    }
  }

  if (Object.keys(payload).length === 0) {
    return {};
  }

  try {
    const response = await fetch(
      "https://registry.npmjs.org/-/npm/v1/security/advisories/bulk",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      throw new Error(`Registry responded with status ${response.status}`);
    }

    const data = (await response.json()) as Record<string, Advisory[]>;
    const result: Record<string, AuditResult> = {};

    for (const [name, advisories] of Object.entries(data)) {
      if (advisories && advisories.length > 0) {
        const severityScores = { low: 1, moderate: 2, high: 3, critical: 4 };
        const sorted = advisories.sort(
          (a, b) =>
            (severityScores[b.severity] || 0) -
            (severityScores[a.severity] || 0),
        );

        const worstAdvisory = sorted[0];
        if (worstAdvisory) {
          result[name] = {
            severity: worstAdvisory.severity,
            title: worstAdvisory.title,
            url: worstAdvisory.url,
            id: worstAdvisory.id,
          };
        }
      }
    }

    return result;
  } catch (error) {
    return {};
  }
}
