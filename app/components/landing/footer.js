import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
          <section class=${styles["books"]}>
            <div class=${styles["books-columns"]}>
              <div class=${styles["book-column1"]}>
                <div class=${styles["recom-book-side-container"]}>
                  <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="" />
                  <h4>Mediocre Monk</h4>
                  <span>Grant Lindsley</span>
                </div>
                <div class=${styles["recom-book-side-container"]}>
                  <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759810381/PDF-EPUB-Marriage-and-Murder-Solving-for-Pie-Cletus-and-Jenn-Mysteries-2-by-Penny-Reid-Download_gzmb17.jpg" alt="" />
                  <h4>Marriage and Murder</h4>
                  <span>Penny Raid</span>
                </div>
            </div>
            <div class=${styles["book-column2"]}>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759810380/PDF-EPUB-The-Best-American-Science-And-Nature-Writing-2020-by-Michio-Kaku-Download_c5v3y6.jpg" alt="" />
                <h4>Science Nature</h4>
                <span>Michio Kaku</span>
              </div>
              <div class=${styles["recom-book-side-container"]}>
                <img src="//prodimage.images-bn.com/pimages/9781324036050_p0_v3_s600x595.jpg" alt="" />
                <h4>Packing for Mars</h4>
                <span>Mary Roach</span>
              </div>
            </div>
            <div class=${styles["book-column3"]}>
              <div class=${styles["recom-book-middle-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759810379/PDF-EPUB-The-Seven-Year-Slip-by-Ashley-Poston-Download_hmxyqp.jpg" alt="" />
                <h4>The Seven Year Slip</h4>
                <span>Emma Straub</span>
              </div>
            </div>
            <div class=${styles["book-column4"]}>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://prodimage.images-bn.com/pimages/9781506720722_p0_v4_s600x595.jpg" alt="" />
                <h4>Mob Psycho</h4>
                <span>Grant Lindsley</span>
              </div>
              <div class=${styles["recom-book-side-container"]}>
                <img src="//prodimage.images-bn.com/pimages/9781805335436_p0_v1_s600x595.jpg" alt="" />
                <h4>The Man Who Died Seven Times</h4>
                <span>Yasuhiko</span>
              </div>
            </div>
            <div class=${styles["book-column5"]}>
              <div class=${styles["recom-book-side-container"]}>
                <img src="//prodimage.images-bn.com/pimages/9780743276832_p0_v2_s500x550.jpg" alt="" />
                <h4>Riding Rockets</h4>
                <span>Mike Mullane</span>
              </div>
              <div class=${styles["recom-book-side-container"]}>
                <img src="//prodimage.images-bn.com/pimages/9780465022373_p0_v1_s600x595.jpg" alt="" />
                <h4>Hitler</h4>
                <span>Brendan Simms</span>
              </div>
             </div>
           </div>
          </section>
    `;

    // NOTE: If need ng css design ng header, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['header']
}