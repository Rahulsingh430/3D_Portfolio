import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper} from '../hoc';
import { technologies} from '../constants'
import {textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I KNOW SO FAR</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
{ technologies.map((technology)=>(
  <div className='w-28 h-28 hover:w-32' key={technology.name}>
    <img  src={technology.icon} alt={technology.name} />
  </div>
))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,'tech')