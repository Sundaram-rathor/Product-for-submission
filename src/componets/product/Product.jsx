import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Fetching } from '../Fetch/FetchData';
import {motion} from 'framer-motion'

function Product() {
  const [product, setProduct] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');

  useEffect(() => {
    const fetching = async () => {
      const data = await Fetching();
      setProduct(data);
    };
    fetching();
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedTitle(event.target.value);
  };

 

 

  return (
    <>
    <motion.div
        animate={{ y: -50 }}
        transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className='flex flex-col p-6'>
        <div className='flex items-center cursor-pointer '>
          <span className='p-1 '>
            <label htmlFor="choose" className='p-2'>Sort By:</label>
            <select id="choose" name="choose" onChange={handleDropdownChange}>
              <optgroup label="title">
                <option>choose:</option>
                {product.map(product => (
                  <option key={product.id} value={product.title}>{product.title}</option>
                ))}
              </optgroup>
            </select>
          </span>
        </div>
        <hr className='h-[3px] bg-[#76ABAE] w-[90px]' />
      </div>
      <div className='p-6 grid grid-cols-4 gap-4 h-auto'>
        {selectedTitle === '' || selectedTitle === 'choose:' ? (
          product.map(product => <Item key={product.id} product={product}  />)
        ) : (
          product.filter(product => product.title === selectedTitle).map(product => <Item key={product.id} product={product}  />)
        )}
      </div>
      </motion.div>
    </>
  );
}

export default Product;
