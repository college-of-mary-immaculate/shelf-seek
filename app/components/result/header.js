import styles from './component.module.css';

export default function Header(root) {
    console.log(root)
    root.innerHTML = `
        <header class="${styles['header']}">
            <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760015857/Gemini_Generated_Image_ikgpkxikgpkxikgp_n6mnln-removebg-preview_tljyw7.png" 
                alt="logo" 
                class="${styles['icon-logo']}">

            <div class="${styles['content-container']}">
                <div class="${styles['searchbar-container']}">
                    <div class="${styles['header-searchbar-container']}">
                        <input type="text" id="header-searchbar-input" placeholder="Seek Books." class="${styles['header-searchbar-input']}">
                        <div class="${styles['searchbar-button-container']}">
                            <img src="../../../static/images/Result Page/SEARCH-ICON.png" alt="">
                        </div>
                    </div>

                    <div class="${styles['header-navigations-container']}">
                        <div class="${styles['selected']}" id="all-btn">
                            <span>All</span>
                        </div>
                        <div class="${styles['not-selected']}" id="genres-btn">
                            <span>Genres</span>
                        </div>
                        <div class="${styles['not-selected']}" id="authors-btn">
                            <span>Authors</span>
                        </div>
                        <div class="${styles['not-selected']}" id="ratings-btn">
                            <span>Ratings</span>
                        </div>
                        <div class="${styles['not-selected']}" id="shoppings-btn">
                            <span>Shopping</span>
                        </div>
                        <div class="${styles['navigation-icon']}">
                            <img src="../../../static/images/Result Page/HIDE-ICON.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;

    // Use root.querySelector since the elements are inside root
    const navigationIcon = root.querySelector(`.${styles['navigation-icon']}`);
    const headerNavigations = root.querySelector(`.${styles['header-navigations-container']}`);
    const navButtons = root.querySelectorAll(`.${styles['selected']}, .${styles['not-selected']}`);

    // Toggle functionality para sa hide/show
    let isHidden = false;

    navigationIcon.addEventListener('click', function() {
        isHidden = !isHidden;
        
        if (isHidden) {
            // Hide navigation buttons
            navButtons.forEach(btn => {
                btn.style.opacity = '0';
                btn.style.pointerEvents = 'none';
            });
            // Rotate icon
            navigationIcon.querySelector('img').style.transform = 'rotate(180deg)';
        } else {
            // Show navigation buttons
            navButtons.forEach(btn => {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            });
            // Reset icon rotation
            navigationIcon.querySelector('img').style.transform = 'rotate(0deg)';
        }
    });

    // Active tab switching functionality
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            navButtons.forEach(btn => {
                btn.classList.remove(styles['selected']);
                btn.classList.add(styles['not-selected']);
            });
            
            // Add 'selected' class to clicked button
            this.classList.remove(styles['not-selected']);
            this.classList.add(styles['selected']);
        });
    });
}