"use client"
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
        <div className='mt-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course:Course)=>(
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                <div className='text-white p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                  <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <Link href={"/course/${course.slug}"}>Learn more</Link>
                  </div></BackgroundGradient>
            </div>
          ))}
          </div>
        </div>
        <div className='mt-20 text-center'><Link href={"/courses"}
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
        >
          View all courses</Link></div>
      </div>
    </div>
  )
}

export default FeaturedCourses
