import React from "react";
import styles from "../styles/Home.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Box = ({ src, speed }) => {
  // en teoria framer motion mide el scroll  con ese hook , la idea es que se le indique conforme a esa medida que se quiere hacer con el scrollYProgress
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ y: yValue }}
    >
      <img src={src} />
    </motion.div>
  );
};

const Test = () => {
  return (
    <div className={styles.test}>
      <div className={styles.section}>
        <Box
          speed={2}
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80"
        />
        <Box
          speed={0}
          src="https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <Box
          speed={-2}
          src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        />
      </div>
    </div>
  );
};

export default Test;
