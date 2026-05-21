"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}

          className="
          fixed
          inset-0
          z-[200]
          bg-[#050505]
          flex
          items-center
          justify-center
          "
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            className="text-center"
          >

            <p
              className="
              text-red-500
              tracking-[0.4em]
              uppercase
              text-sm
              mb-6
              "
            >
              Initializing
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              "
            >
              SGN
            </h1>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}
