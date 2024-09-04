import styles from "./Header.module.css"

export function Header() {

    return (
        <div className={styles.Header}>
            <h1>
                <span>TODO</span> List
            </h1>
        </div>
    )
}