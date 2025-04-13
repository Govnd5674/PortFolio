export const measurePerformance = async () => {
  try {
    // Wait for resources to load
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const resourceTimings = performance.getEntriesByType("resource");
    const heavyResources = resourceTimings
      .filter((r) => r.encodedBodySize > 500000) // 500KB threshold
      .map((r) => ({
        name: r.name.split("/").pop(),
        size: `${(r.encodedBodySize / 1024 / 1024).toFixed(2)}MB`,
        type: r.initiatorType,
      }));

    const totalSize = resourceTimings.reduce(
      (acc, r) => acc + (r.encodedBodySize || 0),
      0
    );

    return {
      totalResourceSize: totalSize / 1024 / 1024, // Convert to MB
      heavyResources,
      resourceCount: resourceTimings.length,
    };
  } catch (error) {
    console.error("Performance measurement failed:", error);
    return null;
  }
};
