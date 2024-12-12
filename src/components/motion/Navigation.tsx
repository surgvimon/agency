"use client";
import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  //   React.useEffect(() => {
  // const handleScroll = () => {
  //   setHidden(window.scrollY > 0);
  // };
  // window.addEventListener("scroll", handleScroll);
  // return () => window.removeEventListener("scroll", handleScroll);

  //     const unsub = scrollY.on("change", (latest) => console.log(latest));
  //   }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 flex gap-4 w-full item-center justify-center bg-black text-white z-[99]"
    >
      <div className="flex items-center gap-2 h-16"> menu 1</div>
      <div className="flex items-center gap-2 h-16"> menu 2</div>

      <button className="relative scale-100 overflow-hidden">Login</button>
    </motion.nav>
  );
};

export default Navigation;
