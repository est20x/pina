import { IHamburgerButton } from "@/components/types";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


export const HamburgerButton: React.FC<IHamburgerButton> = ({
  isOpen,
  onToggle,
}) => (
  <button
    className="lg:hidden  text-3xl focus:outline-none z-50 relative"
    onClick={onToggle}
  >
    <motion.div
      initial={{ opacity: 1, color: "#" }}
      animate={{
        opacity: isOpen ? 0.8 : 1,
        x: isOpen ? 10 : 0,
        color: isOpen ? "#ff5000" : "#fff",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {isOpen ? <IoClose /> : <GiHamburgerMenu />}
    </motion.div>
  </button>
);