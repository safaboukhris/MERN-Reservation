import ButtonBooking from "./ButtonBooking"
import ButtonBookingBas from "./ButtonBookingBas"
import ButtonBookingLeft from "./ButtonBookingLeft"
import ButtonBookingRight from "./ButtonBookingRight"



const TableConception = () => {

    return (
        <>
            <div className="flex justify-center items-center mt-[8%] ">
                <div className="flex justify-center items-center  w-[60%] h-[60%]">
                    <div className=" relative flex justify-center items-center w-[50%] h-36  ">
                        <img src="table.png" alt="table" className="w-[40wh] h-[40vh]"/>
                        <ButtonBooking className="top absolute -top-32 left-1/2 transform -translate-x-1/2"/>
                        <ButtonBooking className="top absolute -top-28 left-1/4 transform -translate-x-1/2"/>
                        <ButtonBooking className="top absolute -top-28 left-3/4 transform -translate-x-1/2"/>
                        <ButtonBookingRight className="right absolute -right-12 top-1/2 transform -translate-y-1/2"/>
                        <ButtonBookingBas className="bottom absolute -bottom-32 left-1/2 transform -translate-x-1/2"/>
                        <ButtonBookingBas className="bottom absolute -bottom-28 left-1/4 transform -translate-x-1/2"/>
                        <ButtonBookingBas className="bottom absolute -bottom-28 left-3/4 transform -translate-x-1/2"/>
                        <ButtonBookingLeft className="left absolute -left-12 top-1/2 transform -translate-y-1/2"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableConception
