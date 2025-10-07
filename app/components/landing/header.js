import styles from './component.module.css';

export default function Header(root) {
    root.innerHTML = `
        <div class=${styles["header-container"]}>
            <div class=${styles["logo-wrapper"]}>
                <img src="/img/Removal-744.png" alt="ShelfSeek Logo" class=${styles["logo-img"]} id="site-logo" />
            </div>

            <nav class=${styles["nav"]}>
                <a href="#" class=${styles["nav-link active"]} data-page="Explore">Explore</a>
                <a href="#" class=${styles["nav-link"]} data-page="Genres">Genres</a>
                <a href="#" class=${styles["nav-link"]} data-page="Authors">Authors</a>
                <a href="#" class=${styles["nav-link"]} data-page="About">About</a>
            </nav>

            <div>
                <a href="#" class=${styles["search-btn nav-link"]} data-page="Searches">Searches</a>
            </div>
        </div>
        `;

    // NOTE: If need ng css design ng header, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['header']
}