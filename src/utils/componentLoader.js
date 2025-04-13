export const loadComponent = (componentPath) => {
  return import(
    /* webpackChunkName: "[request]" */
    /* webpackPrefetch: true */
    `../components/pages/${componentPath}.jsx`
  );
};
