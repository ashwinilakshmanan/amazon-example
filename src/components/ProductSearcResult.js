import { useSelector } from "react-redux"
import ProductCard from "./ProductCard";

export const ProductSearchResult=()=>{
    console.log("prodserach");
    const {productList,searchText}=useSelector((state)=>{
       
        return state.products;
       
    })
    const filteredProds=productList?.filter((p)=>{
        return p.title?.toLowerCase().indexOf(searchText?.toLowerCase())>-1
    })
    console.log("searchresult",filteredProds);
    return(
        <>
        {
            filteredProds.map((s)=>{
                
                return(
                    <ProductCard product={s}/>
                )
            })
        }
            
        </>
    )
}