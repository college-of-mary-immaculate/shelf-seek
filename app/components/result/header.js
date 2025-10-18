import styles from './component.module.css';

export default function Header(root) {
    console.log(root)
    root.innerHTML = `
        <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759325005/SHELFSEEK_LOGO_g0ujec.png" alt="logo" class="${styles['icon-logo']}">
        <div class="${styles['top-container']}">
            <h1 class="${styles['top-bar']}">
                <div class="${styles['search-bar']}">
                    <input type="text" placeholder="Seek Books...">
                </div>
            </h1>
            <h2 class="${styles['nav-bar']}">
                <img src="https://res.cloudinary.com/dayv9oa8q/image/upload/v1759325005/Group_111_bomakc.png" alt="nav" class="${styles['nav-icon']}" id="navToggle">
            </h2>
            <div id="navRow" class="${styles['nav-row']}">
                <h2><a href="#">All</a></h2>
                <h2><a href="#">Genres</a></h2>
                <h2><a href="#">Authors</a></h2>
                <h2><a href="#">Ratings</a></h2>
                <h2><a href="#">Shopping</a></h2>
            </div>
        </div>
    `;

    root.className = styles['header'];

    const navToggle = document.getElementById('navToggle');
    const navRow = document.getElementById('navRow');

    navToggle.addEventListener('click', function() {
        navRow.classList.toggle('show');
    });
}