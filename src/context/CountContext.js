import React from 'react'

const CountContext = React.createContext({
  count: 0,
  updateCountIncrease: () => {},
  updateCountDecrease: () => {},
})

export default CountContext
