import { Button, IButton} from "@/components/ui/button";
import { CustomText, HTitle, SubTitle, Title } from "@/components/ui/title";
import { BACK_ARROW, BR, BRAND, FRAME, FRAME2, FRAME3 } from "@/config/local";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen ">
        <Image src={BRAND} alt={""} fill />
        <Image src={BR} alt={""} fill />
        <div className="place-content-center place-items-center space-y-5 ">
          <HTitle className="z-10 text-xl text-primary" title={"به دیده بان صنایع  خوش آمدید"} />
          <SubTitle className="z-10 text-3xl" title={"ساختن رویاها با دقت و کیفیت"} />
          <CustomText className="z-10 text-4xl" title={"ما در تبدیل چشم اندازها به واقعیت با مهارت استثنایی و توجه دقیق به جزئیات تخصص داریم. با سالها تجربه و تعهد به کیفیت "} />
        </div>
        <div className="flex place-content-center ">
          <Button className="z-10 ">اکنون شروع کنید</Button>
          <IButton className="z-10" title={"مشاهده پروژه‌ها"} icon={BACK_ARROW}/>
        </div>
        <div></div>
        <div>

        </div>
      </div>
    </div>

  );
}
