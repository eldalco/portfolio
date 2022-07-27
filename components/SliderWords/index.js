import { useState, useEffect } from 'react'
import { motion } from "framer-motion";

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
  setTimeout(()=> {
      slider >= sliderValue ? setSlider(slider = 0): setSlider(slider + 1);
  },3000);

  return (
    <div>
      <motion.h2
        initial={{
          opacity: 0,          
          transition: { duration: 1.5, ease: [0.17, 0.67, 0.83, 0.95] },
        }}
        animate={{
          opacity: 1,          
          transition: { duration: 1.5, ease: [0.17, 0.67, 0.83, 0.95] },
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