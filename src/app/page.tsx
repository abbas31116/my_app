import { Button, IButton } from "@/components/ui/button";
import { CustomText, HTitle, SubTitle, Title } from "@/components/ui/title";
import { BACK_ARROW, BR, BRAND, FRAME, FRAME2, FRAME3 } from "@/config/local";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="absolute inset-0 overflow-hidden bg-red-500 ">
        <Image src={BRAND} alt={""} fill />
        <div className="inset-0 absolute bg-black/60"></div>
      </div>
      <div className="place-content-center place-items-center space-y-5 absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2">
        <HTitle
          className="z-10 text-xl text-primary"
          title={"به دیده بان صنایع  خوش آمدید"}
        />
        <SubTitle
          className="z-10 text-3xl"
          title={"ساختن رویاها با دقت و کیفیت"}
        />
        <CustomText
          className="z-10 text-4xl"
          title={
            "ما در تبدیل چشم اندازها به واقعیت با مهارت استثنایی و توجه دقیق به جزئیات تخصص داریم. با سالها تجربه و تعهد به کیفیت "
          }
        />
        <div className="flex place-content-center ">
          <Button className="z-10 ">اکنون شروع کنید</Button>
          {/* <IButton
            className="z-10"
            title={""}
            icon={BACK_ARROW}
          /> */}
          <Button>
            مشاهده پروژه‌ها{" "}
            <Image alt="" src={BACK_ARROW} width={30} height={30} />
          </Button>
        </div>
      </div>
      {/* <div className="h-screen ">
        
        <Image src={BR} alt={""} fill />
       
        
        <div></div>
        <div>

        </div>
      </div> */}
    </div>
  );
}
