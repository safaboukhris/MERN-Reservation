import ButtonBooking from "./ButtonBooking"

const TableBureau = () => {
    return (
        <div className="flex justify-center items-center mt-[8%] mx-auto w-[60%] h-[60%]" >
            <div className=" relative flex justify-center items-center">
                <img src="tableBureau.png" alt="table" className="w-[50wh] h-[50vh]"/>
                <ButtonBooking className="top absolute  left-1/2 transform -translate-x-1/2"/>
            </div>
        </div>
    )
}

export default TableBureau
