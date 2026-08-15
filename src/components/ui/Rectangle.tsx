import Image from "next/image";
import { BoldTitle, CustomText, Title } from "./title";
interface IRectangle {
    title: string;
    Bold: string;
    icon: string;
    width: number;
    height: number;
}
interface IRectangle2 {
    icon: string;
    icon2: string;
    width: number;
    height: number;
    width2: number;
    height2: number;
}
export default function CoustomRectangle({ title, Bold, icon, width, height }: IRectangle) {
    return <div className=" border-2 rounded-2xl w-80 h-90 p-5">
        <Image src={icon} alt={""} width={width} height={height} />
        <Title className="text-popover-foreground text-2xl" title={title} />
        <CustomText className="text-muted text-xl" title={"اقدامات ساده باعث ایجاد تفاوت می شود. این کار با تلاش هر کارمند برای ایمن‌تر کار کردن هر روز آغاز می‌شود و به پایان می‌رسد تا بتوانند برگردند."} />
        <div className="w-full h-px bg-muted my-7"></div>
        <div className="place-items-center place-content-center">
            <BoldTitle className="text-popover-foreground text-xl" title={Bold} />
        </div>
    </div>
}
export function CoustomRectangle2({ icon, width, height, icon2, width2, height2 }: IRectangle2) {
    return <div className="grid grid-cols-2 w-full place-content-center place-items-center">
        <div className="space-y-20">
            <Image src={icon} alt={""} width={width} height={width} />
            <Image src={icon2} alt={""} width={width2} height={height2} />
        </div>
        <div className="bg-muted/50 h-40 w-px"></div> 
    </div>

}