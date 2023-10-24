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
              The idea behind creating this website is to have a personal space
              on the web. It serves the purpose of integrating whatever I learn,
              such as web services, design implementations, and improving code
              complexity.
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
