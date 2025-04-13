export const preloadAssets = async () => {
  const assetPromises = [];

  // Start loading in background while showing loading screen
  const preloadComponent = (Component) => {
    const promise = new Promise((resolve) => {
      requestAnimationFrame(() => {
        Component();
        resolve();
      });
    });
    assetPromises.push(promise);
  };

  preloadComponent(() => import("../components/Band"));
  preloadComponent(() => import("../components/Introname"));
  preloadComponent(() => import("../components/nav"));

  await Promise.all(assetPromises);
};
