import React, { FC } from "react";

import { motion } from "framer-motion";

import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.div>
    );
  };

export default SectionWrapper;
