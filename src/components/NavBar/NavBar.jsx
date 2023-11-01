import styles from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src="./src/components/NavBar/img/3.png" alt="" />
      <div className={styles.navbarlogo}>
        <li className={styles.boton}>Vinos</li>
        <li className={styles.boton}>Colecciones</li>
        <li className={styles.boton}>Contacto</li>
        <li className={styles.boton}><CartWidget/></li>
      </div>
    </nav>  
  )
}
