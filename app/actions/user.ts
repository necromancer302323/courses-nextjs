"use server"
import { signinInput, signupInput } from "@/common copy 2/dist";
import client from "@/db"

export async function signup(username:string,password:string){
    const body={username,password}
    console.log(body)
    const { success } = signupInput.safeParse(body);
    if (!success) {
        console.log(success)
        return { message: "invalid input" }
    }
   
    try {
        const user=await client.user.findUnique({
            where:{
                name:body.username
            }
        })

        if(!user){
            await client.user.create({
                data:{
                    name:body.username,
                    password:body.password
                }
            })
}else{
   return {message:"there is a user with same username pls try again"}
}
    
      return{ message: "user added" }
  } catch(e) {
      return { message: "an error has occurd try again" }
    }
  
}

export async function signin(username:string,password:string){
    const body={username,password}

    
    const { success } = signinInput.safeParse(body);
    if (!success) {
        console.log(success)
        return { message: "invalid input" };
        
    }
    const user = await client.user.findUnique({
      where: {
        name: body.username,
        password: body.password,
      }
    });
    console.log(body.username)
    if (!user) {
      return { error: "user not found" };
    }
      return {id:user.id,message:"succefully signedin"}
}