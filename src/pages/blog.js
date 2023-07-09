import Navbar from "@/Components/Navbar";
import styles from "@/styles/Blog.module.css";
import Wrapper from "@/Components/Wrapper";

export default function Blog() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className={styles.blog_content_container}>
          <div className={styles.blog_head_title}>stories / creations</div>
          <div>Will update soon. Stay tuned!</div>
        </div>
      </Wrapper>
    </>
  );
}
