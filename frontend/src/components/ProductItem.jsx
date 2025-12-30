import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <div className="text-gray-700 cursor-pointer">
      
      {/* Product Click */}
      <Link onClick={() => scrollTo(0, 0)} to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out w-full"
            src={image?.[0] || "https://via.placeholder.com/300"}
            alt={name}
          />
        </div>

        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}{price}
        </p>
      </Link>

      {/* TEMP BUY BUTTON */}
      <button
        className="mt-2 w-full bg-black text-white py-2 text-sm hover:bg-gray-800"
        onClick={() => alert("Buy feature coming soon")}
      >
        Buy Now
      </button>

    </div>
  )
}

export default ProductItem
