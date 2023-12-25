import { useCallback } from "react";
import { useAppDispatch } from "../../../mainstore/hooks"
import { getProductList, productListMiddleware } from "../store/product-slice";
import { useSelector } from "react-redux";


export const ProductService = ()=>{

    const dispatch = useAppDispatch();

    return {
        fetchProductList : useCallback((limit:number)=>{
            dispatch(productListMiddleware(limit))
        },[dispatch]),

        getProductList:useSelector(getProductList),
    }

}

