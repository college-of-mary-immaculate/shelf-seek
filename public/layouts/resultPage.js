export default function ResultPageLayout(root) {
    root.innerHTML = `
        <nav id="nav"></nav>
        <footer id="footer"></footer>
        <header id="header"></header>
        <main id="main"></main>
    `;

    return {
        nav: document.getElementById('nav'),
        footer: document.getElementById('footer'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
    }
}