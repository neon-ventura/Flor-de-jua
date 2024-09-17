import About from "./components/about/About";
import Local from "./components/local/Local";
import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import Testimonials from "./components/testimonials/Testimonias";
import Values from "./components/values/Values";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Nav />
        <container className={styles.container}>
          <video className={styles.video} src="/video.mp4"
            autoPlay
            loop
            muted
          >
          </video>
          <header className={styles.header}>
            <h1 className={styles.title}>Elegância à Mesa <br /> Sabores que Encantam</h1>
            <div>
              <button className={styles.btn1}>Peça já</button>
              <button className={styles.btn2}>Contate nos</button>
            </div>
          </header>
        </container>
        <Values />
        <Products />
        <Testimonials />
        <About />
        <Local />
      </div>

    </>
  );
}
