import React from 'react'
import { FaArrowCircleDown } from "react-icons/fa";
import { TbFiles } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { motion } from "motion/react"
function Cards({data}) {
  return (
    <motion.div drag dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }} whileDrag={{ opacity: 0.5 }} dragElastic={1} animate={{ x: 100  }} transition={{ type: "spring", stiffness: 100 }} className='relative p-5 overflow-hidden text-white rounded-[50px] bg-zinc-900/90 w-50 h-62'>
      <TbFiles />
      <p className='pt-8 text-sm leading-none'>{data.des}</p>
      <div className='absolute bottom-0 left-0 w-full py-4'>
        <div className='flex justify-between px-6 mb-10'>
          <p>{data.file}</p>
          {data.closeOrOpen=== true ? <IoMdCloseCircleOutline />:<FaArrowCircleDown />}
        </div>
        {data.tag.isOpen && (<div className={`absolute bottom-0 flex justify-center w-full py-2 ${data.tag.tagColor==='green'? 'bg-green-600' : 'bg-blue-500' } `}>
        <h3>{data.tag.tagTitle}</h3>
      </div>)}
      </div>
    </motion.div>

  )
}

export default Cards