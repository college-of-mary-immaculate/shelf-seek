import styles from './component.module.css';

export default function Nav(root) {
    // Initial render
    renderNav();

    function renderNav() {
        const currentPage = window.location.hash.slice(1) || 'Explore';
        
        root.innerHTML = `
            <div class=${styles["bottom-nav"]}>
                <a href="#Explore" class="${currentPage === 'Explore' ? styles.active : ''}" 
                    data-page="Explore" 
                    data-icon-default="/img/EXPLORE-UNSELECTED.png" 
                    data-icon-active="/img/EXPLORE-SELECTED.png">
                    <img src="${currentPage === 'Explore' ? '/img/EXPLORE-SELECTED.png' : '/img/EXPLORE-UNSELECTED.png'}" 
                         alt="Explore" 
                         class=${styles["nav-icon"]} />
                    <span>Explore</span>
                </a>
                <a href="#Genres" 
                    class="${currentPage === 'Genres' ? styles.active : ''}"
                    data-page="Genres"
                    data-icon-default="/img/GENRE-UNSELECTED.png"
                    data-icon-active="/img/GENRE-SELECTED.png">
                    <img src="${currentPage === 'Genres' ? '/img/GENRE-SELECTED.png' : '/img/GENRE-UNSELECTED.png'}" 
                         alt="Genre" 
                         class=${styles["nav-icon"]} />
                    <span>Genre</span>
                </a>
                <a href="#Authors" 
                    class="${currentPage === 'Authors' ? styles.active : ''}"
                    data-page="Authors"
                    data-icon-default="/img/AUTHOR-UNSELECTED.png"
                    data-icon-active="/img/AUTHOR-SELECTED.png">
                    <img src="${currentPage === 'Authors' ? '/img/AUTHOR-SELECTED.png' : '/img/AUTHOR-UNSELECTED.png'}" 
                         alt="Author" 
                         class=${styles["nav-icon"]} />
                    <span>Author</span>
                </a>
                <a href="#About" 
                    class="${currentPage === 'About' ? styles.active : ''}"
                    data-page="About"
                    data-icon-default="/img/ABOUT-UNSELECTED.png"
                    data-icon-active="/img/ABOUT-SELECTED.png">
                    <img src="${currentPage === 'About' ? '/img/ABOUT-SELECTED.png' : '/img/ABOUT-UNSELECTED.png'}" 
                         alt="About" 
                         class=${styles["nav-icon"]} />
                    <span>About</span>
                </a>
                <a href="#Searches" 
                    class="${currentPage === 'Searches' ? styles.active : ''}"
                    data-page="Searches"
                    data-icon-default="/img/SEARCHERS-UNSELECTED.png"
                    data-icon-active="/img/SEARCHERS-SELECTED.png">
                    <img src="${currentPage === 'Searches' ? '/img/SEARCHERS-SELECTED.png' : '/img/SEARCHERS-UNSELECTED.png'}" 
                         alt="Searches" 
                         class=${styles["nav-icon"]} />
                    <span>Searches</span>
                </a>
            </div>
        `;

        // Add click event listeners to all nav items
        const navItems = root.querySelectorAll(`.${styles["bottom-nav"]} a`);
        navItems.forEach(item => {
            item.addEventListener('click', handleNavClick);
        });
    }

    function handleNavClick(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        const target = e.currentTarget;
        const page = target.getAttribute('data-page');
        
        // Update URL hash without triggering SPA navigation
        if (window.history && window.history.replaceState) {
            // Use replaceState instead of pushState to avoid adding to history
            window.history.replaceState({}, '', `#${page}`);
        } else {
            // Fallback for older browsers
            window.location.hash = `#${page}`;
        }
        
        // Update the UI
        updateActiveState(page);
        
        // Dispatch a custom event that other parts of the app can listen to
        window.dispatchEvent(new CustomEvent('navChange', { detail: { page } }));
    }

    function updateActiveState(activePage) {
        const navItems = root.querySelectorAll(`.${styles["bottom-nav"]} a`);
        
        navItems.forEach(item => {
            const page = item.getAttribute('data-page');
            const isActive = page === activePage;
            const img = item.querySelector('img');
            const defaultIcon = item.getAttribute('data-icon-default');
            const activeIcon = item.getAttribute('data-icon-active');
            
            // Update active class
            if (isActive) {
                item.classList.add(styles.active);
                // Force a new image load by removing and re-adding the src attribute
                img.src = '';
                setTimeout(() => {
                    img.src = activeIcon;
                }, 0);
            } else {
                item.classList.remove(styles.active);
                img.src = defaultIcon;
            }
            
            // Debug log to verify values
            console.log(`Page: ${page}, Active: ${isActive}, Src: ${isActive ? activeIcon : defaultIcon}`);
        });
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const currentPage = window.location.hash.slice(1) || 'Explore';
        updateActiveState(currentPage);
    });
    
    // Initial state setup with a small delay to ensure DOM is ready
    setTimeout(() => {
        const initialPage = window.location.hash.slice(1) || 'Explore';
        updateActiveState(initialPage);
        
        // Force update images after a short delay to ensure they're loaded
        setTimeout(() => {
            updateActiveState(initialPage);
        }, 50);
    }, 50);
}