"use client"

import styles from './Testimonias.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export default function Testimonials() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return(
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Testemunhos</h1>
                <div className={styles.testimonials}>
                    <div data-aos="zoom-in-up" className={styles.card}>

                        <div className={styles.text}>
                            <Image className={styles.img} height={50} width={200} src={'/testimonials/stars.webp'}/>
                            <p>"É um verdadeiro achado para quem aprecia bons momentos e sabores únicos. Vale a visita para quem gosta de um espaço aconchegante."</p>
                        </div>

                        <div className={styles.perfil}>
                            <Image className={styles.img} height={80} width={80} src={'/testimonials/cara.png'}/>
                            <p>Pedro</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className={styles.card}>

                        <div className={styles.text}>
                            <Image className={styles.img} height={50} width={200} src={'/testimonials/stars.webp'}/>
                            <p>"Descobri nessa cafeteria um lugar perfeito para relaxar e apreciar um bom café. Excelente escolha para quem busca uma experiência agradável e diferenciada."</p>
                        </div>

                        <div className={styles.perfil}>
                            <Image className={styles.img} height={80} width={80} src={'/testimonials/mulher.png'}/>
                            <p>Mary</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className={styles.card}>

                        <div className={styles.text}>
                            <Image className={styles.img} height={50} width={200} src={'/testimonials/stars.webp'}/>
                            <p>"Entrar nessa cafeteria foi como abrir as portas para um refúgio de tranquilidade e sabor. Perfeito para quem deseja um ambiente acolhedor"</p>
                        </div>

                        <div className={styles.perfil}>
                            <Image className={styles.img} height={80} width={80} src={'/testimonials/cara2.png'}/>
                            <p>Gregory</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}