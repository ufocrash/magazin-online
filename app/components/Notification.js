import { useEffect, useState } from "react";

const Notification = ({ message, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 10000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(timer);
    };
  }, [onClose]);

  if (!message) return null;

  return (
    <div className={`notification ${fadeOut ? "fade-out" : ""}`}>{message}</div>
  );
};

export default Notification;
