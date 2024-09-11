import styles from './Values.module.css'
import Image from 'next/image'

export default function Values() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <Image height={80} width={80} src={'/icons/bandeja-de-comida.png'} />
                        <h1 className={styles.title}>Qualidade e Frescor</h1>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img2} height={80} width={80} src={'/icons/culinaria.png'} />
                        <h1 className={styles.title}>Atendimento Personalizado</h1>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.img3} height={80} width={80} src={'/icons/servico-de-atendimento-ao-consumidor.png'} />
                        <h1 className={styles.title}>Inovação Culinária</h1>
                    </div>
                </div>
            </div>
        </>
    )
}