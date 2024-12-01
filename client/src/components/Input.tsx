import {UseFormRegisterReturn} from "react-hook-form"

type InputProps = {
    type: string,
    placeholder: string,
    register: UseFormRegisterReturn<string>
}

const Input = ({type, placeholder, register}: InputProps) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...register}
      className="w-full mb-3 p-2 border-2 border-[#C7AD86] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A6895F] placeholder:text-[#A6895F] placeholder:text-sm  text-black" />
    </div>
  )
}

export default Input
