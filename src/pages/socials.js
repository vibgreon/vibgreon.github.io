import Navbar from "@/Components/Navbar";
import styles from "@/styles/Social.module.css";
import Wrapper from "@/Components/Wrapper";

export default function Social() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className={styles.socials_container}>
          <div className={styles.socials_head_title}>links</div>
          <div className={styles.socials_content_container}>
            <div>Feelin' chatty? Here are my social links!</div>
            <div className={styles.socials_link_container}>
              <div id={styles.socials_link_item}>
                <a href="https://www.linkedin.com/in/vibgreon/" target="_blank">
                  LinkedIn
                </a>
              </div>
              <div id={styles.socials_link_item}>
                <a href="https://guthib.com/" target="_blank">
                  Guthib
                </a>
              </div>
              <div id={styles.socials_link_item}>
                <a href="https://linktr.ee/vibgreon" target="_blank">
                  Linktree
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
