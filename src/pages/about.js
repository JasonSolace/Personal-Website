import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(value);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Jason Armenta | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='dark:text-light flex w-full flex-col item-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='dark:text-light mb-4 text-lg font-bold uppercase text-dark/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi, I'm JasonSolace, a web developer and software engineer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life.
              </p>
              <p className='my-4 font-medium'>
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className='font-medium'>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className='dark:bg-dark dark:border-light col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='dark:bg-light absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image
                src={profilePic}
                alt='JasonSolace'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='dark:text-light dark:opacity-75 text-xl font-medium capitalize text-dark/75'>
                  items of wow
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className='dark:text-light dark:opacity-75 text-xl font-medium capitalize text-dark/75'>
                  items completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className='dark:text-light dark:opacity-75 text-xl font-medium capitalize text-dark/75'>
                  years of something
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
