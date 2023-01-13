import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

//Indicamos que nuestro functional component será de dicho tipo con : FC | Debemos indicar el tipo 'PropsWithChildren' para poder hacer uso de la prop 'children' del componente que nosotros creamos 'LightLAyout'
export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        {/** Componente importado de next, lo usamos para añadir info al head de nuestro archivo html */}
        <title>Dani site</title>
        <meta name="description" content="God's home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/*  */}
        {children}
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Lo-Fi Radio <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Play the lo-fi music radio</p>
          </Link>

          <Link
            href="https://www.udemy.com/course/nextjs-fh/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Next.js - Udemy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Check the Udemy course</p>
          </Link>

        </div>
      </main>
    </>
  );
};
