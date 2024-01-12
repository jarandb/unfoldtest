"use client";
import Image from "next/image";
import Link from "next/link";
import tokyo from "../../../public/tokyo.jpg";
import "./style.css";
import { motion, useTransform, useScroll } from "framer-motion";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import CloseIcon from "@mui/icons-material/Close";

export default function Article() {
  const imageDetails = { width: 250, height: 250 };
  const transition = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <motion.div
      className="text-white relative"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <motion.div
          initial={{
            y: "50%",
            x: "50%",
            width: imageDetails.width,
            height: imageDetails.height,
          }}
          animate={{
            y: 0,
            x: 0,
            width: "100%",
            height: "100%",
            transition: transition,
          }}
          exit={{
            y: "50%",
            x: "50%",
            width: imageDetails.width,
            height: imageDetails.height,
          }}
        >
          <Image src={tokyo} alt="an image" />
        </motion.div>
      </div>

      <motion.div className="article-content">
        <Link className="top" href="/">
          <CloseIcon />
        </Link>
        <motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-5xl">Lost in tokyo</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between"
          >
            <p>By name namesen</p>
            <div className="flex">
              <p className="pl-5">8</p>
              <ModeCommentIcon />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
