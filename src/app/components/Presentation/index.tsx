"use client";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";
import "./styles.scss";

export default function Presentation() {
  return (
    <section className="presentation-container">
      <div className="presentation-backdrop"></div>
      <main className="presentation-main">
        <motion.section
          initial={{ transform: "translateX(-5rem)", opacity: 0 }}
          animate={{ transform: "translateX(0)", opacity: 1 }}
        >
          <h1>
            Discover all possibilities of using this powerfull tool and create
            science figures, posters and infographics.
          </h1>
          <Button>Start creating now</Button>
        </motion.section>
        <motion.section
          initial={{ transform: "translateX(5rem)", opacity: 0 }}
          animate={{ transform: "translateX(0)", opacity: 1 }}
        >
          <Image
            src={"/head-02.png"}
            alt="An image of the application in use."
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.section>
      </main>
    </section>
  );
}
