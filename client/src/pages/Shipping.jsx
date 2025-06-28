import React from 'react'
import { useSelector } from 'react-redux'

function Shipping() {
    const { cartItems } = useSelector((state) => state.cart)
  return (
    <div>
        Hello . . .
    </div>
  )
}

export default Shipping
