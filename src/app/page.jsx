import Nav from "./components/nav/Nav";
import Values from "./components/values/Values";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
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

    </>
  );
}
