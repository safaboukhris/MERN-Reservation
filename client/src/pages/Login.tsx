import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { ISignin, signinSchema} from "../validations/auth"
import InputErrors from "../components/InputErrors";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm<ISignin>({
    mode: "onChange",
    resolver: zodResolver(signinSchema)
  });


  const onSubmit: SubmitHandler<ISignin> = async (data) =>{
    // sending data to backend api
    try{
      const response = await axiosInstance.post("/api/login",data);
      // Extract token and user data from the response
      const { token, user } = response.data;
      // Save the token and user data to localStorage (or sessionStorage)
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful:", user, token);

       // Navigate to the home page 
      navigate("/dashboard");
    }catch (error: any) {
      // Handle errors
      console.error("Login error:", error.response?.data?.message || error.message);
      alert("Login failed. Please create an account.");
    } finally {
      // Optionally reset the form
      reset();
    }
  }

  const signinInputs = [
    { type: "email", placeholder: "Enter votre email", register: register("email"), error: errors.email},
    { type: "password", placeholder: "Enter votre mot de passe", register: register("password"), error: errors.password },
  ]


  return (
    <div className="h-screen bg-[#e9cca2] flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl text-center text-[#C7AD86] mb-6">SE CONNECTER</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
      {signinInputs.map((input) => (
          <div key={input.placeholder} className="mb-4">
            <Input 
              type={input.type} 
              placeholder={input.placeholder} 
              register={input.register}
              />
              <InputErrors error={input.error}/>
          </div>
        ))}
        <button type="submit" disabled={isSubmitting}
        className="w-full py-3 bg-[#C7AD86] text-white rounded-lg hover:bg-[#A6895F] disabled:opacity-50">Se connecter</button>
      <div className="text-center mt-4">
      <p className="text-sm">
        Vous n'avez pas un compte ?
        <Link to="/signup" className="text-[#C7AD86] hover:text-[#A6895F] ml-5">
          S'inscrire
        </Link>
      </p>
    </div>
      </form>
    </div>
    </div>
  )
}

export default Login
