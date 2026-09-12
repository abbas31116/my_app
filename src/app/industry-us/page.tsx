import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Title } from "@/components/ui/title"
import { FRAME31, IMAGE31, IMAGE32 } from "@/config/local"
import { Search } from "lucide-react"
import Image from "next/image"
export default function Honor() {
    const RectangaleComp = () => {
        return <div className="h-150 w-130 relative m-5">
            <Image src={IMAGE32} alt={""} fill />
            <div className="inset-0 absolute  from-popover-foreground/60 to-popover-foreground/10  bg-linear-to-t  rounded-[105px]"></div>
            <Title className="absolute text-2xl bottom-10 right-10" title={"نام کارخانه"} />
        </div>
    }
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (<div>
        <div className="h-screen relative ">
            <Image src={IMAGE31} alt={""} fill />
            <div className="inset-0 absolute  from-popover-foreground/80 to-popover-foreground/10  bg-linear-to-t  "></div>
            <Title className="text-5xl absolute right-180 bottom-120" title={"کارخانجات و صنعت"}/>
        </div>
        <div className="flex place-content-center place-items-center m-10">
            <div className="w-300 shadow-2xl h-20 m-5 place-content-center p-3">
                <Input placeholder="جست و جو..." icon={<Search />} />
            </div>
            <div className="w-30 h-20 shadow-2xl place-content-center place-items-center rounded-2xl m-4">
                <Image src={FRAME31} alt={""} width={80} height={100} />
            </div>
            <Button className="p-8 w-40 rounded-4xl">جستجو</Button>
        </div>
        <div className="grid grid-cols-3">
            {items.map((_, index) => (<div key={index}>

                <RectangaleComp />
            </div>
            ))}
        </div>
    </div>
    )
}