import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
    <div>
        <div class="${styles.filterButtons}">
            <button class="${styles.filterBtn} ${styles.active}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                By date
            </button>
            <button class="${styles.filterBtn}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3zM9 9h4v4H9z" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                By group
            </button>
        </div>

        <div class="${styles.historyContainer}">
            <div class="${styles.dateSection}">
            <div class="${styles.dateHeader}">Today - Monday, January 5, 2026</div>
            
            <div class="${styles.versionList}">
                <div class="${styles.versionItem}">
                    <span class="${styles.time}">6:35 PM</span>
                    <span class="${styles.name}">The Chamber of Secrets</span>
                    <div class="${styles.actions}">
                        <button class="${styles.viewBtn}">View</button>
                        <button class="${styles.deleteBtn}">Delete</button>
                    </div>
                </div>

                <div class="${styles.versionItem}">
                    <span class="${styles.time}">6:35 PM</span>
                    <span class="${styles.name}">The Chamber of Secrets</span>
                    <div class="${styles.actions}">
                        <button class="${styles.viewBtn}">View</button>
                        <button class="${styles.deleteBtn}">Delete</button>
                    </div>
                </div>

                <div class="${styles.versionItem}">
                    <span class="${styles.time}">6:35 PM</span>
                    <span class="${styles.name}">The Chamber of Secrets</span>
                    <div class="${styles.actions}">
                        <button class="${styles.viewBtn}">View</button>
                        <button class="${styles.deleteBtn}">Delete</button>
                    </div>
                </div>

                <div class="${styles.versionItem}">
                    <span class="${styles.time}">6:35 PM</span>
                    <span class="${styles.name}">The Chamber of Secrets</span>
                    <div class="${styles.actions}">
                        <button class="${styles.viewBtn}">View</button>
                        <button class="${styles.deleteBtn}">Delete</button>
                    </div>
                </div>

                <div class="${styles.versionItem}">
                    <span class="${styles.time}">6:35 PM</span>
                    <span class="${styles.name}">The Chamber of Secrets</span>
                    <div class="${styles.actions}">
                        <button class="${styles.viewBtn}">View</button>
                        <button class="${styles.deleteBtn}">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}