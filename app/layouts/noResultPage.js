export default function NoResultPageLayout(root) {
    root.innerHTML = `

        <header id="result-header"></header>
        <main id="main"></main>
        <footer id="footer"></footer>
        <nav id="nav"></nav>
    `;

    return {
        footer: document.getElementById('footer'),
        header: document.getElementById('result-header'),
        main: document.getElementById('main'),
        nav: document.getElementById('nav'),
    }
}