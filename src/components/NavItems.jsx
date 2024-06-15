import { PRODUCT_CATEGORIES } from '@/config'
import React, { useState } from 'react'
import Navitem from './Navitem'

const NavItems = () => {
    const [activeIndex,setActiveIndex] = useState(null);
  return (
    <div className='flex gap-4 h-full'>
    {
        PRODUCT_CATEGORIES.map((category,index)=>{
            const isOpen = activeIndex === index;
            const onOpen =()=>{
                if(isOpen)
                    {
                        setActiveIndex(null);
                    }
                    else{
                        setActiveIndex(index);
                    }
            }
            return(
                <Navitem key={index}
                category={category}
                onOpen={onOpen}
                isOpen={isOpen}
                isAnyOpen={activeIndex !==null}
                />
            )
        })
    }  
    </div>
  )
}

export default NavItems
