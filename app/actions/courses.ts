"use server"
import { createCouseInput } from "@/common copy 2/src"
import client from "@/db"

export async function addingCourse(name:string,prices:string,authorName:string){
 
    const price=Number(prices)
    const body={name,authorName,price}
    const {success}=createCouseInput.safeParse(body)

    if (!success) {
        console.log(success)
        return { message: "invalid input" }
    }
    try{
await client.courses.create({
    data:{
    authorName,
    name,
    price,
    }
})
return {message:"course added"}
}catch(e){
    console.log(e)
return {message:"error while adding course"}

}
}
export async function gettingCourses(id:{id:string|string[]}){
   let coursesToBeSkiped=0
  if(Number(id.id)==1){
    coursesToBeSkiped=0
  }else{
    coursesToBeSkiped=(Number(id.id)-1)*10
    
  }
   
const res= await client.courses.findMany({
    take:10,
    skip:coursesToBeSkiped
})
return res
    
}