import { FieldError } from "react-hook-form"

const InputErrors = ({ error }: { error: FieldError | undefined }) => {
  return error && <span className="text-red-500 text-xs italic"> {error.message}</span>
  
}

export default InputErrors
