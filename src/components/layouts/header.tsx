"use client"
import { HEADER_ITEMS } from "@/config/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { LOGO } from "@/config/local";

export default function CustomHeader(){
    return(
    <div className="bg-muted-foreground rounded-full h-34.25 grid grid-cols-3 m-11.25  p-5 place-content-center place-items-center static z-10">
            <Image  className=" place-self-start rounded-[26px] " width={96} height={86} src={LOGO} alt={"kawazaki store"}/>
          <div className="grid grid-cols-7 gap-4">{HEADER_ITEMS.map((item,index)=>(
              <Link className="px-20 py-8 w-100 text-[20px]"
              key={`header-${index}`}
              href={item.link} 
              >{item.name}</Link>
            ))}</div>  
            <Button className="p-7 hover:bg-foreground hover:text-primary">درخواست مشاوره</Button>
        </div>
    )
}