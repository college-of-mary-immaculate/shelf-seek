import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Main(root) {
    root.innerHTML = `
        <section class=${styles["error-section"]}>
      <div class=${styles["error-text"]}>
        <h1>Our <span class="highlight">librarian</span> flipped every page,<br> 
        but still couldn’t find <span class="code">“n3inaop**@Y96.”</span></h1>
        <ul>
          <li>Even the index is blank on that one.</li>
          <li>You can request your findings to the librarian</li>
          <li>Try using the ISBN number</li>
          <li>Looks like it hasn’t been written yet</li>
        </ul>
      </div>
      <div class=${styles["error-img"]}>
        <img src="https://res.cloudinary.com/deogcjil5/image/upload/v1759734172/man_kx4otc.png" alt="Confused Librarian"/>
      </div>
    </section>
        
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}