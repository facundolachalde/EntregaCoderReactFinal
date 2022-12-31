import { Link, NavLink } from 'react-router-dom'
import { Cartwidget } from '../Cartwidget/Cartwidget'

const NavBar = () => {
  return (
    <div className="nav">
        <Link className='title' to='/'>Ecommerce CSGO</Link>
        <NavLink className='AKLink' to="/category/ak" >AK-47</NavLink>
        <NavLink className='M4Link' to="/category/m4" >M4</NavLink>
        <Link className='cart' to='/cart'>
          <Cartwidget/>
        </Link>
    </div>
  )
}

export default NavBar