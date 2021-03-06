import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

import Button from "../components/Button";

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practical 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className={styles.header}>Users</h1>
      <div className={styles.userWrapper}>
        {users.map((user) => (
          <Button user={user} key={user.id}>
            {user.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });

  return { props: { users: data } };
}
