import styles from './component.module.css';

export default function Main(root) {

    root.innerHTML = `
        <div class="${styles['book-container']}">
            <div class="${styles['dit-1']}">
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759490350/9781408855669-6cfb2099b6e84a4899ce368d6facc242_4_2_u6cxxp.png" alt="b-1" class="${styles['b-1']}">
                <div class="${styles['middle-con-1']}">
                    <h1 class="${styles['title-1']}">Harry Potter</h1>
                    <h2 class="${styles['mini-detail-1']}">The Chamber of Secrets<span class="${styles['date-1']}">October 3, 2025</span></h2>
                    <h3 class="${styles['info-1']}">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        null...
                    </h3>
                    <div class="${styles['button-container']}">
                        <button class="${styles['btns-1']}">J.K Rowling</button>
                        <button class="${styles['btns-1']}">J.K Rowling</button>
                        <button class="${styles['btns-1']}">J.K Rowling</button>
                        <button class="${styles['btns-1']}"><img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759501467/Group_31_uo29p9.png" alt="dots"></button>
                    </div>
                </div>
            </div>
            <div class="${styles['dit-2']}">
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759334330/images_3_4_ml4upo.png" alt="b-2" class="${styles['b-2']}">
                <div class="${styles['middle-con-2']}">
                    <h1 class="${styles['title-2']}">Harry Potter</h1>
                    <h2 class="${styles['mini-detail-2']}">The Chamber of Secrets<span class="${styles['date-2']}">October 3, 2025</span></h2>
                    <h3 class="${styles['info-2']}">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        null...
                    </h3>
                    <div class="${styles['button-container']}">
                        <button class="${styles['btns-2']}">J.K Rowling</button>
                        <button class="${styles['btns-2']}">J.K Rowling</button>
                        <button class="${styles['btns-2']}">J.K Rowling</button>
                        <button class="${styles['btns-2']}"><img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759501467/Group_31_uo29p9.png" alt="dots"></button>
                    </div>
                </div>
            </div>
            <div class="${styles['dit-3']}">
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759334330/images_1_5_ogrcsl.png" alt="b-3" class="${styles['b-3']}">
                <div class="${styles['middle-con-3']}">
                    <h1 class="${styles['title-3']}">Harry Potter</h1>
                    <h2 class="${styles['mini-detail-3']}">The Chamber of Secrets<span class="${styles['date-3']}">October 3, 2025</span></h2>
                    <h3 class="${styles['info-3']}">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        null...
                    </h3>
                    <div class="${styles['button-container']}">
                        <button class="${styles['btns-3']}">J.K Rowling</button>
                        <button class="${styles['btns-3']}">J.K Rowling</button>
                        <button class="${styles['btns-3']}">J.K Rowling</button>
                        <button class="${styles['btns-3']}"><img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759501467/Group_31_uo29p9.png" alt="dots"></button>
                    </div>
                    <div class=${styles["knowledge-panel-description"]}>
                        <span>J. K. Rowling, is a British author best known as the creator of the Harry Potter fantasy series, the idea for which was conceived whilst on a train trip from Manchester to London in 1990. The Potter books have gained worldwide attention, won multiple awards, sold more than 400 million copies, and been the basis for a popular series of films.</span>
                    </div>
                    <div class=${styles["knowledge-fact-panel"]}></div>
               </div>
            </div>
        </div>
        <div class="${styles['author-container']}">
            <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759324992/Group_112_ruf576.png" alt="a-icon">
            <header class="${styles['author-name']}">J.K Rowling</header>
            <h3 class="${styles['author-description']}">British author and philanthropist (born 1965)</h3>
            <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759324980/JK-Rowling1_1_mvo2nt.png" alt="author-pic" class="${styles['author-pic']}">
        </div>
    `;

    root.className = styles['main'];

    setTimeout(() => {
        const elements = root.querySelectorAll(
            `.${styles["book-container"]}, 
            .${styles["find-elsewhere-container"]}, 
            .${styles["related-findings-container"]}`
        );

        const bookImages = root.querySelectorAll(
            `.${styles["book-container"]} img`
        );

        const authorHeaders = root.querySelectorAll(`.${styles["other-author-header-container"]}`);
        const findElseWhere = root.querySelectorAll(`.${styles["find-elsewhere-header-container"]}`);
        const otherRelated = root.querySelectorAll(`.${styles["related-findings-header-container"]}`);
        
        const authorContainers = root.querySelectorAll(`.${styles["author-container"]}`);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles["show"]);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            el.classList.add(styles["fadeElement"]);
            observer.observe(el);
        });

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles["slideLeftVisible"]);
                    headerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        authorHeaders.forEach(header => {
            header.classList.add(styles["slideLeft"]);
            headerObserver.observe(header);
        });

        findElseWhere.forEach(header => {
            header.classList.add(styles["slideLeft"]);
            headerObserver.observe(header);
        });

        otherRelated.forEach(header => {
            header.classList.add(styles["slideLeft"]);
            headerObserver.observe(header);
        });

        const authorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(authorContainers).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add(styles["slideUpVisible"]);
                    }, index * 150); 
                    authorObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        authorContainers.forEach(author => {
            author.classList.add(styles["slideUp"]);
            authorObserver.observe(author);
        });

        const bookObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles["bookImageVisible"]);
                    bookObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        bookImages.forEach(img => {
            img.classList.add(styles["bookImage"]);
            bookObserver.observe(img);
        });

        const findElsewhereItems = root.querySelectorAll(`.${styles["find-elsewhere-list-container"]} > div`);

        const findElsewhereObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(findElsewhereItems).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add(styles["slideLeftVisible"]);
                    }, index * 200); 
                    findElsewhereObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        findElsewhereItems.forEach(item => {
            item.classList.add(styles["slideLeft"]);
            findElsewhereObserver.observe(item);
        });

        const relatedFindItems = root.querySelectorAll(`.${styles["related-findings-list-container"]} > div`);

        const relatedFindObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(relatedFindItems).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add(styles["slideLeftVisible"]);
                    }, index * 80); 
                    relatedFindObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        relatedFindItems.forEach(item => {
            item.classList.add(styles["slideLeft"]);
            relatedFindObserver.observe(item);
        });
    }, 100);
}