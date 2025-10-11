import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <main class="${styles['main']}">
            <div class="${styles['main-content']}">
                <!-- * results right here -->
                <div class="${styles['left-container']}">
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
                            </div>
                        </div>
                    </div>
                </div>

                <!-- * author facts right here -->
                <div class="${styles['right-container']}">
                    <div class="${styles['author-container']}">
                        <div class="${styles['author-icon-container']}">
                            <img src="../../../static/images/Result Page/OTHER-AUTHOR-ICONS.png" alt="a-icon" class="${styles['author-icon']}">
                        </div>
                        <div class="${styles['upper-description-container']}">
                            <header class="${styles['author-name']}">J.K Rowling</header>
                            <h3 class="${styles['author-description']}">British author and philanthropist (born 1965)</h3>
                        </div>
                        <div class="${styles['author-img-container']}">
                            <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759324980/JK-Rowling1_1_mvo2nt.png" alt="author-pic" class="${styles['author-pic']}">
                        </div>
                        <div class="${styles['lower-description-container']}">
                            <h3 class="${styles['author-info']}">
                                J. K. Rowling, is a British author best 
                                known as the creator of the Harry Potter 
                                fantasy series, the idea for which was 
                                conceived whilst on a train trip from 
                                Manchester to London in 1990. The Potter 
                                books have gained worldwide attention, 
                                won multiple awards, sold more than 400 
                                million copies, and been the basis for a 
                                popular series of films.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----------- middle main ----------- -->
            <div class="${styles['publisher-container']}">
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760012856/OTHER-AUTHOR-ICONS_xhnjeq.png" alt="publisher" class="${styles['publisher-icon']}">
                <div class="${styles['row-container']}">
                    <div class="${styles['pics-author']}">
                        <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760015687/Group_114_krjj91.png" alt="a-1">
                        <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760015687/Group_113_ipex6p.png" alt="a-2">
                        <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760015687/Rectangle_169_taw3ue.png" alt="a-3">
                    </div>
                    <div class="${styles['name-author']}">
                        <h2>Adolf Hitler</h2>
                        <h2>J.K Rowling</h2>
                        <h2>Ciala Dismaya</h2>
                    </div>
                    <div class="${styles['race-author']}">
                        <h3>British author and 
                            philanthropist (born 
                            1965)
                        </h3>
                        <h3>British author and 
                            philanthropist (born 
                            1965)
                        </h3>
                        <h3>British author and 
                            philanthropist (born 
                            1965)
                        </h3>
                    </div>
                </div>
            </div>
            <!-- ----------- second middle main ----------- -->
            <div class="${styles['other-container']}">
                <div class="${styles['dit-1']}">
                    <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760085930/download_10_1_daoc6t.png" alt="b-1" class="${styles['b-1']}">
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
                    <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760085930/PDF-EPUB-The-Best-American-Science-And-Nature-Writing-2020-by-Michio-Kaku-Download_1_1_tzbetx.png" alt="b-2" class="${styles['b-2']}">
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
                    <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759334330/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_1_dcsofx.png" alt="b-3" class="${styles['b-3']}">
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
                    </div>
                </div>
            </div>
            <div class="${styles['book-source-container']}">
                <div class="${styles['related-container']}">
                    <img src="../../../static/images/Result Page/FIND-ELSEWHERE-ICON.png" alt="rsi-icon" class="${styles['related-icon']}">
                    <button class="${styles['src-btn4']}">Find Elsewhere</button>
                </div>
                <div class="${styles['book-site-btn']}">
                    <button class="${styles['book-btn1']}">Good Read</button>
                    <button class="${styles['book-btn2']}">Open Library</button>
                    <button class="${styles['book-btn3']}">Project Guttenburg</button>
                </div>
            </div>
            <div class="${styles['src-book-container']}">
                <div class="${styles['dit-1']}">
                    <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760101878/PDF-EPUB-Marriage-and-Murder-Solving-for-Pie-Cletus-and-Jenn-Mysteries-2-by-Penny-Reid-Download_1_idedsv.png" alt="b-1" class="${styles['b-1']}">
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
                    <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760101878/download_1_2_zcjsaq.png" alt="b-2" class="${styles['b-2']}">
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
                    <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1760101878/images_2_oacgzz.png" alt="b-3" class="${styles['b-3']}">
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
                    </div>
                </div>
            </div>
            <div class="${styles['related-findings-container']}">
                <div class="${styles['finding-container']}">
                    <img src="../../../static/images/Result Page/RELATED-SEARCH-ICON.png" alt="rsi-icon" class="${styles['related-icon']}">
                    <button class="${styles['src-btn5']}">Related to your Findings</button>
                </div>
                <div class="${styles['section-finding-btn1']}">
                    <button class="${styles['finding-btn1']}">is it a cat?</button>
                    <button class="${styles['finding-btn2']}">wheres book?</button>
                    <button class="${styles['finding-btn3']}">wheres book?</button>
                </div>
                <div class="${styles['section-finding-btn2']}">
                    <button class="${styles['finding-btn4']}">wheres book?</button>
                    <button class="${styles['finding-btn5']}">wheres book?</button>
                    <button class="${styles['finding-btn6']}">wheres book?</button>
                </div>
                <div class="${styles['section-finding-btn3']}">
                    <button class="${styles['finding-btn7']}">why the plane??</button>
                    <button class="${styles['finding-btn8']}">Brooom :3</button>
                    <button class="${styles['finding-btn9']}">lilmwozb</button>
                </div>
                <div class="${styles['section-finding-btn4']}">
                    <button class="${styles['finding-btn10']}">1</button>
                    <button class="${styles['finding-btn11']}"><span><img src="../../../static/images/Result Page/Polygon 1.png" alt=""></span>Next Page</button>
                </div>
            </div>
        </main>
    `;

    

    root.className = styles['main'];
}