import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <div className={styles.content}>
                <h1>Sobre nós</h1>
                <div className={styles.ourHistory}>
                    <h2>Nossa História</h2>
                    <p>Fundado em 2010, o Flor de Juá Bistrô nasceu da paixão por criar experiências gastronômicas únicas em um ambiente elegante e acolhedor. Inspirados pela culinária internacional e pelas tradições locais, unimos ingredientes frescos e de alta qualidade para oferecer pratos que encantam o paladar e a alma.</p>
                </div>
                <div className={styles.img2}></div>
                <div className={styles.ourPhilosofy}>
                    <h2>Nossa Filosofia</h2>
                    <p>Acreditamos que comer bem é mais do que uma necessidade; é uma arte. Nossa filosofia é simples: transformar cada refeição em uma celebração da boa comida, do bom gosto e da boa companhia. Valorizamos o frescor, a autenticidade e a sazonalidade dos ingredientes, buscando parcerias com produtores locais que compartilham nosso compromisso com a qualidade e a sustentabilidade.</p>
                </div>
                <Image className={styles.img} height={100} width={100} src={'/about/philosofy.jpg'} />
                <div className={styles.ourSpace}>
                    <h2>Nosso Espaço</h2>
                    <p>Com um design contemporâneo que mistura o clássico e o moderno, nosso espaço é o reflexo de nossa identidade: sofisticado, mas acessível; elegante, mas convidativo. Seja para um brunch de domingo, um café da tarde ou um jantar à luz de velas, cada canto do [Nome do Restaurante/Café] foi pensado para proporcionar conforto e estilo. Com iluminação suave, móveis de alta qualidade e uma atmosfera intimista, oferecemos o cenário perfeito para suas ocasiões especiais.</p>
                </div>
                <Image className={styles.img} height={100} width={100} src={'/about/local.jpg'} />
            </div>
        </>
    )
}