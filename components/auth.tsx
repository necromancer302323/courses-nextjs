"use client"
import axios from "axios";
import { ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";
import { SignupInput } from "@/common copy 2/dist";
import { BACKEND_URL } from "@/config";
import { signin, signup } from "@/app/actions/user";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const route = useRouter()
  const [postInput, setPostInputs] = useState<SignupInput>({
    username: "",
    password: "",
  });

  return (
    <div className="h-screen  flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="px-10 flex flex-col gap-3">
          <div>
            <div className="text-3xl font-extrabold">
              {type == "signup" ? "Create an account" : "Login to your account"}
            </div>
            <div className="text-slate-400 ">
              {type == "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                className="px-5"
                onClick={()=>{{type == "signin" ? route.push("/signup") : route.push("/signin")}}}
              >
                {type == "signin" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>


          <LabbledInput
            Label="username"
            Placeholder="username"
            type=""
            onChange={(e) => {
              setPostInputs({
                ...postInput,
                username: e.target.value,
              });
            }}
          />
          <LabbledInput
            Label="password"
            Placeholder="password"
            type="password"
            onChange={(e) => {
              setPostInputs({
                ...postInput,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={async ()=>{
              if(type=="signup"){
            const res= await signup(postInput.username,postInput.password) 
            alert(res.message)
            }else{
              const res= await signin(postInput.username,postInput.password)
              localStorage.setItem("userId",res.id||"")
              alert(res.message)
            }            if(!localStorage.getItem("userId")){

            }else{
              {type=="signin"? route.push("/courses/1"):route.push("/signup")}
            }
            }}
            type="button"
            className="mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
            focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
             dark:border-gray-700"
          >
            {type == "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LablledInputType {
  Label: string;
  Placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

function LabbledInput({
  Label,
  Placeholder,
  onChange,
  type,
}: LablledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-gray-900 ">
        {Label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={Placeholder}
        required
      />
    </div>
  );
}
