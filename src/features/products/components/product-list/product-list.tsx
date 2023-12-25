import React, { useEffect, useState } from 'react'
import { ProductService } from '../../hooks/product-service'
import { ProductComponentProps } from '../../types';
import ProductComponent from '../product/product';

const ProductListComponent = () => {
  const { fetchProductList, getProductList } = ProductService();
  const [productList, setProductList] = useState([])
  useEffect(() => {
    fetchProductList(10)
  }, []);

  useEffect(() => {
    setProductList(getProductList)
  }, [getProductList])

  console.log(getProductList)
  return (
    <div>
      {
        productList.length>0 ?
            productList.map((product: any, index: number) => (
              <ProductComponent desc={product.description} title={product.title} price={product.price} productImage={product.image} rating={product.rating.rate} key={index} />
            ))
          
          : <p>Data Not Found</p>

      }
    </div>
  )
}

export default ProductListComponent