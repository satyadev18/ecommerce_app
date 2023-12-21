import React, { useEffect } from 'react'
import { ProductService } from '../../hooks/product-service'

const ProductListComponent = () => {
  const {fetchProductList,getProductList} = ProductService();

  useEffect(()=>{
    fetchProductList(10)
  },[]);

  console.log(getProductList)
  return (
    <div>ProductListComponent</div>
  )
}

export default ProductListComponent