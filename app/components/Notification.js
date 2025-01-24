import React, { useEffect, useState } from "react";

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call onClose after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return <div className="notification">{message}</div>;
};

export default Notification;
