import React from "react";
import axios from "axios";
import TodoItem from "../../components/TodoItem";
import styles from "../../styles/Home.module.css";
import { AiOutlineRollback } from "react-icons/ai";
import { useRouter } from "next/router";

function TodoList({ list }) {
  const router = useRouter();
  return (
    <div>
      <div className={styles.backBtn}>
        <AiOutlineRollback onClick={() => router.push("./")} />
      </div>
      <div className={styles.todoWrapper}>
        {list.map((list) => (
          <TodoItem key={list.id} todos={list} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });
  const listId = data.map((user) => user.id);

  return {
    paths: listId.map((id) => ({ params: { todoId: id.toString() } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = parseInt(context.params.todoId, 10);

  const data = await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.data;
    });

  const idList = data.filter((user) => user.userId === id);

  return { props: { list: idList } };
}

export default TodoList;
