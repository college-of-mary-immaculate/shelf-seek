import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <!-- Lagay here lahat ng elements the footer section -->
        <h1> Footer to</h1>
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    root.className = styles['footer']
}