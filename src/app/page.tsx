import Image from 'next/image';
import styles from './page.module.css';
import { RoleForm } from './components/roleForm/RoleForm';
import { CvForm } from './components/cvForm/CvForm';

export default function Home() {
  let roles = {};

  return (
    <div>
      This is the home route. Below is the CV form.
      <CvForm />{' '}
    </div>
  );
}
