import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [data, setData] = useState(null);
  function toggle(p) {
    setIsShowing(!isShowing);
    setData(p);
  }

  return {
    isShowing,
    toggle,
    data
  };
};

export default useModal;
