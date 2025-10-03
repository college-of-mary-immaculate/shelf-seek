import SPA from "./core/spa.js";
import Landing from "./pages/landing.js";
import Result from "./pages/result.js";

const app = new SPA({
    root: document.getElementById('app'),
});

window.app = app;

app.add('/landing', Landing);
app.add('/result', Result);

app.handleRouteChanges();