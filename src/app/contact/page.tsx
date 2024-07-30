"use client"
import React from 'react'
import {Meteors} from '@/components/ui/meteors'

const page = () => {
    return (
    <div className="bg-gray-900 text-white ">
        <Meteors number={40}/>
    </div>
      );
    }

export default page;