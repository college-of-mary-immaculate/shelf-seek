import styles from './component.module.css';

export default function Main(root) {

    root.innerHTML = `
        <div class=${styles["main-content"]}>
            <div class=${styles["left-container"]}></div>

            <div class=${styles["right-container"]}></div>
        </div>
    `;

    root.className = styles['main'];
}