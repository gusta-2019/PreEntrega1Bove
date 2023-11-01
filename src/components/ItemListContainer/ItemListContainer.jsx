import styles from "./ItemListContainer.module.css"

export default function ItemListContainer({greeting}) {
  return (
    <div className={styles.bienvenida}>
        <h1>{greeting}</h1>
    </div>
  )
}
