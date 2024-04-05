import {AiOutlineShoppingCart} from 'react-icons/ai'

import CountContext from '../../context/CountContext'

import './index.css'

const NavBar = props => {
  const {restaurentName} = props
  return (
    <CountContext.Consumer>
      {value => {
        const {count} = value
        return (
          <div className="navbar-container">
            <h1 className="nav-title">{restaurentName}</h1>
            <div className="nav-items">
              <h1 className="my-Orders">My Orders</h1>
              <div className="cart-count">
                <AiOutlineShoppingCart className="cart-icon" />
                <p className="count">{count}</p>
              </div>
            </div>
          </div>
        )
      }}
    </CountContext.Consumer>
  )
}
export default NavBar
