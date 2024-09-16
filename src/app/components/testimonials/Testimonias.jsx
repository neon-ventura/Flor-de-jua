import styles from './Testimonias.module.css'
import Image from 'next/image'

export default function Testimonials() {
    return(
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Testemunhos</h1>
                <div className={styles.testimonials}>
                    <div className={styles.card}>

                        <div className={styles.text}>
                            <Image className={styles.img} height={50} width={200} src={'/testimonials/stars.webp'}/>
                            <p>Descobrir essa cafeteria foi como encontrar um oásis no meio da correria do dia a dia. Recomendo a todos que buscam qualidade e um ótimo atendimento."</p>
                        </div>

                        <div className={styles.perfil}>
                            <Image className={styles.img} height={80} width={80} src={'/testimonials/perfil.png'}/>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className={styles.card}>

                        <div className={styles.text}>
                            <Image className={styles.img} height={50} width={200} src={'/testimonials/stars.webp'}/>
                            <p>Descobrir essa cafeteria foi como encontrar um oásis no meio da correria do dia a dia. Recomendo a todos que buscam qualidade e um ótimo atendimento."</p>
                        </div>

                        <div className={styles.perfil}>
                            <Image className={styles.img} height={80} width={80} src={'/testimonials/perfil.png'}/>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className={styles.card}>

                        <div className={styles.text}>
                            <Image className={styles.img} height={50} width={200} src={'/testimonials/stars.webp'}/>
                            <p>Descobrir essa cafeteria foi como encontrar um oásis no meio da correria do dia a dia. Recomendo a todos que buscam qualidade e um ótimo atendimento."</p>
                        </div>

                        <div className={styles.perfil}>
                            <Image className={styles.img} height={80} width={80} src={'/testimonials/perfil.png'}/>
                            <p>Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}