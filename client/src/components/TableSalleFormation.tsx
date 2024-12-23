import ButtonBookingBas from "./ButtonBookingBas"

const TableSalleFormation = () => {
    return (
        <div className="flex justify-center items-center mt-[8%] mx-auto ">
            <div className=" relative flex justify-center items-center">
            <img src="salleFormation.png" alt="table" className="w-[40wh] h-[40vh]"/>
            <ButtonBookingBas className="bottom absolute -bottom-16 left-1/2 transform -translate-x-1/2"/>
            </div>
        </div>
    )
}

export default TableSalleFormation
