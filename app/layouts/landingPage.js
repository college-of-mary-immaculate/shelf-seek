export default function LandingPageLayout(root) {

    root.innerHTML = `
        <footer id="footer"></footer>
        <header id="header"></header>
        <main id="main"></main>
    `;

    return {
        nav: document.getElementById('footer'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
    }
}