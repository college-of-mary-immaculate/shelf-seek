export default function ResultPageLayout(root) {
    root.innerHTML = `

        <header id="header"></header>
        <main id="main"></main>
        <footer id="footer"></footer>
    `;

    return {
        nav: document.getElementById('nav'),
        footer: document.getElementById('footer'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
    }
}