import ButtonBooking from "./ButtonBooking"
import ButtonBookingBas from "./ButtonBookingBas"
import ButtonBookingLeft from "./ButtonBookingLeft"
import ButtonBookingRight from "./ButtonBookingRight"


const TableReception = () => {
    return (
        <div className="flex justify-center items-center mt-[8%] mx-auto w-[60%] h-[60%]">
            <div className=" relative flex justify-center items-center"> 
                <img src="tableReception.PNG" alt="table" className="w-[30wh] h-[30vh]"/>
                <ButtonBooking className="top absolute -top-16 left-1/4 transform -translate-x-1/2"/>
                <ButtonBooking className="top absolute -top-16 left-3/4 transform -translate-x-1/2"/>
                <ButtonBookingRight className="right absolute -right-12 top-1/2 transform -translate-y-1/2"/>
                <ButtonBookingBas className="bottom absolute -bottom-16 left-1/4 transform -translate-x-1/2"/>
                <ButtonBookingBas className="bottom absolute -bottom-16 left-3/4 transform -translate-x-1/2"/>
                <ButtonBookingLeft className="left absolute -left-12 top-1/2 transform -translate-y-1/2"/>
            </div>
        </div>
    )
}

export default TableReception
