"use client"
import { HEADER_ITEMS } from "@/config/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { LOGO } from "@/config/local";

export default function CustomHeader(){
    return(
    <div className="bg-muted-foreground rounded-[48px] h-33 grid grid-cols-3 m-11.25  p-5 place-content-center place-items-center  z-5">
           
          <p className=" place-self-start rounded-[26px] bg-primary w-24 h-21.25"></p>
          <div className="grid grid-cols-7 gap-4">{HEADER_ITEMS.map((item,index)=>(
              <Link className="px-20 py-8 w-100 text-[20px]"
              key={`header-${index}`}
              href={item.link} 
              >{item.name}</Link>
            ))}</div>  
            <Button className="place-self-end self-center p-8 hover:bg-foreground hover:text-primary">درخواست مشاوره</Button>
        </div>
    )
}