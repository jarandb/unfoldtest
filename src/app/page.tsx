"use client";

import Image from "next/image";
import Link from "next/link";
import tokyo from "../../public/tokyo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
export default function Home() {
  const imageDetails = { width: 250, height: 250 };
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 text-center">
      <h2 className="mb-5 text-3xl">
        <b>Shared</b> by me
      </h2>
      <Image
        src={tokyo}
        alt="a dark tokyo street"
        width={imageDetails.width}
        height={imageDetails.height}
      />
      <h1 className="mt-3 mb-3 text-5xl">Lost in Tokyo</h1>
      <p className="max-w-80">
        estibulum cursus ex nisl, nec ultrices tellus sodales nec. Nullam
        lobortis, metus lobortis, metus lobortis, metus
      </p>
      <Link href="/articles">
        <div className="circle">
          <UnfoldMoreIcon />
        </div>
      </Link>
    </main>
  );
}
