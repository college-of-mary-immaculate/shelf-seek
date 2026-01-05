import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <section class=${styles["hero"]}>
            <div class=${styles["hero-content"]}>
                <div class=${styles["hero-title"]}
                     style="opacity: 0; transition: opacity 2.8s ease-out; margin-bottom: 20px;">
                    <h1>Every Shelf <br><span>has <span class=${styles["highlight"]}>a story</span></span></h1>
                </div>

                <div class=${styles["searchbar-container"]}
                     style="opacity: 0; transform: translateX(30px); transition: all 0.8s ease-out;">
                    <input type="text" placeholder="Seek Books." id="search-input" autocomplete="off">
                    <div class=${styles["search-bbtn"]}>
                        <img src="https://res.cloudinary.com/deogcjil5/image/upload/v1759738671/SEARCH-ICON_v4clpf.png" alt="search icon">
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
                <div class=${styles["previous-searches-container"]}>
                    <div class=${styles["result-container"]} style="opacity: 0; transform: translateY(-20px); transition: all 0.8s ease-out;">
                        <span>Just books.</span>
                    </div>
                    <div class=${styles["result-container"]} style="opacity: 0; transform: translateY(-20px); transition: all 0.8s ease-out;">
                        <span>How to end Racism?</span>
                    </div>
                    <div class=${styles["result-container"]} style="opacity: 0; transform: translateY(-20px); transition: all 0.8s ease-out;">
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

    const debounce = (func, delay) => {
        let timeOutId;
        return (...args) => {
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => func.apply(null, args), delay);
        };
    };

    // Create the debounced version of your suggestion handler
    const debouncedHandleSuggestion = debounce(async (q) => {
        if (!q.trim()) {
            // Clear suggestions if query is empty
            const autoSuggest = root.querySelector('#auto-suggest');
            autoSuggest.innerHTML = '';
            autoSuggest.classList.remove(styles['show']);
            return;
        }

        try {
            // Make API call to get suggestions
            const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'
            const url = `${API_BASE}/suggestions/suggest?query=${encodeURIComponent(q.trim())}`;
        
            console.log('Fetching suggestions from:', url);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            if (!response.ok) throw new Error('Failed to fetch suggestions');
            
            const suggestions = await response.json(); // Assuming API returns JSON array

            console.log(suggestions)
            
            // Update the UI with suggestions
            updateAutoSuggestUI(suggestions);
            
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            // Optionally show error state or fallback suggestions
        }
    }, 3000); // 300ms debounce delay

    // Function to update the auto-suggest UI
    const updateAutoSuggestUI = (suggestion_api) => {
        const autoSuggest = root.querySelector('#auto-suggest');
        
        if (!suggestion_api || suggestion_api.length === 0) {
            autoSuggest.innerHTML = '';
            autoSuggest.classList.remove(styles['show']);
            return;
        }
        
        // Populate suggestion_api
        autoSuggest.innerHTML = suggestion_api?.suggestions.map(suggestion => `
            <div class="${styles["suggest-item"]}">
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760368039/bulb_1_vlovvz.png" 
                    alt="suggest-icon" class="${styles["suggest-icon"]}"/>
                <div class="${styles["suggest-text"]}">${suggestion}</div>
            </div>
        `).join('');
        
        // Show the suggestions container
        autoSuggest.classList.add(styles['show']);
        
        // Re-attach click handlers
        attachSuggestionClickHandlers();
    };

    // Function to attach click handlers to suggestion items
    const attachSuggestionClickHandlers = () => {
        const suggestItems = root.querySelectorAll(`.${styles["suggest-item"]}`);
        suggestItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const text = item.querySelector(`.${styles["suggest-text"]}`).textContent;
                input.value = text;
                
                // Hide suggestions after selection
                const autoSuggest = root.querySelector('#auto-suggest');
                autoSuggest.classList.remove(styles['show']);
                
                input.focus();
            });
        });
    };

    

    const handleSearch = () => {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("query") || "";

        // console.log("Search query:", query); // should log "oninoi"

        // Ano to walang pagpipilian magkaroon man ng query o wala? hahahaha
        if (query) {
            window.app.pushRoute(`/result?query=${encodeURIComponent(input.value.trim())}`, true);
            
        } else {
            window.app.pushRoute(`/result?query=${encodeURIComponent(input.value.trim())}`, true);
        }
    };

    // Usage in your input event listener
    input.addEventListener('input', (e) => {
        const query = e.target.value;
        debouncedHandleSuggestion(query); // This will be debounced
    });

    // Also handle focus to show suggestions if there's existing text
    input.addEventListener('focus', () => {
        if (input.value.trim().length > 0) {
            debouncedHandleSuggestion(input.value);
        }
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    });

    button.addEventListener("click", handleSearch);

    // Get elements after DOM is created
    const searchInput = root.querySelector('#search-input');
    const autoSuggest = root.querySelector('#auto-suggest');
    const searchBar = root.querySelector(`.${styles["searchbar-container"]}`);
    const starButton = root.querySelector(`.${styles["search-bbtn"]} img`);
    const titleTop = root.querySelector(`.${styles["hero-title"]}`);

    // Animation sequence
    setTimeout(() => {
        if (searchBar) {
            searchBar.style.opacity = '1';
            searchBar.style.transform = 'translateX(0)';
        }

        setTimeout(() => {
            const resultContainers = root.querySelectorAll(`.${styles["result-container"]}`);
            resultContainers.forEach((container, index) => {
                setTimeout(() => {
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                }, index * 300);
            });

            const totalDelay = resultContainers.length * 300 + 1100;
            setTimeout(() => {
                if (titleTop) {
                    titleTop.style.opacity = '1';
                }

                if (starButton) {
                    setTimeout(() => {
                        let twinkleCount = 0;
                        const twinkleInterval = setInterval(() => {
                            starButton.classList.add("twinkle-once");
                            setTimeout(() => {
                                starButton.classList.remove("twinkle-once");
                            }, 1000);
                            twinkleCount++;
                            if (twinkleCount === 1) {
                                clearInterval(twinkleInterval);
                            }
                        }, 1200);
                    }, 2000);
                }
            }, totalDelay);
        }, 800);
    }, 400);

    // Twinkle effect on star button click
    if (starButton) {
        starButton.addEventListener("click", () => {
            starButton.classList.remove("twinkle-once");
            void starButton.offsetWidth;
            starButton.classList.add("twinkle-once");

            setTimeout(() => {
                starButton.classList.remove("twinkle-once");
            }, 1000);
        });
    }

    // Auto-suggest functionality
    if (searchInput && autoSuggest) {
        // Show/hide auto-suggest based on input
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.trim().length > 0) {
                autoSuggest.classList.add(styles['show']);
            } else {
                autoSuggest.classList.remove(styles['show']);
            }
        });

        // Show auto-suggest on focus if there's text
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim().length > 0) {
                autoSuggest.classList.add(styles['show']);
            }
        });

        // Close auto-suggest when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchBar.contains(e.target)) {
                autoSuggest.classList.remove(styles['show']);
            }
        });

        // Handle suggest item clicks
        const suggestItems = autoSuggest.querySelectorAll(`.${styles["suggest-item"]}`);
        suggestItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the document click handler from firing
                const text = item.querySelector(`.${styles["suggest-text"]}`).textContent;
                searchInput.value = text;
                autoSuggest.classList.remove(styles['show']);
                searchInput.focus();
            });
        });
    }
}