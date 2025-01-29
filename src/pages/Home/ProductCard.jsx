import { products } from "../../utils"
import ProductDesign from "../components/ProductDesign"

function ProductCard() {
    return (
        <>
            <div className="flex justify-center items-center text-5xl pt-8 pb-6 font-bold font-serif text-blue-950 max-sm:text-xl max-sm:pt-4 max-sm:pb-4">AirPods Max</div>
            <ProductDesign data={products} />
        </>
    )
}


export default ProductCard
