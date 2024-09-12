"use client"

import { useState } from 'react'
import styles from './Products.module.css'
import Image from 'next/image'

export default function Products() {

    const [cor1, setCor1] = useState('#65653E')
    const [cor2, setCor2] = useState('#9E652E')
    const [cor3, setCor3] = useState('#9E652E')
    const [cor4, setCor4] = useState('#9E652E')
    const [cor5, setCor5] = useState('#9E652E')

    const mudarCor1 = () => {
        if (cor1 === '#9E652E') {
            setCor5('#9E652E')
            setCor4('#9E652E')
            setCor3('#9E652E')
            setCor2('#9E652E')
            setCor1('#65653E')
        }
    }

    const mudarCor2 = ()  => {
        if (cor2 === '#9E652E') {
            setCor1('#9E652E')
            setCor2('#65653E')
            setCor3('#9E652E')
            setCor4('#9E652E')
            setCor5('#9E652E')
        }
    }

    const mudarCor3 = () => {
        if (cor3 === '#9E652E') {
            setCor1('#9E652E')
            setCor2('#9E652E')
            setCor3('#65653E')
            setCor4('#9E652E')
            setCor5('#9E652E')
        }
    }

    const mudarCor4 = () => {
        if (cor4 === '#9E652E') {
            setCor1('#9E652E')
            setCor2('#9E652E')
            setCor3('#9E652E')
            setCor4('#65653E')
            setCor5('#9E652E')
        }
    }

    const mudarCor5 = () => {
        if (cor4 === '#9E652E') {
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
                            <button className={styles.btn} onClick={mudarCor1} style={{backgroundColor: cor1}}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/xicara-de-cafe.png'} />
                                <p>Cafés</p>
                            </button>

                            <button className={styles.btn} onClick={mudarCor2} style={{backgroundColor: cor2}}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/fatia-de-bolo.png'} />
                                <p>Bolos</p>
                            </button>


                            <button className={styles.btn} onClick={mudarCor3} style={{backgroundColor: cor3}}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/fruta-seca.png'} />
                                <p>Salgados</p>
                            </button>

                        </div>
                        <div className={styles.item_section2}>

                            <button className={styles.btn} onClick={mudarCor4} style={{backgroundColor: cor4}}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/muffin.png'} />
                                <p>Doces</p>
                            </button>


                            <button className={styles.btn} onClick={mudarCor5} style={{backgroundColor: cor5}}>
                                <Image className={styles.img} height={30} width={30} src={'/icons-products/suco-de-laranja.png'} />
                                <p>Sucos</p>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}