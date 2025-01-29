import { Badge } from "@mantine/core";
import { productDetails } from "../utils"
import { useParams } from 'react-router'
import '@mantine/core/styles.css';

function Product() {
    const { id } = useParams()
    const details = productDetails.find((ele) => ele.id === Number(id));

    return (
        <div key={details?.id} className="flex justify-between p-20 items-center h-[100%] gap-10 max-sm:flex-col max-sm:p-4 max-sm:gap-3" >
            <div>
                <img src={details?.image} className="h-[400[px] w-[400px] max-sm:h-[220px] max-sm:w-[220px]" />
            </div>
            <div className="w-[70%] flex flex-col gap-2 max-sm:w-[100%]">
                <h2 className="text-2xl font-bold max-sm:text-[16px] max-sm:leading-snug">{details?.detail}</h2>
                <h3 className="text-sky-800 font-bold hover:underline cursor-pointer">{details?.link}</h3>
                <h4 className="text-xs font-bold">{details?.rate}</h4>
                <h5 className="font-bold border-b-2 pb-2">{details?.sell}</h5>
                <h1>
                    <Badge color="#de0a26" className="flex justify-center items-center font-bold pt-3">
                        {details?.badge}
                    </Badge>
                </h1>

                <span className="flex gap-4">
                    <h3 className="text-red-600 text-2xl">{details?.discount}</h3>
                    <h3 className="font-bold text-2xl">{details?.amount}</h3>
                </span>
                <h1 className="flex gap-1 items-center">
                    <h3 className="text-gray-600 text-xs">M.R.P :</h3>
                    <h3 className="text-gray-600 text-xs line-through">{details?.mrp}</h3>
                </h1>


                <h3>{details?.tax}</h3>
            </div>
        </div>
    )
}
export default Product