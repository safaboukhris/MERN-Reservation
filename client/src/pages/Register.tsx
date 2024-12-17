import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Input from "../components/Input";
import InputErrors from "../components/InputErrors";
import { ISignup, signupSchema } from "../validations/auth";
import { fetchData } from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

const Register = () => {
  
  const [currentImage , setCurrentImage] = useState(0)
  const navigate = useNavigate()
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm<ISignup>({
    mode: "onChange",
    resolver: zodResolver(signupSchema)
  });
  const onSubmit: SubmitHandler<ISignup> = async ({name, lastname, email, password, phone}) => {
    // sending data to backend api
    const user = {
      name,
      lastname,
      email,
      phone,
      password
    }    
    try {
      const response = await fetchData("/api/register", "POST", user);
      if(response.status === 409){
        alert("l'utilisateur exist déja")
      }else{
        reset(); // Réinitialiser le formulaire
        navigate('/signin')
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        // Handle user already exists error
        console.error("Erreur d'inscription : User already exists.");
        alert("User already exists. Please use a different email.");
      } else {
        console.error("Erreur d'inscription :", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  }

  const images = [
    "coworking7.jpg",
    "coworking2.jpg",
    "coworking5.jpg",
    "coworking3.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const signupInputs = [
    { type: "text", placeholder: "Enter votre nom", register: register("name"), error: errors.name },
    { type: "text", placeholder: "Enter votre Prénon", register: register("lastname"), error: errors.lastname},
    { type: "email", placeholder: "Enter votre email", register: register("email"), error: errors.email},
    { type: "phone", placeholder: "Enter votre numéro de téléphone", register: register("phone"), error: errors.phone},
    { type: "password", placeholder: "Enter votre mot de passe", register: register("password"), error: errors.password },
    { type: "password", placeholder: "Confirmer votre mot de passe", register: register("confirm_password"), error: errors.confirm_password },
  ]

  return (
    <div className="h-screen w-[90%]  grid grid-cols-2 mx-auto">
      <div className=" flex items-center justify-center">
      <div className=" w-[60%]  ">
      <h2 className="text-3xl text-center text-[#C7AD86] mb-6">CREER UN COMPTE</h2>
      <form  onSubmit={handleSubmit(onSubmit)} className="mb-4">
        {signupInputs.map((input) => (
          <div key={input.placeholder}>
            <Input 
              type={input.type} 
              placeholder={input.placeholder} 
              register={input.register}
              />
              <InputErrors error={input.error}/>
          </div>
        ))}
        <button type="submit" disabled={isSubmitting}
        className="w-full py-3 bg-[#C7AD86] text-white rounded-lg hover:bg-[#A6895F] disabled:opacity-50">S'inscrire</button>
      <div className="text-center mt-4">
      <p className="text-sm text-gray-800">
        Vous avez un compte ?
        <Link to="/signin" className="text-[#C7AD86] hover:text-[#A6895F] ml-5">
          Se connecter
        </Link>
      </p>
    </div>
      </form>
      </div>
    </div>
    <div className="mt-[10%]">
    <img 
        src={images[currentImage]} 
        alt={`Image ${currentImage}`} 
        style={{ width: "100%", height: "90%" }}
        className="rounded-3xl"

      />
    </div>
    </div>
  )
}

export default Register
