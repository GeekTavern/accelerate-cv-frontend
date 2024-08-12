"use server";

import styles from "./page.module.css";
import { CvForm } from "./components/cvForm/CvForm";
import LogIn from "./components/authentication/logIn/Login";
import Register from "./components/authentication/register/Register";

export default async function Home() {
  let roles = {};

  // this is the home route, this is where we will ha
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Accelerate CV</h1>
        <h2>tailor your CV with AI</h2>
        <Register />
        <LogIn />
      </div>
    </div>
  );
}
