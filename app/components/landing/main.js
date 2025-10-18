import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <section class=${styles["hero"]}>
            <div class=${styles["hero-content"]}>
                <div class=${styles["hero-title"]}>
                    <h1>Every Shelf <br><span>has <span class=${styles["highlight"]}>a story</span></span></h1>
                </div>
                <div class=${styles["searchbar-container"]} style="opacity: 0; transform: translateY(10px); transition: all 0.8s ease-out;">
                    <input type="text" placeholder="Seek Books.">
                    <div class=${styles["search-bbtn"]}>
                    <img src="https://res.cloudinary.com/deogcjil5/image/upload/v1759738671/SEARCH-ICON_v4clpf.png" alt="">
                    </div>
                </div>
                <div class=${styles["previous-searches-container"]} style="opacity: 0; transform: translateX(30px); transition: all 0.8s ease-out;">
                    <div class=${styles["result-container"]} style="opacity: 0; transform: translateX(30px); transition: all 0.6s ease-out;">
                    <span>Just books.</span>
                    </div>
                    <div class=${styles["result-container"]} style="opacity: 0; transform: translateX(30px); transition: all 0.6s ease-out;">
                    <span>How to end Racism?</span>
                    </div>
                    <div class=${styles["result-container"]} style="opacity: 0; transform: translateX(30px); transition: all 0.6s ease-out;">
                    <span>A Lovely plane who loves the tower</span>
                    </div>
                </div>
            </div>
        </section>
    `;

    setTimeout(() => {
        const titleTop = root.querySelector(`.${styles["hero-title"]}`);
        const searchBar = root.querySelector(`.${styles["searchbar-container"]}`);

        if (titleTop) {
            titleTop.style.opacity = '1';
            titleTop.style.transform = 'translateY(0)';
        }

        if (searchBar) {
            searchBar.style.opacity = '1';
            searchBar.style.transform = 'translateY(0)';
        }
    }, 200);


    // Animate previous searches container - fade in slide left
    setTimeout(() => {
        const previousSearches = root.querySelector(`.${styles["previous-searches-container"]}`);
        if (previousSearches) {
            previousSearches.style.opacity = '1';
            previousSearches.style.transform = 'translateX(0)';
        }
    }, 600);

    // Animate individual result containers with stagger effect
    const resultContainers = root.querySelectorAll(`.${styles["result-container"]}`);
    resultContainers.forEach((container, index) => {
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateX(0)';
        }, 700 + (index * 150)); // 700ms, 850ms, 1000ms
    });

    const starButton = document.querySelector(`.${styles["search-bbtn"]} img`);
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

    // NOTE: If need ng css design ng main, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['main']
}