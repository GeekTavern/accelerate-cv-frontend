"use server";

import styles from "./page.module.css";
import { CvForm } from "./components/cvForm/CvForm";
import LogIn from "./components/authentication/logIn/Login";
import Register from "./components/authentication/register/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  let roles = {};

  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  // this is the home route, this is where we will have the thing
  //if there is a session here, redirect to dashboard

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
