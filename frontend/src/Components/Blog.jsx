import React from 'react';
import Title from './Title';
import { blogs } from '../assets/data';

const Blog = () => {
  return (
    <section className='max-padd-container py-16'>
      <Title
        title1={'Our Expert'}
        title2={'Blog'}
        titleStyles={'pb-5'}
        paraStyles={'!block'}
      />
      {/* Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className='blog-card rounded-3xl border-[11px] border-primary overflow-hidden relative group'
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt="blogImg"
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            {/* Overlay */}
            <div className='absolute top-0 left-0 h-full w-full bg-black/25' />
            {/* Info */}
            <div
              className='absolute bottom-0 left-0 w-full text-white bg-black/75 p-4 text-center transform translate-y-full transition-transform duration-500 group-hover:translate-y-0'
            >
              <h3 className='font-semibold text-lg'>{blog.title}</h3>
              <h4 className='medium-14 py-2'>{blog.category}</h4>
              <button className='btn-light !px-3 !py-1'>Continue Reading</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
