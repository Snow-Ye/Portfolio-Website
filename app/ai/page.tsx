import React from "react";
import Header2 from "@/components/header2";
import Mainpage from "@/components/mainpage";
import Link from 'next/link';
import Image from 'next/image'
import openailogo from "@/public/openailogo.svg";
import profile from "@/public/profile.jpg";

export default function ai() {
  return (
    <div>
    <Header2 />
<header className="w-full flex justify-between items-center bg-whit3e sm: px-8 px-4 py-4 border-b border-b-[#e6ebf4]">

      
        <Link href="#ai">
          <Image src={openailogo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex justify-end items-end space-x-12">
          <Link
            href="#article-summarize"
            className="font-inter font-medium text-white px-4 py-2 rounded-md "
            style={{
              background: "linear-gradient(to right, #FFDD00, #FBB034)",
            }}
          >
            Summarize Article
          </Link>

          <Link
           href="#create-post"
            className="font-inter font-medium text-white px-4 py-2 rounded-md"
            style={{
              background: "linear-gradient(to right, #2a2a72 0%, #009ffd 74%)",
            }}
          >
            Generate Image
          </Link>
        </div>
      </header>
      </div>
   
    

  )
}
