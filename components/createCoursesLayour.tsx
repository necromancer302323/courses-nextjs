"use client";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppBar } from "./appBar";
import { addingCourse } from "@/app/actions/courses";

export const Layout = () => {
   
    const [authorName,setAuthorName]=useState("")
  const [name, setName] = useState("");
  const [prices, setPrice] = useState("");
  const route = useRouter();

  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full ">

        <input
          onChange={(e) => {
            setAuthorName(e.target.value);
        }}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="authorName"
          ></input>

          <input
            onChange={(e) => {
                setName(e.target.value);
            }}
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-10"
            placeholder="Name"
          />
          <input
          onChange={(e) => {
            setPrice(e.target.value);
        }}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-10"
            placeholder="Price"
          ></input>
          <button
            onClick={async () => {
               const res= await addingCourse(name,prices,authorName)
               alert(res.message)
               route.push("/courses/1")
            }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            create course
          </button>
        </div>
      </div>
    </div>
  );
};
