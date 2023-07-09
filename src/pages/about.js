import Navbar from "@/Components/Navbar";
import styles from "@/styles/About.module.css";
import Wrapper from "@/Components/Wrapper";

export default function About() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className={styles.about_content_container}>
          <div className={styles.about_head_title}>what / why</div>
          <div className={styles.about_subcontent_container}>
            <div>
              Just like a physical address, this is my digital address, where I
              hope to share things I like the most, i.e., related to my
              professional life only.
            </div>
            <div>
              It also acts as a learning/sharing bridge for whoever gets
              inspired by this.
            </div>
            <div className={styles.hidden_message}>
              T<span className={styles.about_bold}>h</span>is{" "}
              <span className={styles.about_bold}>i</span>s a ve
              <span className="about-bold">r</span>y s
              <span className="about-bold">e</span>rious text message with no
              hidden <span className="about-bold">me</span>aning.
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
