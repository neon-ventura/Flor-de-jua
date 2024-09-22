'use client'

import Footer from '../components/footer/Footer'
import Zap from '../components/whatsapp/Zap'
import styles from './about.module.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre nós</h1>
                <div data-aos="fade-up" className={styles.ourHistory}>
                    <h2 className={styles.subTitle}>Nossa História</h2>
                    <p className={styles.p}>Fundado em 2010, o Flor de Juá Bistrô nasceu da paixão por criar experiências gastronômicas únicas em um ambiente elegante e acolhedor. Inspirados pela culinária internacional e pelas tradições locais, unimos ingredientes frescos e de alta qualidade para oferecer pratos que encantam o paladar e a alma.</p>
                </div>
                <div className={styles.img1}></div>
                <div data-aos="fade-up" className={styles.ourPhilosofy}>
                    <h2 className={styles.subTitle}>Nossa Filosofia</h2>
                    <p className={styles.p}>Acreditamos que comer bem é mais do que uma necessidade; é uma arte. Nossa filosofia é simples: transformar cada refeição em uma celebração da boa comida, do bom gosto e da boa companhia. Valorizamos o frescor, a autenticidade e a sazonalidade dos ingredientes, buscando parcerias com produtores locais que compartilham nosso compromisso com a qualidade e a sustentabilidade.</p>
                </div>
                <div className={styles.img2}></div>
                <div data-aos="fade-up" className={styles.ourSpace}>
                    <h2 className={styles.subTitle}>Nosso Espaço</h2>
                    <p className={styles.p}>Com um design contemporâneo que mistura o clássico e o moderno, nosso espaço é o reflexo de nossa identidade: sofisticado, mas acessível; elegante, mas convidativo. Seja para um brunch de domingo, um café da tarde ou um jantar à luz de velas, cada canto do Flor de Juá Bistrô foi pensado para proporcionar conforto e estilo. Com iluminação suave, móveis de alta qualidade e uma atmosfera intimista, oferecemos o cenário perfeito para suas ocasiões especiais.</p>
                </div>
                <div className={styles.img3}></div>

                <a className={styles.a} href="/"><button className={styles.btn}>Voltar</button></a>
                <Footer />
                <Zap />
            </div >

        </>
    )
}