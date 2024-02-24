import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <div className='flex-1 space-x-9 text-center py-10 gradients text-white font-poppins'>
      <NavLink
        to="/"
        className=" hover:text-white"
      >
        Home
      </NavLink>
      <NavLink
        to="/cart"
        className="text-white-500 "
      >
        Cart
      <span className='px-2'>item:{items.length}</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
