import { BACK_ARROW, IMAGE30 } from "@/config/local";
import Image from "next/image";
import { CustomText, Title } from "./title";
import { Button } from "@base-ui/react";
export default function CoustomDivComponents() {
    return <div className="w-476 place-content-center place-items-center overflow-hidden">
        <div className="bg-popover-foreground w-400 m-10 h-100 place-content-center ">
            <Image src={IMAGE30} alt={""} width={425} height={20} className="float-left" />
            <div className="m-10 w-100 space-y-10">
                <Title className="text-3xl " title={"بیایید با هم تاریخی عالی بسازیم!"} />
                <CustomText className="text-xl" title={"دیگر منتظر نباشید تا رویاهای ساخت و ساز خود را زنده کنید. با ماهان تک شریک شوید و خدمات و کیفیت بی نظیری را تجربه کنید."} />
                <Button className="p-5 flex bg-primary rounded-2xl ">
                    مشاهده پروژه‌ها{" "}
                    <Image alt="" src={BACK_ARROW} width={30} height={30} />
                </Button>
            </div>
        </div>
    </div>
}