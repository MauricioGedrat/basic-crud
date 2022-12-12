import { motion } from "framer-motion";
import { useApplicationContext } from "../../Contexts/Context";
import { EditForm } from "../EditForm";

export const Modal = () => {
  const { setEditItem, editItem } = useApplicationContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed h-screen w-screen bg-[#00000032] backdrop-blur-sm top-0 left-0 flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="px-20 py-5 bg-white relative"
      >
        <button
          className="text-2xl lowercase absolute top-1 p-2 right-1 cursor-pointer"
          onClick={() => setEditItem(undefined)}
        >
          Close
        </button>
        <h1 className="font-bold text-4xl mt-10">Edit your user:</h1>
        <EditForm />
      </motion.div>
    </motion.div>
  );
};
