import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <Image className={styles.logo} height={100} width={100} alt='Logo Flor de Juá' src={'/logo.jpg'}/>
                </div>
                <div className={styles.social}>
                    <Image className={styles.img} height={30} width={30} alt='media icon' src={'/footer/instagram.png'}/>
                    <Image className={styles.img} height={30} width={30} alt='media icon' src={'/footer/linkedin.png'}/>
                    <Image className={styles.img} height={30} width={30} alt='media icon' src={'/footer/facebook.png'}/>
                    <Image className={styles.img} height={30} width={30} alt='media icon' src={'/footer/yt.png'}/>
                </div>
                <div className={styles.nav}>
                    <div className={styles.products}>
                        <ul className={styles.list}>
                            <h2>Produtos</h2>
                            <li className={styles.listItem}>Cafés</li>
                            <li className={styles.listItem}>Bolos</li>
                            <li className={styles.listItem}>Salgados</li>
                            <li className={styles.listItem}>Doces</li>
                            <li className={styles.listItem}>Sucos</li>
                        </ul>
                    </div>
                    <div className={styles.business}>
                        <ul className={styles.list}>
                            <h2>Empresa</h2>
                            <li className={styles.listItem}>Contato</li>
                            <li className={styles.listItem}>Sobre nós</li>
                            <li className={styles.listItem}>Local</li>
                        </ul>
                    </div>
                </div>

                <hr />

                <p className={styles.copy}>© 2024 Neon Ventura, Todos direitos reservados.</p>
            </footer>
        </>
    )
}