import styles from './component.module.css';

export default function Main(root) {

    root.innerHTML = `
        <div class=${styles["main-content"]}>
            <div class=${styles["left-container"]}>
                <div class=${styles["book-shelf"]}>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class=${styles["other-author-container"]}>
                    <div class=${styles["other-author-header-container"]}>
                        <div class=${styles["other-author-icon-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760284720/quill-pen-story_cehwfp.png" alt="Other author icon">
                        </div>
                        <div class=${styles["other-author-header-title"]}>
                            <span>Other Authors</span>
                        </div>
                    </div>
                    <div class=${styles["other-author-list-container"]}>
                        <div class=${styles["author-container"]}>
                            <div class="${styles["author-cover-image-container"]} ${styles["default1"]}">
                                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760286193/reading_1_lsukzn.png" alt="Adolf Hitler Cover Picture">
                            </div>
                            <h1>Adolf Hitler</h1>
                            <span>British author and philanthropist (born 1965)</span>
                        </div>
                        <div class=${styles["author-container"]}>
                            <div class="${styles["author-cover-image-container"]} ${styles["default1"]}">
                                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760286193/reading_1_lsukzn.png" alt="Adolf Hitler Cover Picture">
                            </div>
                            <h1>Adolf Hitler</h1>
                            <span>British author and philanthropist (born 1965)</span>
                        </div>
                        <div class=${styles["author-container"]}>
                            <div class="${styles["author-cover-image-container"]} ${styles["default1"]}">
                                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760286193/reading_1_lsukzn.png" alt="Adolf Hitler Cover Picture">
                            </div>
                            <h1>Adolf Hitler</h1>
                            <span>British author and philanthropist (born 1965)</span>
                        </div>
                    </div>
                </div>

                <div class=${styles["book-shelf"]}>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div class=${styles["find-elsewhere-container"]}>
                    <div class=${styles["find-elsewhere-header-container"]}>
                        <div class=${styles["find-elsewhere-icon-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760288007/book_thae2v.png" alt="Find Elsewhere icon">
                        </div>
                        <div class=${styles["find-elsewhere-header-title"]}>
                            <span>Find Elsewhere</span>
                        </div>
                    </div>
                    <div class=${styles["find-elsewhere-list-container"]}>
                        <div class=${styles["source-chip1"]}>
                            <span>GoodReads</span>
                        </div>
                        <div class=${styles["source-chip2"]}>
                            <span>Open Library</span>
                        </div>
                        <div class=${styles["source-chip3"]}>
                            <span>Project Gutenburg</span>
                        </div>
                    </div>
                </div>
                
                <div class=${styles["book-shelf"]}>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=${styles["book-container"]}>
                        <div class=${styles["book-image-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="">
                        </div>
                        <div class=${styles["book-meta-container"]}>
                            <div class=${styles["meta-header"]}>
                                <div class=${styles["meta-title-container"]}>
                                    <span>Harry Potter The Chamber of Secrets</span>
                                </div>
                                <div class=${styles["meta-date-published-container"]}>
                                    <span>Sept 23, 2025</span>
                                </div>
                            </div>
                            <div class=${styles["meta-description"]}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</span>
                            </div>
                            <div class=${styles["meta-chips"]}>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["chip"]}><span>J.K Rowling</span></div>
                                <div class=${styles["more-chip"]}>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                    <div class=${styles["bullet"]}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class=${styles["related-findings-container"]}>
                    <div class=${styles["related-findings-header-container"]}>
                        <div class=${styles["related-findings-icon-container"]}>
                            <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760289854/search_2_ukukby.png" alt="Related Findings icon">
                        </div>
                        <div class=${styles["related-findings-header-title"]}>
                            <span>Related to your Findings</span>
                        </div>
                    </div>
                    <div class=${styles["related-findings-list-container"]}>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat?</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>wheres book?</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat? or a dog? nah</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat? or Is it a cat?</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat?</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat?</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat?</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat? cat? cat???</span>
                        </div>
                        <div class=${styles["related-find-chips"]}>
                            <span>Is it a cat?</span>
                        </div>
                    </div>
                </div>

                <div class=${styles["pagination-container"]}>
                    <div class=${styles["page-num-btn"]}>
                        <span>1</span>
                    </div>
                    <div class=${styles["next-page-btn"]}>
                        <span>Next Page</span>
                        <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760197423/drop-down-arrow_fvni77.svg" alt="Next button icon">
                    </div>
                </div>
            </div>

            <div class=${styles["right-container"]}>
               <div class=${styles["knowledge-panel-container"]}>
                    <div class=${styles["knowledge-panel-icon-header"]}>
                        <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760284720/pen_n5jotb.png" alt="Author knowledge panel icon">
                    </div>
                    <div class=${styles["knowledge-panel-title-header"]}>
                        <span>J.K Rowling</span>
                    </div>
                    <div class=${styles["knowledge-panel-subtitle-header"]}>
                        <span>British author and philanthropist (born 1965)</span>
                    </div>
                    <div class=${styles["knowledge-panel-image-conainer"]}>
                        <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1760316382/JK-Rowling1_oqfvor.webp" alt="J.K Rowling image">
                    </div>
                    <div class=${styles["knowledge-panel-description"]}>
                        <span>J. K. Rowling, is a British author best known as the creator of the Harry Potter fantasy series, the idea for which was conceived whilst on a train trip from Manchester to London in 1990. The Potter books have gained worldwide attention, won multiple awards, sold more than 400 million copies, and been the basis for a popular series of films.</span>
                    </div>
                    <div class=${styles["knowledge-fact-panel"]}></div>
               </div>
            </div>
        </div>
    `;

    root.className = styles['main'];

    const mainContent = root.querySelector(`.${styles["main-content"]}`);
    setTimeout(() => {
        mainContent.classList.add(styles["mainFadeIn"]);
    }, 100); // triggers after slight delay for a smooth entrance


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

    // --- OTHER AUTHOR LIST ANIMATION ---
    const otherAuthorItems = root.querySelectorAll(
    `.${styles["other-author-list-container"]} .${styles["author-container"]}`
    );

    const otherAuthorObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(otherAuthorItems).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add(styles["fadeInSlideUpVisible"]);
                }, index * 200); // delay per author (200ms interval)
                otherAuthorObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    otherAuthorItems.forEach((item) => {
        item.classList.add(styles["fadeInSlideUp"]);
        otherAuthorObserver.observe(item);
    });

}