import styles from './component.module.css';

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
            <div class=${styles["extra-button"]}>
                <span>Could it be Hampter? </span>
            </div>
        </div>
    `;

    // root.className = styles['header'];

    // const navToggle = document.getElementById('navToggle');
    // const navRow = document.getElementById('navRow');

    // navToggle.addEventListener('click', function() {
    //     navRow.classList.toggle('show');
    // });
}