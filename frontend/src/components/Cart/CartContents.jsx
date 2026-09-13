import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartproducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      price: 20,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "jeans",
      size: "M",
      color: "Black",
      price: 40,
      quantity: 2,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartproducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between gap-3 py-4 border-b"
        >
          {/* Image + Product Details */}
          <div className="flex items-start flex-1 min-w-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-20 sm:w-20 sm:h-24 object-cover mr-3 sm:mr-4 rounded flex-shrink-0"
            />

            <div className="min-w-0">
              <h3 className="font-medium">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>

              <div className="flex items-center mt-2">
                <button className="border rounded px-2 text-xl font-medium">
                  -
                </button>

                <span className="mx-3">
                  {product.quantity}
                </span>

                <button className="border rounded px-2 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Price + Delete */}
          <div className="flex flex-col items-end flex-shrink-0">
            <p className="font-medium">
              $ {product.price.toLocaleString()}
            </p>

            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;