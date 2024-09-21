import Image from "next/image";
import styles from './Zap.module.css'

export default function Zap() {
    return (
        <>
            <a href="https://api.whatsapp.com/send/?phone=5533984550410&text&type=phone_number&app_absent=0">
                <Image height={80} width={80} alt="Whatsapp" src={'/zap.png'} className={styles.zap} />
            </a>
        </>
    )
}