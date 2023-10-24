import Navbar from "@/Components/Navbar";
import Wrapper from "@/Components/Wrapper";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <Wrapper>
          <Navbar />
          <div className={styles.home_content_container}>
            <div className={styles.home_title}>vibgreon</div>
            <div className={styles.home_subcontent_container}>
              <div>
                Hi, I'm Vivek Venkatesh, your friendly neighborhood&nbsp;
                <span className={styles.home_bold}>Web Designer</span>.
              </div>
              <div className={styles.home_image_stat_container}>
                <div className={styles.home_image}></div>
                <div className={styles.home_stat_container}>
                  <div id={styles.home_stat_item}>soontobefound [cooking]</div>
                  <div id={styles.home_stat_item}>vtubing [crafting]</div>
                  <div id={styles.home_stat_item}>
                    houseofdraft [shutter-down]
                  </div>
                </div>
              </div>
              <div className={styles.home_para}>
                Discovering tech capabilities, I aspire to be a generalist in
                the field of web-based technology. I love sketching and
                appreciate art in any form. 🤍
                <br />
                <br /> Take a look around! You might find something cool.
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
