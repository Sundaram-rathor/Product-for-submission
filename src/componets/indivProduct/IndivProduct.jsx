import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fetching } from '../Fetch/FetchData';
import {motion} from 'framer-motion'

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await Fetching();
      const selectedProduct = data.find(item => item.id === parseInt(productId));
      setProduct(selectedProduct);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
        animate={{ y: -25 }}
        transition={{ ease: "easeOut", duration: 1 }}
    >
    <div className="w-screen mx-auto p-20">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex gap-24 p-5">
        
        <div className="p-7">
          <h2 className="text-[40px] font-semibold text-gray-800 mb-2 ">{product.title}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-700 font-bold mb-2">Price: ${product.price}</p>
          <p className="text-gray-700">Category: {product.category}</p>
        </div>
        <img className="h-[500px]" src={product.image} alt={product.title} />
      </div>
    </div>
    </motion.div>
  );
}

export default ProductPage;
