import {  useEffect, useRef } from "react";

export function useScroll(data) {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollBy({
        top: messagesRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [data]);

  return { messagesRef };
}
