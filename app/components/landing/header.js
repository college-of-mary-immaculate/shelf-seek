import styles from './component.module.css';

export default function Header(root) {
    root.innerHTML = `
        <div class=${styles["header"]}>
            <div class=${styles["header-container"]}>
                <div class=${styles["logo-box"]}>
                    <picture>
                        <source media="(min-width: 770px)" srcset="/img/desktop-logo.png" />
                        <source media="(max-width: 1024px)" srcset="/img/mobile-logo.png" />
                        <img src="/img/desktop-logo.png" alt="ShelfSeek Logo" />
                    </picture>
                </div>

                <nav class=${styles["nav"]}>
                    <a href="#" class="${styles["nav-link"]} ${styles["active"]}" data-page="Explore">Explore</a>
                    <a href="#" class=${styles["nav-link"]} data-page="Genres">Genres</a>
                    <a href="#" class=${styles["nav-link"]} data-page="Authors">Authors</a>
                    <a href="#" class=${styles["nav-link"]} data-page="About">About</a>
                </nav>

                <div class=${styles["search-btn-container"]}>
                    <a href="#" class="${styles["search-btn"]} ${styles["nav-link"]}" data-page="Searches">Searches</a>
                </div>
            </div>
        </div>
        `;

    // NOTE: If need ng css design ng header, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['header']
}