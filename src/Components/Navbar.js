import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.nav_container}>
        <svg
          width="30"
          height="34"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.18407 1.33603L10.9761 17.176L17.0881 1.36803C17.3761 0.632027 17.5681 0.504028 18.2401 0.504028H18.3361C19.0721 0.504028 19.1361 0.696028 18.8801 1.36803L10.4001 23.064C10.3041 23.288 10.1121 23.384 9.76007 23.384C9.44007 23.384 9.24807 23.288 9.15207 23.064L0.768071 1.59203C0.480071 0.600027 0.640071 0.504028 1.44007 0.504028H3.93607C4.60807 0.504028 4.92807 0.664028 5.18407 1.33603Z"
            fill="#FAFBFC"
          />
        </svg>
        <div className={styles.nav_link_container}>
          <Link href="/">
            <div id={styles.nav_link_item}>home</div>
          </Link>
          <Link href="/about">
            <div id={styles.nav_link_item}>about</div>
          </Link>
          <Link href="/blog">
            <div id={styles.nav_link_item}>blog</div>
          </Link>
          <Link href="/socials">
            <div id={styles.nav_link_item}>social</div>
          </Link>
        </div>
      </div>
    </>
  );
}
