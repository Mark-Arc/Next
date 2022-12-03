import Image from 'next/image';
import reactLogo from '../../public/images/icon-512x512.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-center h-screen">
        <Image src={reactLogo} alt="sas" />
        <Image src="/images/icon-192x192.png" alt="sasas" />
        <div className="text-black font-bold text-xl">Hello World!</div>
      </div>
    </div>
  );
}
