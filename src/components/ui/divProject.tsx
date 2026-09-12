import { BoldTitle } from "./title";
interface CoustomDiv{
    Title:string;
}
export default function CoustomDiv({Title}:CoustomDiv) {
    return <div className="bg-card-foreground/40 p-7 w-80 place-content-center place-items-center rounded-[30px]">
        <BoldTitle className="text-2xl" title={Title} />
    </div>
}