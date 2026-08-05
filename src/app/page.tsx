import { Button, IButton } from "@/components/ui/button";
import { BoldTitle, CustomText, HTitle, SubTitle, Title } from "@/components/ui/title";
import { BACK_ARROW, BRAND } from "@/config/local";
import Image from "next/image";

export default function Home() {
  return (

    <div className="grid text-4xl place-content-center place-items-center  ">

      <div>
        <Title className="text-primary place-self-center z-20 " title={"به نمایندگی کاوازاکی خوش آمدید"} />
        <HTitle className="text-foreground text-4xl  z-20" title={"ساختن رویاها با دقت و کیفیت با موتور کاوازاکی"} />
        <SubTitle className="m-5 text-3xl z-20" title={"ما در تبدیل چشم اندازها به واقعیت با مهارت استثنایی و توجه دقیق به جزئیات تخصص داریم. با سالها تجربه و تعهد به کیفیت "} />
      </div>
      <div className="z-20">
        <Button className="p-7 hover:bg-foreground hover:text-primary ">درخواست مشاوره</Button>
        <IButton icon={BRAND} title="مشاهده" className="p-7 hover:bg-foreground hover:text-primary" />
      </div>
      <div>
        <Image className=" mx-auto object-cover rounded-xl absolute bottom-0 left-0 " fill src={BRAND} alt={"ssss"} />
      </div>
      <div className="bg-red-950 z-50">s</div>

    </div>
  );
}
