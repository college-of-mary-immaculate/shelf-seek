import styles from './component.module.css';

export default function HistoryPageLayout(root) {
    root.innerHTML = `
        <header id=${styles["header"]}></header>
        <main id=${styles["main"]}></main>
    `;

    return {
        header: document.getElementById(styles['header']),
        main: document.getElementById(styles['main']),
    }
}