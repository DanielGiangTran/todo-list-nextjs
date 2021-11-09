import React from "react";
import classes from "./Button.module.css";
import { useRouter } from "next/router";

function Button({ user }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push({ pathname: `./${user.id}` });
      }}
      className={classes["button-55"]}
    >
      {user.name}
    </button>
  );
}

export default Button;
