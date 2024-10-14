import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <main>
      <motion.div
        className="circle"
        initial={{ translateX: 0 }}
        animate={{ translateX: 400 }}
        transition={{ duration: 0.8, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="circle"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ repeat: Infinity }}
      />

      <motion.button whileTap={{ scale: 0.8 }}>Logga in</motion.button>
    </main>
  );
}

export default App;
