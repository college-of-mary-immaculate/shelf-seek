import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Header(root) {
    root.innerHTML = `
        <div class=${styles["header-container"]}>
            <div class=${styles["logo-box"]}>
                <picture>
                    <source media="(min-width: 770px)" srcset="/img/desktop-logo.png" />
                    <source media="(max-width: 1024px)" srcset="/img/mobile-logo.png" />
                    <img src="/img/desktop-logo.png" alt="ShelfSeek Logo" />
                </picture>
            </div>

            <div class=${styles["search-bar"]}>
                <input type="text" placeholder="Seek Books." />
                <button><img src="/img/SEARCH-ICON.png" alt="Search" class=${styles["search-icon"]} /></button>
            </div>
        </div>

        <nav class=${styles["nav"]}>
            <a href="#" class=${styles["active"]}>All</a>
            <a href="#">Genres</a>
            <a href="#">Authors</a>
            <a href="#">Ratings</a>
            <a href="#">Shopping</a>

            <a href="#" class=${styles["star-btn"]}>
                <img src="/img/HIDE-ICON.png" alt="Hidden Icon" />
            </a>
        </nav>
        
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}