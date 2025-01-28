import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const Notification = ({ message, onClose, closed }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className={`notification d-flex ${closed}`}>
      <FaHeart className="notificationHeart" />
      {message}
    </div>
  );
};

export default Notification;
