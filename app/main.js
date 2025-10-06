import SPA from "./core/spa.js";
import Landing from "./pages/landing.js";
import Result from "./pages/result.js";

const app = new SPA({
    root: document.getElementById('site'),
});

window.site = site;

site.add('/landing', Landing);
site.add('/result', Result);

site.handleRouteChanges();