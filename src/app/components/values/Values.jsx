"use client"

import styles from './Values.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export default function Values() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div data-aos="fade-up" className={`${styles.card}`}>
                        <Image height={80} width={80} src={'/icons/bandeja-de-comida.png'} />
                        <h1 className={`${styles.title}`}>Qualidade e Frescor</h1>
                    </div>
                    <div data-aos="fade-up" className={styles.card}>
                        <Image className={styles.img3} height={80} width={80} src={'/icons/servico-de-atendimento-ao-consumidor.png'} />
                        <h1 className={styles.title}>Atendimento Personalizado</h1>
                    </div>
                    <div data-aos="fade-up" className={styles.card}>
                        <Image className={styles.img2} height={80} width={80} src={'/icons/culinaria.png'} />
                        <h1 className={styles.title}>Inovação Culinária</h1>
                    </div>
                </div>
            </div>
        </>
    )
}