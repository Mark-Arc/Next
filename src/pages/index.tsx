import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-center h-screen">
        <Image src="/images/icon-512x512.png" alt="sas" />
        <div className="text-black font-bold text-xl">Hello World!</div>
      </div>
    </div>
  );
}
