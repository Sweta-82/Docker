import React from 'react'
import Cards from './Cards'

function Forgound() {
  // {/* desc, fileszise, closeorDOwnlaod, tagDetails */}
  const data =[
    {des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum perferendis rerum voluptates!',
      file: '.9Mb',
      closeOrOpen: true ,
      tag:{isOpen: true, tagTitle: 'Download Now', tagColor:'blue'},
     },
     {des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum perferendis rerum voluptates!',
      file: '.2Mb',
      closeOrOpen: false ,
      tag:{isOpen: true, tagTitle: 'Download Now', tagColor:'green'},
     },
     {des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam illum perferendis rerum voluptates!',
      file: '.10Mb',
      closeOrOpen: true ,
      tag:{isOpen: true, tagTitle: 'Download Now', tagColor:'blue'},
     },
  ];
  
  return (
    <>
        <div className='fixed  z-[3] w-full h-full flex gap-5 flex-wrap p-8'>
            {data.map((e,idx)=>(
              <Cards data={e} />
            ))}
        </div>
    </>
  )
}

export default Forgound