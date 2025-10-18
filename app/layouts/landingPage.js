import styles from './component.module.css';

export default function LandingPageLayout(root) {
    root.innerHTML = `
        <header id="header"></header>
        <main id="main"></main>
        <footer id="footer"></footer>
        <nav id="nav"></nav>
    `;

    return {
        footer: document.getElementById('footer'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
        nav: document.getElementById('nav'),
    }
}