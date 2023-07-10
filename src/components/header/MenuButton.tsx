import { motion } from 'framer-motion';

type MenuButtonProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton = ({ openMenu, setOpenMenu }: MenuButtonProps) => {
  return (
    <button className="space-y-1" onClick={() => setOpenMenu((m) => !m)}>
      <motion.span
        animate={
          openMenu ? { y: 10, rotate: [-360, -45] } : { y: 0, rotate: 360 }
        }
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 0.45,
        }}
        className="h-[2px] w-8 bg-black block"
      ></motion.span>
      <motion.span
        animate={openMenu ? { rotate: [360, 45] } : { rotate: -360 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 0.45,
        }}
        className="h-[2px] w-7 bg-black block"
      ></motion.span>
      <motion.span
        animate={openMenu ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.45,
        }}
        className="h-[2px] w-5 bg-black block"
      ></motion.span>
    </button>
  );
};

export default MenuButton;
