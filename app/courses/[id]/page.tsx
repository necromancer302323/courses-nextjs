"use client"
import CoursesLayout from "@/components/CoursesLayout";
import { useParams } from "next/navigation";
export default function Courses(){
    const id=useParams()
    console.log(id.id)

return <div>
<CoursesLayout id={id.id} />
    </div>

}