import { FRAME4 } from "@/config/local";
import { SubTitle } from "./title";
import Image from "next/image";
interface GroupComponents {
    title: string;
    icon: string;
}
export default function GroupeComponents({ icon, title }: GroupComponents) {
    return <div className="bg-secondary w-50 h-45 place-content-center place-items-center rounded-xl">
        <Image src={icon} alt={""} width={90} height={55} />
        <SubTitle className="text-popover-foreground" title={title} />
    </div>
}