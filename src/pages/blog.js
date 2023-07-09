import Head from "next/head";
import Navbar from "@/Components/Navbar";
import styles from "@/styles/Blog.module.css";
import Wrapper from "@/Components/Wrapper";

export default function Blog() {
  return (
    <>
    <Head>
        <title>vibgreon</title>
        <meta name="blog" content="sharing ideas/information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?" />
      </Head>
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
