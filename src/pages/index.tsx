import styles from "@/styles/Home.module.css";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/main-layout");
    const serverData = await res.json();
    return { props: { serverData } };
  } catch (error) {
    //TODO handle error
    return { props: {} };
  }
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description} style={{ height: "150vh" }}>
          <p>Get started by editing&nbsp;</p>
        </div>
      </main>
    </>
  );
}
