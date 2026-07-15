/**
 * runSecurityAudit - Audit packages against the NPM Registry Security Advisories API
 * @param {Record<string, string>} packageMap - Object mapping package name to version string
 * @returns {Promise<Record<string, any>>} - Object mapping package name to vulnerability info
 */
export async function runSecurityAudit(packageMap) {
  if (Object.keys(packageMap).length === 0) {
    return {};
  }

  const payload = {};
  for (const [name, version] of Object.entries(packageMap)) {
    // Strip qualifiers to get raw version
    const cleanVersion = version.replace(/[\^~]/, "");
    payload[name] = [cleanVersion];
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

    const data = await response.json();
    const result = {};

    for (const [name, advisories] of Object.entries(data)) {
      if (advisories && advisories.length > 0) {
        // Sort advisories to find the highest severity
        const severityScores = { low: 1, moderate: 2, high: 3, critical: 4 };
        const sorted = advisories.sort(
          (a, b) =>
            (severityScores[b.severity] || 0) -
            (severityScores[a.severity] || 0),
        );

        result[name] = {
          severity: sorted[0].severity,
          title: sorted[0].title,
          url: sorted[0].url,
          id: sorted[0].id,
        };
      }
    }

    return result;
  } catch (error) {
    // Fallback gracefully on network error or offline mode
    return {};
  }
}
