import { Link } from "react-router-dom";

function ProductDesign({ data }) {
    return (
        <div className="flex justify-between items-center gap-3 ps-3 pe-3 max-sm:grid max-sm:grid-cols-1 max-sm:justify-center max-sm:gap-3 max-md:grid max-md:grid-cols-2 max-lg:grid max-lg:grid-cols-2 max-xl:grid max-xl:grid-cols-3">{
            data.map((product) => {
                return (
                    <Link to={`${product.path}/${product.id}`} key={product?.id} className="m-auto">
                        <div className="flex-col flex items-center h-[580px] w-[290px] bg-gray-100 p-3 max-sm:h-auto max-sm:w-[236px]" >

                            <div className="flex justify-center items-center">
                                <img src={product?.image} className="h-[250px] w-[280px] max-sm:h-[196px] max-sm:w-[212px]" />
                            </div>
                            <div className="flex flex-col items-start">
                            <h2 className="font-bold capitalize text-2xl pt-6 text-sky-800 max-sm:text-xl">{product?.name}</h2>
                            <p className="capitalize text-slate-500 pt-2 max-sm:text-xs">{product?.details}</p>
                            <h4 className="font-medium text-slate-700 max-sm:text-xs">{product?.rating}</h4>
                            <p className="font-semibold text-slate-700">{product?.reviews}</p>
                            <div className="flex items-center justify-between w-7/12 pt-3 gap-3">
                                <h1 className="font-bold text-xl text-sky-800">{product?.price}</h1>
                                <h1 className="font-semibold text-sky-800 line-through">{product?.discount}</h1>
                            </div>
                            <button type="button" className="text-center bg-yellow-600 p-2 rounded-md text-white font-semibold pt-3 max-sm:p-1">
                                Add To Cart
                            </button>
                            </div>
                          

                        </div>
                    </Link>

                )
            })
        }
        </div >
    )
}

export default ProductDesign