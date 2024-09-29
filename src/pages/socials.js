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
              <div id={styles.socials_link_item}>
                <a
                  href="https://www.figma.com/proto/XdevQuchTuQocdwRG2cHsp/vibgreon's-Portfolio?page-id=1%3A10804&node-id=161-11&node-type=frame&viewport=1929%2C148%2C0.07&t=sPORLlhWCVyXwF44-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=161%3A11&show-proto-sidebar=1"
                  target="_blank"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
