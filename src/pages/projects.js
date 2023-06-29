import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className='dark:bg-dark dark:border-light w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'
    >
      <div
        className='dark:bg-light absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl'
      />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image
          src={img}
          alt={title}
          className='w-full h-auto'
          priority
          sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='dark:text-primaryDark text-primary font-medium text-xl'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='dark:text-light my-2 w-full text-left text-4xl font-bold'>
            {title}
          </h2>
        </Link>
        <p className='dark:text-light my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='dark:bg-light dark:text-dark ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className='dark:border-light dark:bg-dark w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative'
    >
      <div
        className='dark:bg-light absolute top-0 -right-3 -z-10 w-full h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl'
      />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='dark:text-primaryDark text-primary font-medium text-xl'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='dark:text-light my-2 w-full text-left text-3xl font-bold'>
            {title}
          </h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Jason Armenta | Projects </title>
        <meta name='description' content='more description! Edit ME!' />
      </Head>
      <main className='dark:text-light w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject
                title={'First Featured Projects'}
                img={project1}
                link={'/'}
                github={'/'}
                summary={
                  'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency'
                }
                type='Featured Project'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title={'Project 1'}
                img={project1}
                link={'/'}
                github={'/'}
                type='Project'
              />
            </div>
            <div className='col-span-6'>Project-2</div>
            <div className='col-span-12'>Featured Project</div>
            <div className='col-span-6'>Project-3</div>
            <div className='col-span-6'>Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
