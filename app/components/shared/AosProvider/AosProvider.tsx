"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
    //   once: true
    });
  }, []);

  return children;
}