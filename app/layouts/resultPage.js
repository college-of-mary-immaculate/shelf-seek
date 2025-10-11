import styles from './component.module.css';

export default function ResultPageLayout(root) {
    root.innerHTML = `
        <header id=${styles["header"]}></header>
        <main id=${styles["main"]}></main>
        <footer id=${styles["footer"]}></footer>
    `;

    return {
        nav: document.getElementById('nav'),
        footer: document.getElementById(styles['footer']),
        header: document.getElementById(styles['header']),
        main: document.getElementById(styles['main']),
    }
}