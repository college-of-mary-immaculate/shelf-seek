import styles from './component.module.css';

export default function AboutPageLayout(root) {
    root.innerHTML = `
        <header id=${styles["header"]}></header>
        <main id=${styles["main"]}></main>
        <footer id=${styles["footer"]}></footer>
    `;

    return {
        footer: document.getElementById(styles['footer']),
        header: document.getElementById(styles['header']),
        main: document.getElementById(styles['main']),
    }
}