import { Armchair } from "lucide-react"
import ButtonBooking from "./ButtonBooking"



const TableConception = () => {

    return (
        <>
            <div className="flex justify-center items-center mt-[8%] ">
                <div className="flex justify-center items-center  w-[60%] h-[60%]">
                    <div className=" relative flex justify-center items-center w-[50%] h-36 bg-[#DEB887] rounded-md border">
                        <ButtonBooking/>
                        <button className=" right absolute hover:bg-[#f5debf] -right-12 top-1/2 transform -translate-y-1/2">
                            <Armchair  color="#A0522D" strokeWidth={2.5} size={36}/>
                        </button>
                        <button className=" bottom absolute  hover:bg-[#f5debf]  -bottom-12 left-1/2 transform -translate-x-1/2">
                            <Armchair  color="#A0522D" strokeWidth={2.5} size={36}/>
                        </button>
                        <button className=" left absolute  hover:bg-[#f5debf] -left-12 top-1/2 transform -translate-y-1/2">
                            <Armchair  color="#A0522D" strokeWidth={2.5} size={36}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableConception
