import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Header(root) {
    root.innerHTML = `
        <div class=${styles["content-container"]}>
            <div class=${styles["searchbar-container"]}>
                <div class=${styles["header-searchbar-container"]}>
                    <input type="text" id="header-searchbar-input" placeholder="Seek Books.">
                    <div class=${styles["searchbar-button-container"]}>
                        <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760196186/star_3_f0gvo8.png" alt="">
                    </div>
                </div>
                <div class=${styles["header-navigations-container"]}>
                    <div class=${styles["selected"]} id=${styles["all-btn"]}>
                        <span>All</span>
                    </div>
                    <div class=${styles["not-selected"]} id="genres-btn">
                        <span>Genres</span>
                    </div>
                    <div class=${styles["not-selected"]} id="authors-btn">
                        <span>Authors</span>
                    </div>
                    <div class=${styles["not-selected"]} id="ratings-btn">
                        <span>Ratings</span>
                    </div>
                    <div class=${styles["not-selected"]} id="shoppings-btn">
                        <span>Shopping</span>
                    </div>
                    <div class=${styles["navigation-icon"]}>
                        <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760196138/book-spells_qetlpi.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;
    const input = root.querySelector('#header-searchbar-input');
    const button = root.querySelector(`.${styles["searchbar-button-container"]}`);

    if (!input || !button) {
        console.error("NoResult Header: search input or button not found.");
        return;
    }

    const handleSearch = () => {
        const query = input.value.trim();
        if (query) {
            window.app.pushRoute('/result');
        } else {
            console.warn("Empty search — staying on noresult page.");
        }
    };

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    });

    button.addEventListener('click', handleSearch);

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}