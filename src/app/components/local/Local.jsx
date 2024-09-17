import styles from './Local.module.css'
import Image from 'next/image'

export default function Local() {
    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Visite-nos</h1>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59879.371871449184!2d-42.036795313310876!3d-20.281187572675265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbb03345bf038a3%3A0xff61295d6444092c!2sFlor%20de%20Ju%C3%A1!5e0!3m2!1spt-PT!2sbr!4v1726537396621!5m2!1spt-PT!2sbr" width="600" height="450" alt='Mapa' loading="lazy" ></iframe>
                <div className={styles.desc}>
                    <div className={styles.item}>
                        <Image className={styles.img} alt='icon-local' height={60} width={60} src={'/local/placeholder.png'}/>
                        <p className={styles.paragraph}>Rua Luís Cerqueira, 350 - Centro, Manhuaçu</p>
                    </div>
                    <div className={styles.item}>
                        <Image className={styles.img} alt='icon-hora' height={60} width={60} src={'/local/calendario.png'}/>
                        <div className={styles.hours}>
                            <p className={styles.paragraph}>Segunda a Quinta: 10:00 ás 20:00</p>
                            <p className={styles.paragraph}>Sexta: 10:00 ás 16:00</p>
                            <p className={styles.paragraph}>Domingo: 14:00 ás 21:00</p>
                            <p className={styles.paragraph}>Sábado: Fechado</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image className={styles.img} alt='icon-local' height={50} width={50} src={'/local/whatsapp.png'}/>
                        <p className={styles.paragraph}>(33) 98455-0410</p>
                    </div>
                </div>
            </div>
        </>
    )
}