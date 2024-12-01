import z from "zod";

//registration validation
export const signupSchema = z.object({
    name: z.string().min(1, {message: "Le nom est requis"}),
    lastname: z.string().min(1, {message: "le nom de famille est obligatoire"}),
    email: z.string().min(1, {message: "L'email est requis"}).email({message:"Email non valide"}),
    password: z.string().min(6, {message: "Le mot de passe doit comporter au moins 6 caractères"}),
    confirm_password: z.string().min(6, {message: "La confirmation du mot de passe doit comporter au moins 6 caractères"})
  }).refine(data => data.password === data.confirm_password ,{
    message:" passwors do not match",
    path:['confirm_password']
  });

export type ISignup= z.infer< typeof signupSchema> 


//login validation
export const signinSchema = z.object({
    email: z.string().min(1, {message: "L'email est requis"}).email({message:"Email non valide"}),
    password: z.string().min(6, {message: "Le mot de passe doit comporter au moins 6 caractères"}),
})
export type ISignin = z.infer<typeof signinSchema>