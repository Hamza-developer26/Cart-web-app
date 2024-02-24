import { useDispatch, useSelector } from "react-redux"
import { remove } from "../Redux/Cardslice"

const Cart = () => {
  const dispatch  = useDispatch();
  const cartitems = useSelector((state)=>state.cart)
  
  
  const handleremove=(id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
      <div className="flex-1">
        {
          cartitems.map((item)=>(
            <div className="flex justify-between font-poppins bg-white p-10 shadow-xl border-[rgb(0,26,36)] border-[px] m-5 " key={item.index }>
              <img className="w-[50px]" src={item.image} alt="img" />
              <div className="">
              <h5>{item.title}</h5>
              <h5 className="font-bold">price:${item.price}</h5>
              </div>
              <button className="gradients text-white p-[10px]   rounded" onClick={()=>handleremove(item.id)}>Remove</button>
            </div>  
          ))}
      </div>
      </div>
  )
}

export default Cart