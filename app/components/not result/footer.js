import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Footer(root) {
    root.innerHTML = `
        <div class=${styles["footer-container"]}>
            <div>
                <h2>Shelf<span class=${styles["highlight"]}>Seek</span></h2>
                <p>Every Shelf has <span class=${styles["highlight"]}>a story</span></p>
                <h3>About Us</h3>
                <p>We're constantly improving ShelfSeek to make book discovery easier, 
                helping you explore new titles and authors every day.</p>
            </div>

            <div>
                <h3>Tech Stacks</h3>
                <ul>
                <li>HTML</li><li>Tailwind</li><li>React</li>
                <li>FASTAPI</li><li>MongoDB</li><li>Docker</li>
                </ul>
            </div>

            <div>
                <h3>Content</h3>
                <ul>
                <li>All</li><li>Genres</li><li>Authors</li>
                <li>Ratings</li><li>Shopping</li>
                </ul>
            </div>

            <div>
                <h3>Sources</h3>
                <ul>
                <li>Open Library</li><li>Goodreads</li>
                <li>Project Guttenburg</li><li>Barnes & Nobles</li>
                </ul>
            </div>

            <div>
                <div class=${styles["language-selector"]}>
                <button>English</button>
                <div class=${styles["dropdown"]}><i class="fa fa-caret-down"></i></div>
                </div>

                <h3>Follow Us</h3>
                <div class=${styles["socials"]}>
                <a href="#"><i class=${styles["fa-brands fa-x-twitter"]}></i></a>
                <a href="#"><i class=${styles["fa-brands fa-github"]}></i></a>
                <a href="#"><i class=${styles["fa-brands fa-facebook"]}></i></a>
                <a href="#"><i class=${styles["fa-brands fa-instagram"]}></i></a>
                </div>
            </div>
            </div>

            <div class=${styles["footer-bottom"]}>
            <div class=${styles["links"]}>
                <a href="#">Send Feedback</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </div>
            <p>© 2025 ShelfSeek, For educational purposes only.</p>
        </div>
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}