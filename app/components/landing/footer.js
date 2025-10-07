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
                  <h4>Mediocre Monk</h4>
                  <span>Grant Lindsley</span>
                </div>
            </div>
            <div class=${styles["book-column2"]}>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759810380/PDF-EPUB-The-Best-American-Science-And-Nature-Writing-2020-by-Michio-Kaku-Download_c5v3y6.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
            </div>
            <div class=${styles["book-column3"]}>
              <div class=${styles["recom-book-middle-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759810379/PDF-EPUB-The-Seven-Year-Slip-by-Ashley-Poston-Download_hmxyqp.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
            </div>
            <div class=${styles["book-column4"]}>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://prodimage.images-bn.com/pimages/9781506720722_p0_v4_s600x595.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
            </div>
            <div class=${styles["book-column5"]}>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://prodimage.images-bn.com/pimages/9781250354921_p0_v2_s600x595.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
              <div class=${styles["recom-book-side-container"]}>
                <img src="https://res.cloudinary.com/dhisbk3b2/image/upload/v1759808963/PDF-EPUB-Mediocre-Monk-A-Stumbling-Search-for-Answers-in-a-Forest-Monastery-by-Grant-Lindsley-Download-scaled_ld4pue.jpg" alt="" />
                <h4>Mediocre Monk</h4>
                <span>Grant Lindsley</span>
              </div>
             </div>
           </div>
          </section>
    `;

    // NOTE: If need ng css design ng header, kindly add the css to the component.module.css and uncomment this
    // root.className = styles['header']
}