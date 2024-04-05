import {Component} from 'react'

import CountContext from '../../context/CountContext'

import './index.css'

class DishItem extends Component {
  state = {cartCount: 0}

  render() {
    const {cartCount} = this.state
    const {dishDetails} = this.props
    const {
      dishName,
      dishCurrency,
      dishPrice,
      dishImage,
      dishDescription,
      dishCalories,
      addonCart,
      dishAvailability,
    } = dishDetails
    const addOncartsLength = addonCart.length
    console.log(dishDetails)
    return (
      <CountContext.Consumer>
        {value => {
          const {updateCountDecrease, updateCountIncrease} = value
          const onClickDecrease = () => {
            if (cartCount > 0) {
              this.setState(prevState => ({cartCount: prevState.cartCount - 1}))
            }
            updateCountDecrease()
          }

          const onClickIncrease = () => {
            this.setState(prevState => ({cartCount: prevState.cartCount + 1}))
            updateCountIncrease()
          }

          return (
            <li className="dish-item">
              <div className="dishes-details-container">
                <h1 className="dishname">{dishName}</h1>
                <p className="currency">
                  {dishCurrency} {dishPrice}
                </p>
                <p className="dish-description">{dishDescription}</p>
                {dishAvailability ? (
                  <div className="buttons-container">
                    <button
                      type="button"
                      className="button"
                      onClick={onClickDecrease}
                    >
                      -
                    </button>
                    <p className="dishes-count">{cartCount}</p>
                    <button
                      type="button"
                      className="button"
                      onClick={onClickIncrease}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <p className="dishes-notavailable">Not available</p>
                )}
                {addOncartsLength > 0 && (
                  <p className="customizations">Customizations available</p>
                )}
              </div>
              <p className="dish-calories">{dishCalories} calories</p>
              <img src={dishImage} alt={dishName} className="dish-image" />
            </li>
          )
        }}
      </CountContext.Consumer>
    )
  }
}

export default DishItem
