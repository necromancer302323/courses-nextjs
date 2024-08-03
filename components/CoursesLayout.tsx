"use client"
import { gettingCourses } from "@/app/actions/courses";
import { AppBar } from "./appBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CoursesLayout(id:{id:string|string[]}){
    const route=useRouter()
    const nextCourses=Number(id.id)+1
  const [courses,setcourses]=useState([{
    id:0 , name: "", authorName: "", price: 0
  }])
    async function gettingData(){
      setcourses(await gettingCourses(id) )
    }
     
    useEffect( ()=>{
        gettingData()
    },[])
    return <div>
         <AppBar/>
   <div className="relative overflow-x-auto">
    <table className="w-[157rem] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 m-2 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100  rounded-full">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Courses name
                </th>
                <th scope="col" className="px-6 py-3">
                   authorName
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Price
                </th>
            </tr>
        </thead>
       <tbody className="text-2xl text-gray-700 bg-gray-100  rounded-full p-10 ml-10 font-bold">
        {courses.map((course)=>{
            return <tr key={Math.random()}>
            <th scope="col" className="px-6 py-3 ">
                    {course.name}
                </th>
                <th scope="col" className="px-6 py-3">
                   {course.authorName}
                </th>
                <th scope="col" className="px-6 py-3 ">
                    {course.price}
                </th>
            </tr>
        })}
       </tbody>
    </table>
</div>
<div className="flex justify-center gap-10">
<button 
    onClick={()=>{
        if(Number(id.id)<=1){
            console.log(id.id)
            route.push(`/courses/1`)
        }else{
        route.push(`/courses/${Number(id.id)-1}`)
        }
    }}
    className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2   font-monospace ">
        previous
    </button >
    <div className="flex gap-1">
    <div 
     onClick={()=>{
        if(Number(id.id)<=2){
            console.log(id.id)
            route.push(`/courses/1`)
        }else{
        route.push(`/courses/${Number(id.id)-2}`)
        }
    }}
    className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2   font-monospace ">
        {Number(id.id)<=2? null:Number(id.id)-2}
    </div>
    <div 
     onClick={()=>{
        if(Number(id.id)<=1){
            console.log(id.id)
            route.push(`/courses/1`)
        }else{
        route.push(`/courses/${Number(id.id)-1}`)
        }
    }}
    className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2   font-monospace ">
         {Number(id.id)<=1? null:Number(id.id)-1}
    </div>
    <div 
     onClick={()=>{
        route.push(`/courses/${Number(id.id)}`)
    }}
    className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2   font-monospace ">
        {id.id}
    </div>
    <div 
    onClick={()=>{
        route.push(`/courses/${Number(id.id)+1}`)
    }}
    className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2   font-monospace ">
        {Number(id.id)+1}
    </div>
    <div className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2   font-monospace ">
        ....
    </div>
    
    </div>
<button
  onClick={()=>{
    route.push(`/courses/${Number(id.id)+1}`)
}}
 className="text-xl text-gray-700 bg-gray-100  rounded-lg p-2  font-monospace ">
       Next
    </button>
  
   
</div>
    </div>
    
}