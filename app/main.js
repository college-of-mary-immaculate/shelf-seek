import SPA from "./core/spa.js";
import Landing from "./pages/landing.js";
import Result from "./pages/result.js";
import NoResult from "./pages/noResult.js";

const app = new SPA({
    root: document.getElementById('site'),
});

window.app = app;

app.add('/', Result);
app.add('/landing', Landing);
app.add('/result', Result);
app.add('/noresult', NoResult)

app.handleRouteChanges();