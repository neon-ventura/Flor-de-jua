"use client"

import { useState } from 'react'
import styles from './Products.module.css'
import Image from 'next/image'

export default function Products() {

    const [section1, setSection1] = useState(true)
    const [section2, setSection2] = useState(false)
    const [section3, setSection3] = useState(false)
    const [section4, setSection4] = useState(false)
    const [section5, setSection5] = useState(false)

    const [cor1, setCor1] = useState('#65653E')
    const [cor2, setCor2] = useState('#9E652E')
    const [cor3, setCor3] = useState('#9E652E')
    const [cor4, setCor4] = useState('#9E652E')
    const [cor5, setCor5] = useState('#9E652E')

    const mudarCor1 = () => {
        if (cor1 === '#9E652E') {
            setSection1(true)
            setCor5('#9E652E')
            setCor4('#9E652E')
            setCor3('#9E652E')
            setCor2('#9E652E')
            setCor1('#65653E')
        }
    }

    const mudarCor2 = () => {
        if (cor2 === '#9E652E') {
            setSection1(false)
            setSection2(true)
            setCor1('#9E652E')
            setCor2('#65653E')
            setCor3('#9E652E')
            setCor4('#9E652E')
            setCor5('#9E652E')
        }
    }

    const mudarCor3 = () => {
        if (cor3 === '#9E652E') {
            setSection1(false)
            setSection2(false)
            setSection3(true)
            setCor1('#9E652E')
            setCor2('#9E652E')
            setCor3('#65653E')
            setCor4('#9E652E')
            setCor5('#9E652E')
        }
    }

    const mudarCor4 = () => {
        if (cor4 === '#9E652E') {
            setSection1(false)
            setSection2(false)
            setSection3(false)
            setSection4(true)
            setCor1('#9E652E')
            setCor2('#9E652E')
            setCor3('#9E652E')
            setCor4('#65653E')
            setCor5('#9E652E')
        }
    }

    const mudarCor5 = () => {
        if (cor4 === '#9E652E') {
            setSection1(false)
            setSection2(false)
            setSection3(false)
            setSection4(false)
            setSection5(true)
            setCor1('#9E652E')
            setCor2('#9E652E')
            setCor3('#9E652E')
            setCor4('#9E652E')
            setCor5('#65653E')
        }
    }

    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Cardápio</h1>
                <div className={styles.products_section}>
                    <div className={styles.list_products}>
                        <div className={styles.item_section}>
                            <button className={styles.btn} onClick={mudarCor1} style={{ backgroundColor: cor1 }}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/xicara-de-cafe.png'} />
                                <p>Cafés</p>
                            </button>

                            <button className={styles.btn} onClick={mudarCor2} style={{ backgroundColor: cor2 }}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/fatia-de-bolo.png'} />
                                <p>Bolos</p>
                            </button>


                            <button className={styles.btn} onClick={mudarCor3} style={{ backgroundColor: cor3 }}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/fruta-seca.png'} />
                                <p>Salgados</p>
                            </button>

                        </div>
                        <div className={styles.item_section2}>
                            <button className={styles.btn} onClick={mudarCor5} style={{ backgroundColor: cor5 }}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/suco-de-laranja.png'} />
                                <p>Sucos</p>
                            </button>

                            <button className={styles.btn} onClick={mudarCor4} style={{ backgroundColor: cor4 }}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/muffin.png'} />
                                <p>Doces</p>
                            </button>



                        </div>
                    </div>

                    {
                        section1 ?
                            (<div className={styles.products}>
                                <div className={styles.card}>
                                    <Image className={styles.imgCard} height={250} width={250} src={'/products/cafe/img-1.png'} />
                                    <p className={styles.productName}>Mocha Caramelo</p>
                                    <p className={styles.price}>R$ 4.00</p>
                                </div>

                                <div className={styles.card}>
                                    <Image className={styles.imgCard} height={250} width={250} src={'/products/cafe/img-2.avif'} />
                                    <p className={styles.productName}>Macchiato Canelinha</p>
                                    <p className={styles.price}>R$ 4.00</p>
                                </div>

                                <div className={styles.card}>
                                    <Image className={styles.imgCard} height={250} width={250} src={'/products/cafe/img-3.jpg'} />
                                    <p className={styles.productName}>Capuccino Gelado</p>
                                    <p className={styles.price}>R$ 4.00</p>
                                </div>

                                <div className={styles.card}>
                                    <Image className={styles.imgCard} height={250} width={250} src={'/products/cafe/img-4.jpg'} />
                                    <p className={styles.productName}>Café Espresso</p>
                                    <p className={styles.price}>R$ 4.00</p>
                                </div>

                                <div className={styles.card}>
                                    <Image className={styles.imgCard} height={250} width={250} src={'/products/cafe/img-5.jpg'} />
                                    <p className={styles.productName}>Affogato</p>
                                    <p className={styles.price}>R$ 4.00</p>
                                </div>
                            </div>
                            ) : section2 ? (
                                <div className={styles.products}>
                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/bolo/img-1.jpg'} />
                                        <p className={styles.productName}>Banana com Nutella</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/bolo/img-2.webp'} />
                                        <p className={styles.productName}>Red Velvet</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/bolo/img-3.jpg'} />
                                        <p className={styles.productName}>Ninho com Nutella</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                </div>
                            ) : section3 ? (
                                <div className={styles.products}>
                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/salgado/img-1.jpeg'} />
                                        <p className={styles.productName}>Quiche carne de Sol</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/salgado/img-2.jpg'} />
                                        <p className={styles.productName}>Pão de Queijo</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/salgado/img-3.webp'} />
                                        <p className={styles.productName}>Quiche 4 queijos</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/salgado/img-4.webp'} />
                                        <p className={styles.productName}>Cuscuz</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>

                                    <div className={styles.card}>
                                        <Image className={styles.imgCard} height={250} width={250} src={'/products/salgado/img-5.jpg'} />
                                        <p className={styles.productName}>Crepe Salgado</p>
                                        <p className={styles.price}>R$ 4.00</p>
                                    </div>
                                </div>
                            ) : section4 ? 
                            (
                            <div className={styles.products}>
                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/doce/img-1.jpg'} />
                                <p className={styles.productName}>Tapioca Doce</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>

                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/doce/img-2.jpg'} />
                                <p className={styles.productName}>Crepe Doce</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>

                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/doce/img-3.jpg'} />
                                <p className={styles.productName}>Pudim de Tapioca</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>

                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/doce/img-4.avif'} />
                                <p className={styles.productName}>Petit Gateu</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>

                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/doce/img-5.webp'} />
                                <p className={styles.productName}>Brownie</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>
                        </div>
                        ) : section5 ? 
                        (
                            <div className={styles.products}>
                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/suco/img-1.jpeg'} />
                                <p className={styles.productName}>Cajá</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>

                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/suco/img-2.jpg'} />
                                <p className={styles.productName}>Frutas Vermelhas</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>

                            <div className={styles.card}>
                                <Image className={styles.imgCard} height={250} width={250} src={'/products/suco/img-3.jpg'} />
                                <p className={styles.productName}>Laranja</p>
                                <p className={styles.price}>R$ 4.00</p>
                            </div>
                        </div>
                        ) : alert('Erro ao carregar produto')
                    }



                </div>
            </div>
        </>
    )
}