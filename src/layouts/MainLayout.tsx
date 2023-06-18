import React from "react";

import styles from "./MainLayot.module.css";

interface MainLayoutProps {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, main, footer }) => {
  return (
    // <>
    //   <header className={styles.header}>{header}</header>
    //   <main className={styles.main}>{main}</main>
    //   <footer className={styles.footer}>{footer}</footer>
    // </>
    <section className={styles.app}>
      <header className={styles.header}>{header}</header>
      <div className={styles.wrapper}>
        <main className={styles.main}>{main}</main>
        <footer className={styles.footer}>{footer}</footer>
      </div>
    </section>
  );
};

export default MainLayout;
