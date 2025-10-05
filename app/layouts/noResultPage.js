export default function NoResultPageLayout(root) {
    root.innerHTML = `

        <header id="header"></header>
        <main id="main"></main>
        <footer id="footer"></footer>
    `;

    return {
        footer: document.getElementById('footer'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
    }
}