import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <section class=${styles["hero"]}>
            <div class=${styles["hero-content"]}>
                <div class=${styles["hero-title"]}>
                    <h1>Every Shelf <br><span>has <span class=${styles["highlight"]}>a story</span></span></h1>
                </div>
                <div class=${styles["searchbar-container"]}>
                    <input type="text" id="search-input" placeholder="Seek Books.">
                    <div class=${styles["search-bbtn"]}>
                        <img src="https://res.cloudinary.com/deogcjil5/image/upload/v1759738671/SEARCH-ICON_v4clpf.png" alt="">
                    </div>
                </div>
                <div class=${styles["previous-searches-container"]}>
                    <div class=${styles["result-container"]}>
                        <span>Just books.</span>
                    </div>
                    <div class=${styles["result-container"]}>
                        <span>How to end Racism?</span>
                    </div>
                    <div class=${styles["result-container"]}>
                        <span>A Lovely plane who loves the tower</span>
                    </div>
                </div>
            </div>
        </section>
    `;

    const input = root.querySelector('#search-input');
    const button = root.querySelector(`.${styles["search-bbtn"]}`);

    if (!input || !button) {
        console.error("Main: input or button not found.");
        return;
    }

    const handleSearch = () => {
        const query = input.value.trim();
        if (query) {
            window.app.pushRoute("/result");
        } else {
            window.app.pushRoute("/noresult");
        }
    };

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    });

    button.addEventListener("click", handleSearch);
}

    // NOTE: If need ng css design ng main, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['main']
