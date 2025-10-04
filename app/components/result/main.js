import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <div class= ${styles['book-container']}>
            <div class= ${styles['dit-1']}>
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759490350/9781408855669-6cfb2099b6e84a4899ce368d6facc242_4_2_u6cxxp.png" alt="b-1" class= ${styles['b-1']}>
                <div class= ${styles['middle-con-1']}>
                    <h1 class= ${styles['title-1']}>Harry Potter</h1>
                    <h2 class= ${styles['mini-detail-1']}>The Chamber of Secrets<span class= ${styles['date-1']}>October 3, 2025</span></h2>
                    <h3 class= ${styles['info-1']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        null...
                    </h3>
                    <div class= ${styles['button-container']}>
                        <button class= ${styles['btns-1']}>J.K Rowling</button>
                        <button class= ${styles['btns-1']}>J.K Rowling</button>
                        <button class= ${styles['btns-1']}>J.K Rowling</button>
                        <button class= ${styles['btns-1']}><img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759501467/Group_31_uo29p9.png" alt="dots"></button>
                    </div>
                </div>
            </div>
            <div class= ${styles['dit-2']}>
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759334330/images_3_4_ml4upo.png" alt="b-2" class= ${styles['b-2']}>
                <div class= ${styles['middle-con-2']}>
                    <h1 class= ${styles['title-2']}>Harry Potter</h1>
                    <h2 class= ${styles['mini-detail-2']}>The Chamber of Secrets<span class= ${styles['date-2']}>October 3, 2025</span></h2>
                    <h3 class= ${styles['info-2']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        null...
                    </h3>
                    <div class= ${styles['button-container']}>
                        <button class= ${styles['btns-2']}>J.K Rowling</button>
                        <button class= ${styles['btns-2']}>J.K Rowling</button>
                        <button class= ${styles['btns-2']}>J.K Rowling</button>
                        <button class= ${styles['btns-2']}><img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759501467/Group_31_uo29p9.png" alt="dots"></button>
                    </div>
                </div>
            </div>
            <div class= ${styles['dit-3']}>
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759334330/images_1_5_ogrcsl.png" alt="b-3" class= ${styles['b-3']}>
                <div class= ${styles['middle-con-3']}>
                    <h1 class= ${styles['title-3']}>Harry Potter</h1>
                    <h2 class= ${styles['mini-detail-3']}>The Chamber of Secrets<span class="date-3">October 3, 2025</span></h2>
                    <h3 class= ${styles['info-3']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        null...
                    </h3>
                    <div class= ${styles['button-container']}>
                        <button class= ${styles['btns-3']}>J.K Rowling</button>
                        <button class= ${styles['btns-3']}>J.K Rowling</button>
                        <button class= ${styles['btns-3']}>J.K Rowling</button>
                        <button class= ${styles['btns-3']}><img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759501467/Group_31_uo29p9.png" alt="dots"></button>
            </div>
        </div>
        <div class= ${styles['author-container']}>
            <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759324992/Group_112_ruf576.png" alt="a-icon">
            <header class= ${styles['author-name']}>J.K Rowling</header>
            <h3 class=${styles['author-description']}>British author and philanthropist (born 1965)</h3>
            <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759324980/JK-Rowling1_1_mvo2nt.png" alt="author-pic" class= ${styles['author-pic']}>
        </div>
    `;

    const navToggle = document.getElementById('navToggle');
    const navRow = document.getElementById('navRow');

    navToggle.addEventListener('click', function() {
        navRow.classList.toggle('show');
    });
   
    // NOTE: If need ng css design ng footer, kindly add the css to the component.module.css and uncomment this
    root.className = styles['main']
}