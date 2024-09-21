import styles from './About.module.css'

export default function About() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.about}>
                    <h1 className={styles.title}>Sobre nós</h1>
                    <div className={styles.desc}>
                        <p className={styles.text}> No Flor de Juá Bistrô, você encontra um ambiente aconchegante e sabores únicos. Com ingredientes frescos e pratos preparados com carinho, oferecemos desde cafés especiais até refeições completas. Nosso espaço é ideal para relaxar e desfrutar de bons momentos.</p>
                        <a href="/about"><button className={styles.btn}>Saiba mais</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}