export default function LandingPageLayout(root) {
    console.log("Hello Niggs")
    root.innerHTML = `
        <footer id="footer"></footer>
        <header id="header"></header>
        <main id="main"></main>
        <nav id="nav"></nav>

    `;

    return {
        nav: document.getElementById('footer'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
        nav: document.getElementById('nav'),
    }
}