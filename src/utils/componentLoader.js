export const loadComponent = (name) => {
  const components = {
    Page1: () => import(/* @vite-ignore */ `../components/pages/${name}.jsx`),
    Page2: () => import(/* @vite-ignore */ `../components/pages/${name}.jsx`),
    Page3: () => import(/* @vite-ignore */ `../components/pages/${name}.jsx`),
    Page4: () => import(/* @vite-ignore */ `../components/pages/${name}.jsx`),
    Page5: () => import(/* @vite-ignore */ `../components/pages/${name}.jsx`),
  };

  return components[name]();
};
