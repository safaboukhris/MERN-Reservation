import ButtonBooking from "./ButtonBooking"



const TableConception = () => {

    return (
        <>
            <div className="flex justify-center items-center mt-[8%] ">
                <div className="flex justify-center items-center  w-[60%] h-[60%]">
                    <div className=" relative flex justify-center items-center w-[50%] h-36 bg-[#945B2F] rounded-full border">
                        <ButtonBooking className="top absolute -top-12 left-1/2 transform -translate-x-1/2"/>
                        <ButtonBooking className="right absolute -right-12 top-1/2 transform -translate-y-1/2"/>
                        <ButtonBooking className="bottom absolute -bottom-12 left-1/2 transform -translate-x-1/2"/>
                        <ButtonBooking className="left absolute -left-12 top-1/2 transform -translate-y-1/2"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableConception
