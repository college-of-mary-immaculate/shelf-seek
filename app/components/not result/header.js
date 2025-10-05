import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Header(root) {
    root.innerHTML = `
        <div class=${styles["header-container"]}>
            <div class=${styles["logo-box"]}>
                <img src="/app/img/Removal-744.png" alt="ShelfSeek Logo" />
            </div>

            <div class=${styles["search-bar"]}>
                <input type="text" placeholder="Seek Books." />
                <button><i class=${styles["fa fa-search"]}></i></button>
            </div>
        </div>

        <nav class=${styles["nav"]}>
            <a href="#" class=${styles["active"]}>All</a>
            <a href="#">Genres</a>
            <a href="#">Authors</a>
            <a href="#">Ratings</a>
            <a href="#">Shopping</a>

            <a href="#" class=${styles["star-btn"]}>
                <img src="/app/img/HIDE-ICON.png" alt="Hidden Icon" />
            </a>
        </nav>
        
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}