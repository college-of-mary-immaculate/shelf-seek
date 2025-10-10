import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Footer(root) {
    root.innerHTML = `
        <footer id="footer">

        <div class=${styles["upper-container"]}>
            <div class=${styles["upper-container-content"]}>

                <div class=${styles["shelfseek-about-us-container"]}>
                    <div class=${styles["title-subtitle-container"]}>
                        <h1>Shelf<span class=${styles["highlight"]}>Seek</span>  </h1>
                        <h3>Every Shelf has <span class="highlight">a story</span></h3>
                    </div>
                    
                    <div class=${styles["about-us-container"]}>
                        <h3>About Us</h3>
                        <p>We’re constantly improving ShelfSeek to make book discovery even easier, helping you explore new titles and authors every day.</p>
                    </div>
                </div>

                <div class=${styles["shelfseek-info-lists-container"]}>
                    <div class=${styles["teck-stack-list-container"]}>
                        <h3>Tech Stack</h3>
                        <div class=${styles["list-container"]}>
                            <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>HTML</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>CSS</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>SPA</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>FASTAPI</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>MongoDB</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Docker</span>
                            </span>
                        </div>
                    </div>
                    <div class=${styles["content-list-container"]}>
                        <h3>Content</h3>
                        <div class=${styles["list-container"]}>
                            <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>All</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Genres</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Authors</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Ratings</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Shopping</span>
                            </span>
                        </div>
                    </div>
                    <div class=${styles["source-list-container"]}>
                        <h3>Source</h3>
                        <div class=${styles["list-container"]}>
                            <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Open Library</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Goodreads</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Project Guttenburg</span>
                            </span>
                             <span class=${styles["list"]}>
                                <div class=${styles["bullet"]}></div>
                                <span>Barnes & Nobles</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class=${styles["shelfseek-social-container"]}>
                    <div class=${styles["social-container"]}>
                        <div class=${styles["language-dropdown"]}>
                            <div class=${styles["language-display-container"]}>
                                <span>English</span>
                            </div>
                            <div id="dropdown-language-button">
                                <img src="https://res.cloudinary.com/deogcjil5/image/upload/v1760083138/drop-down-arrow_qgoncr.svg" alt="Dropdown Lnaguage Button icon">
                            </div>
                        </div>

                        <div class=${styles["follow-us-container"]}>
                            <div class=${styles["social-medias-container"]}>
                                <div class=${styles["social-media-button"]}><img src="https://res.cloudinary.com/deogcjil5/image/upload/v1760083117/twitter-alt_zqxihw.png" alt="Twitter icon" id="twitter-icon"></div>
                                <div class=${styles["social-media-button"]}><img src="https://res.cloudinary.com/deogcjil5/image/upload/v1760083117/github_7_qz4fsz.png" alt="Github icon" id="github-icon"></div>
                                <div class=${styles["social-media-button"]}><img src="https://res.cloudinary.com/deogcjil5/image/upload/v1760083117/facebook-app-symbol_2_l7jojc.png" alt="Facebook icon" id="facebook-icon"></div>
                                <div class=${styles["social-media-button"]}><img src="https://res.cloudinary.com/deogcjil5/image/upload/v1760083118/instagram_6_abj80g.png" alt="Instagram icon" id="instagram-icon"></div>
                            </div>
                            <h3>Follow Us</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class=${styles["lower-container"]}>
            <div class=${styles["lower-container-content"]}>
                <div class=${styles["lower-left-container"]}>
                    <span>Send Feedback</span>
                    <div class=${styles["bullet"]}></div>
                    <span>About us</span>
                    <div class=${styles["bullet"]}></div>
                    <span>Contact</span>
                </div>

                <div class=${styles["lower-right-container"]}>
                        <img src="../static/images/copyright.png" alt="">
                        <span>2025 ShelfSeek, For educational purposes only.</span>
                </div>
            </div>

        </div>

    </footer>
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}