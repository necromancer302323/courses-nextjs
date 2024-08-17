"use client"
import { useRouter } from "next/navigation";


export const AppBar = () => {
    const router=useRouter()
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <button onClick={()=>{router.push("/blogs")}} className="flex justify-center flex-col">
       Courses
      </button>
      <div>
        <button
        onClick={()=>{router.push("/courses/Create")}}
          type="button"
          className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Create a course
        </button>
        <Avatar name="logout" size={10}/>
      </div>
      
    </div>
  );
};


export function Avatar({ name,size }: { name: string,size:number }){
  const route=useRouter()
  return (
    <button onClick={()=>{ localStorage.removeItem("userId");alert("succefully logged out");route.push("/signin")}}>
<div className={`relative inline-flex items-center justify-center w-fit h-${size} overflow-hidden  rounded-full bg-gray-700 p-2`} >
    <span className="font-medium text-gray-600 dark:text-gray-300">{name}</span>
</div>
</button>
  )
}