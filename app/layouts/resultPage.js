import styles from './component.module.css';

export default function ResultPageLayout(root) {
    root.innerHTML = `
        <header id=${styles["header"]}></header>
        <main id=${styles["main"]}></main>
        <footer id=${styles["footer"]}></footer>
        <nav id=${styles["nav"]}></nav>
    `;

    return {
        nav: document.getElementById(styles['nav']),
        footer: document.getElementById(styles['footer']),
        header: document.getElementById(styles['header']),
        main: document.getElementById(styles['main']),
    }
}