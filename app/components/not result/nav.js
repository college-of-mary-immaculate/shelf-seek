import styles from './component.module.css';
// import styles from '../../components/not result/'

export default function Nav(root) {
    root.innerHTML = `
        <div class=${styles["bottom-nav"]}>
            <a href="#" class=${styles["active"]} data-page="Explore" 
                data-icon-default="/img/EXPLORE-UNSELECTED.png" 
                data-icon-active="/img/EXPLORE-SELECTED.png">
                <img src="/img/EXPLORE-SELECTED.png" alt="Explore" class=${styles["nav-icon"]} />
                <span>Explore</span>
            </a>
            <a href="#" data-page="Genres"
                data-icon-default="/img/GENRE-UNSELECTED.png"
                data-icon-active="/img/GENRE-SELECTED.png">
                <img src="/img/GENRE-UNSELECTED.png" alt="Genre" class=${styles["nav-icon"]} />
                <span>Genre</span>
            </a>
            <a href="#" data-page="Authors"
                data-icon-default="/img/AUTHOR-UNSELECTED.png"
                data-icon-active="/img/AUTHOR-SELECTED.png">
                <img src="/img/AUTHOR-UNSELECTED.png" alt="Author" class=${styles["nav-icon"]} />
                <span>Author</span>
            </a>
            <a href="#" data-page="About"
                data-icon-default="/img/ABOUT-UNSELECTED.png"
                data-icon-active="/img/ABOUT-SELECTED.png">
                <img src="/img/ABOUT-UNSELECTED.png" alt="About" class=${styles["nav-icon"]} />
                <span>About</span>
            </a>
            <a href="#" data-page="Searches"
                data-icon-default="/img/SEARCHERS-UNSELECTED.png"
                data-icon-active="/img/SEARCHERS-SELECTED.png">
                <img src="/img/SEARCHERS-UNSELECTED.png" alt="Searches" class=${styles["nav-icon"]} />
                <span>Searches</span>
            </a>
        </div>    
        
    `;

    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['footer']
}