import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import styles from "./styles.module.css"
const SliderWords = () => {
  const [slider, setSlider] = useState (0);
  const words = ["Responsabilidad", "Eficiencia", "Trabajo en equipo", "Comunicación"];

  const [data, setData] = useState({      
    word: words[slider],     
  });
  useEffect(() => {
    setData({        
      word: words[slider],               
    });
  }, [slider]);

  let sliderValue = words.length -1;

  useEffect(() => {    
    const timer = setTimeout(()=> {
        slider >= sliderValue ? setSlider(slider = 0): setSlider(slider + 1);
    },4000);
    return () => clearTimeout(timer)
  }, [slider]);

  return (
    <div className={styles["div__word"]}>
      <motion.h2
        key={slider}
        initial={{
          opacity: 0,          
          transition: { duration: 0.5, ease: [0.77, 0.17, 0.93, 0.95] },
        }}
        animate={{
          opacity: 1,          
          transition: { duration: 0.5, ease: [0.17, 0.67, 0.83, 0.95] },
        }}
        exit={{
          opacity: 0,          
          transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.95] },
        }}>
          {data.word}
      </motion.h2>

    </div>
  )
}

export default SliderWords