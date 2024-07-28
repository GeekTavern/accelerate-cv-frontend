'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { RoleForm } from './components/roleForm/RoleForm';
import { CvForm } from './components/cvForm/CvForm';
import { useSession } from 'next-auth/react';
import { AuthButton } from './components/authButton/AuthButton';

export default function Home() {
  let roles = {};

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AuthButton></AuthButton>
        <h1>Accelerate CV</h1>
        <h2>tailor your CV with AI</h2>
      </div>
      <CvForm />{' '}
    </div>
  );
}
