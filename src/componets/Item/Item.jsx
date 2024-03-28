import React from 'react' 
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Item({product}) {
  return (
    <motion.div
    whileHover={{
        scale: 1.1,
        transition: { duration: .5 },
      }}
      whileTap={{ scale: 1 }}
        
>
    <Link to={`/product/${product.id}`}>
    <div className='h-[400px] w-[300px]  m-5 grid-rows-4 grid-flow-col gap-4  mb-10  ' >
       <div  >
          <img src={product.image} alt="" className='object-contain h-[300px] w-full' />
       </div>
       <div className="info">
           <div className='text-xl mb-2'>{product.title}</div>
           <div>
            <div className='hover:font-bold'>${product.price}</div>
            <div className='font-bold'>{product.category}</div>
           </div>
           
       </div>
    </div>
    </Link>
    </motion.div>
  )
}

export default Item