import styles from './component.module.css';

export default function Header(root) {
  root.innerHTML = `
    <div class="${styles['header-wrapper']}">
      <div class="${styles['logo-box']}">
          <picture>
              <source media="(min-width: 770px)" srcset="/img/desktop-logo.png" />
              <source media="(max-width: 1024px)" srcset="/img/mobile-logo.png" />
              <img src="/img/desktop-logo.png" alt="ShelfSeek Logo" />
          </picture>
      </div>
      <div class=${styles["content-container"]}>
        <div class=${styles["searchbar-container"]}>
          <div class=${styles["header-searchbar-container"]}>
            <input type="text" id="header-searchbar-input" placeholder="Seek Books." autocomplete="off">
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
      </div>
    </div>
  `;

  const input = root.querySelector('#header-searchbar-input');
  const button = root.querySelector(`.${styles["searchbar-button-container"]}`);
  const buttonHome = root.querySelector(`.${styles["logo-box"]}`);


  if (!input || !button) {
      console.error("Main: input or button not found.");
      return;
  }

    const handleSearch = () => {
     const params = new URLSearchParams(window.location.search);
      const query = params.get("query") || "";
      if (query) {
          window.app.pushRoute(`/result?query=${encodeURIComponent(input.value.trim())}`);
          
      } else {
          window.app.pushRoute(`/result?query=${encodeURIComponent(input.value.trim())}`);
      }
    };

  input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
          event.preventDefault();
          handleSearch();
      }
  });



  buttonHome.addEventListener("click", () => window.app.pushRoute("/landing"))

  button.addEventListener("click", handleSearch);

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

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !autoSuggest.contains(e.target)) {
        autoSuggest.classList.remove(styles['show']);
      }
    });
  }

  const navContainer = document.querySelector(`.${styles["header-navigations-container"]}`);
  const navButtons = navContainer.querySelectorAll(`div:not(.${styles["navigation-icon"]})`);
  const circle = navContainer; 

  function moveCircle(target) {
    const rect = target.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();

    const offsetLeft = rect.left - containerRect.left + rect.width / 2;
    const width = rect.width;
    const height = rect.height;

    navContainer.style.setProperty("--indicator-left", `${offsetLeft}px`);
    navContainer.style.setProperty("--indicator-width", `${width}px`);
    navContainer.style.setProperty("--indicator-height", `${height}px`);
  }

  const starButton = document.querySelector(`.${styles["searchbar-button-container"]} img`);
  if (starButton) {
    starButton.addEventListener("click", () => {
      starButton.classList.remove("twinkle-once");
      void starButton.offsetWidth;
      starButton.classList.add("twinkle-once");

      setTimeout(() => {
        starButton.classList.remove("twinkle-once");
      }, 2000);
    });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navButtons.forEach((b) => {
        b.classList.remove(styles["selected"]);
        b.classList.add(styles["not-selected"]);
      });
      btn.classList.add(styles["selected"]);
      btn.classList.remove(styles["not-selected"]);
      moveCircle(btn);
    });
  });

  const initialSelected = navContainer.querySelector(`.${styles["selected"]}`);
  if (initialSelected) moveCircle(initialSelected);

}