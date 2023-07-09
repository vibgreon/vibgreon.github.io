import Head from "next/head";
import Navbar from "@/Components/Navbar";
import styles from "@/styles/Social.module.css";
import Wrapper from "@/Components/Wrapper";

export default function Social() {
  return (
    <>
    <Head>
        <title>vibgreon</title>
        <meta name="socials" content="my social contacts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?" />
      </Head>
      <Wrapper>
        <Navbar />
        <div className={styles.socials_container}>
          <div className={styles.socials_head_title}>links</div>
          <div className={styles.socials_content_container}>
            <div>
              Humans are social beings, and so am I. Reach out to collaborate, share, or for casual discussions.
            </div>
            <div className={styles.socials_link_container}>
              <div id={styles.socials_link_item}>
                <a
                  href="https://discord.com/users/396362372429643777/"
                  target="_blank"
                >
                  Discord: <span>vibgreon#0479</span>
                </a>
              </div>
              <div id={styles.socials_link_item}>
                <a href="https://guthib.com/" target="_blank">
                  Guthib
                </a>
              </div>
              <div id={styles.socials_link_item}>
                <a href="https://www.linkedin.com/in/vibgreon/" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
