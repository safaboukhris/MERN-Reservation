import ButtonBooking from "./ButtonBooking"
import ButtonBookingBas from "./ButtonBookingBas"
import ButtonBookingLeft from "./ButtonBookingLeft"

const TableEspaceCalme = () => {
    return (
        <div className="flex justify-center items-center mt-[8%] mx-auto">
            <div className=" relative flex justify-center items-center">
                <img src="espaceCalm.png" alt="table" className="w-[60wh] h-[60vh]"/>
                <ButtonBooking className="top absolute -top-16 left-1/2 transform -translate-x-1/2"/>
                <ButtonBooking className="top absolute -top-16 left-3/4 transform -translate-x-1/2"/>
                <ButtonBookingLeft className="left absolute -left-12 top-1/3 transform -translate-y-1/2"/>
                <ButtonBookingLeft className="left absolute -left-12 top-2/3 transform -translate-y-1/2"/>
                <ButtonBookingBas className="bottom absolute -bottom-16 left-2/3 transform -translate-x-1/2 ml-8"/>
                <ButtonBookingBas className="bottom absolute -bottom-16 left-2/4 transform -translate-x-1/2 "/>
            </div>
        </div>
    )
}

export default TableEspaceCalme
