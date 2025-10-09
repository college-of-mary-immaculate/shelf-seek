import styles from './component.module.css';

export default function Header(root) {
    console.log(root)
    root.innerHTML = `
        <div>main</div>
    `;

    // NOTE: If need ng css design ng header, kindly add the css to the component.module.css and uncomment this
    root.className = styles['header'] || '';
}