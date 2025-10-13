import SPA from "./core/spa.js";
import Landing from "./pages/landing.js";
import Result from "./pages/result.js";
import NoResult from "./pages/noResult.js";
import About from "./pages/about.js"

const app = new SPA({
    root: document.getElementById('site'),
});

window.app = app;

app.add('/', Landing);
app.add('/landing', Landing);
app.add('/result', Result);
app.add('/noresult', NoResult)
app.add('/about', About)

app.handleRouteChanges();