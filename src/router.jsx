import { lazy } from "react";

export const pages = {
  Page1: lazy(() =>
    import("./components/pages/Page1" /* webpackChunkName: "page1" */)
  ),
  Page2: lazy(() =>
    import("./components/pages/Page2" /* webpackChunkName: "page2" */)
  ),
  Page3: lazy(() =>
    import("./components/pages/Page3" /* webpackChunkName: "page3" */)
  ),
  Page4: lazy(() =>
    import("./components/pages/Page4" /* webpackChunkName: "page4" */)
  ),
  Page5: lazy(() =>
    import("./components/pages/Page5" /* webpackChunkName: "page5" */)
  ),
};
