import styles from"./footer.module.css";
export default function Footer({compltedTodos,totalTodos}){
    return(
        <div className={styles.footer}>
            <span className={styles.item}>Complted Todos:{compltedTodos}</span>
            <span className={styles.item}>Tootal Todos:{totalTodos}</span>
        </div>

    );
}