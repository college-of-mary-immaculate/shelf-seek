import styles from './component.module.css';

export default function Nav(root) {
    root.innerHTML = `
        <div>main</div>
    `;

    root.className = styles['nav'];
}
