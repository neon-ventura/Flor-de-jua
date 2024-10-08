import Image from "next/image"
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg bg-body-tertiary`}>
            <div className={`${styles.nav_body} container-fluid`}>
                <Image priority className={styles.img} src={'/logo.jpg'} width={120} height={120}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`${styles.nav_li} navbar-nav`}>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-disabled="true">Cardápio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}