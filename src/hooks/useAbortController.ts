import { useRef, useEffect } from "react";

export const useAbortController = () => {
  const abortController = useRef(new AbortController());

  useEffect(() => {
    return () => {
      !abortController.current.signal.aborted &&
        abortController.current.abort();
    };
  }, []);

  return {
    signal: abortController.current.signal,
    abort: abortController.current.abort,
  };
};
