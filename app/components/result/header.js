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

          <div class=${styles["auto-suggest-container"]} id="auto-suggest">
            <div class=${styles["suggest-item"]}>
              <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" alt="suggest-icon" class=${styles["suggest-icon"]}/>
              <div class=${styles["suggest-text"]}>How to be a racist?</div>
            </div>

            <div class=${styles["suggest-item"]}>
              <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" alt="suggest-icon" class=${styles["suggest-icon"]}/>
              <div class=${styles["suggest-text"]}>How to hit the second plane with a tower</div>
            </div>

            <div class=${styles["suggest-item"]}>
              <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" alt="suggest-icon" class=${styles["suggest-icon"]}/>
              <div class=${styles["suggest-text"]}>Why Vince is racist?</div>
            </div>

            <div class=${styles["suggest-item"]}>
              <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" alt="suggest-icon" class=${styles["suggest-icon"]}/>
              <div class=${styles["suggest-text"]}>Why books are beautiful?</div>
            </div>

            <div class=${styles["suggest-item"]}>
              <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" alt="suggest-icon" class=${styles["suggest-icon"]}/>
              <div class=${styles["suggest-text"]}>Why you gay?</div>
            </div>

            <div class=${styles["suggest-item"]}>
              <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" alt="suggest-icon" class=${styles["suggest-icon"]}/>
              <div class=${styles["suggest-text"]}>Why hitler have a facebook account?</div>
            </div>
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
        <span>Could it be <b>Hampter?</b></span>
      </div>
    </div>
  `;

  // Auto-suggest functionality
  const searchInput = document.getElementById('header-searchbar-input');
  const autoSuggest = document.getElementById('auto-suggest');

  if (searchInput && autoSuggest) {
    searchInput.addEventListener('input', (e) => {
      if (e.target.value.trim().length > 0) {
        autoSuggest.classList.add(styles['show']);
      } else {
        autoSuggest.classList.remove(styles['show']);
      }
    });

    // Close auto-suggest when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !autoSuggest.contains(e.target)) {
        autoSuggest.classList.remove(styles['show']);
      }
    });
  }
}
