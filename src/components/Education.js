import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='dark:text-light/75 capitalize font-medium text-dark/75'>
          {time} | {place}
        </span>
        <p className='font-medium w-full'>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            type={"Bachelor's Of Science in Computer Science"}
            time={'2020 - 2023'}
            place={'Fort Hays State University'}
            info={'GPA: 3.75/4.00'}
          />

          <Details
            type={'High School Diploma'}
            time={'2014 - 2017'}
            place={'Dodge City High School'}
            info={''}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
