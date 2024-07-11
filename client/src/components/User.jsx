import React from "react";
import styles from "./styles.module.css";

function User() {
  return (
    <div className={styles.userHeader}>
      <img
        src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png"
        alt=""
      />
      <h1>User</h1>
    </div>
  );
}

export default User;
