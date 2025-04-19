import { IProduct } from "../../types/Servers"

type TProductItem = IProduct

function ProductItem({price,image,title,description}: TProductItem) {
    return (
        <div className="shadow border pb-4 transition-transform transform hover:scale-105">
            <img className="rounded-t "
                src={image}
                alt="" />
            <div className='line-clamp-1 flex justify-between font-bold px-4 w-52'>
                <h3>{title}</h3>
                <span className="font-bold">{price}$</span>
            </div>
            <div className='px-4'>
                <p className="line-clamp-2 text-left text-gray-500">
                   {description}
                </p>
            </div>
        </div>
    )
}



export default ProductItem