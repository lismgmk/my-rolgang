import config from "@/config/config.json";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const Announcement = () => {
  const [isshow, setShow] = useState(true);
  const onClose = () => setShow(false);
  const { message, link, lable, enable } = config.announcement;
  return (
    isshow &&
    enable && (
      <div className="announcement">
        <div className="container-fluid">
          <div className="relative flex items-center justify-between sm:text-center">
            <span className="mx-auto pr-10">
              {message}
              <a href={link}>{lable}</a>
            </span>
            <button
              onClick={onClose}
              className="notice-close-btn flex h-[20px] min-w-[20px] items-center justify-center rounded-full border-2 border-white text-white opacity-80"
              aria-label="close toast button"
              type="button"
            >
              <IoIosClose width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Announcement;
