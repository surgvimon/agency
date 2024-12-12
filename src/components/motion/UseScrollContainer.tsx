import React from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const UseScrollContainer = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return { scrollRef, hidden };
};

export default UseScrollContainer;
