import { useEffect, useRef, useState } from "react";

// Simple hook that returns a ref and whether the element is in view.
// Usage: const [ref, inView] = useInView({ threshold: 0.1 })
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      options
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, JSON.stringify(options)]);

  return [ref, inView];
}
