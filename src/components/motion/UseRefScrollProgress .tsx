"use client";
import React from "react";

const UseRefScrollProgress = () => {
  const ref = React.useRef<HTMLDivElement>(null!);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(0);

  React.useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    // const offsetTop = rect.top + scrollTop - window.innerHeight

    setStart(offsetTop / document.body.clientHeight);
    setEnd((offsetTop + rect.height) / document.body.clientHeight);
  });
  return { ref, start, end };
};

export default UseRefScrollProgress;
