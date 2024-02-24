import {useEffect, useState} from 'react'
import { add } from '../Redux/Cardslice';
import {useDispatch} from 'react-redux'

const Home = () => {
    const [products , setProducts] = useState([])
    const dispatch = useDispatch(); 


    useEffect(() => {
        const fetchData = async()=>{
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data)
            }
            catch(error){
                console.error("Error fetching",error)
            }
        };
        
        fetchData();
    }, [])
    
    const handleadd=(product)=>{
        dispatch(add(product));
    }

  return (
    <div className='flex flex-wrap gradients p-4 '>
        {
            products.map((product)=>(
                <div className='flex-1 p-[100px] bg-white border-[rgb(0,26,36)] border-opacity-70 border-[2px] py-5 font-poppins justify-center ' key={product.id}>
                <img className='w-[50px] ' src={product.image} alt={product.title} />
                <h4 className='font-semi-bold'>{product.title}</h4>
                <button className='gradients text-white w-[50px] rounded h-[40px]' onClick={()=>handleadd(product)}>{product.price}</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home