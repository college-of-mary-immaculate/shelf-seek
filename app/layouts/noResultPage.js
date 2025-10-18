import styles from './component.module.css';

export default function NoResultPageLayout(root) {
    root.innerHTML = `
        <header id=${styles["header"]}></header>
        <main id=${styles["main"]}></main>
        <footer id=${styles["footer"]}></footer>
        <nav id=${styles["nav"]}></nav>
    `;

    return {
        footer: document.getElementById(styles['footer']),
        header: document.getElementById(styles['header']),
        main: document.getElementById(styles['main']),
        nav: document.getElementById(styles['nav']),
    }
}