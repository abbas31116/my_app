import { Button, IButton } from "@/components/ui/button";
import { CustomText, HTitle, SubTitle, Title } from "@/components/ui/title";
import { BACK_ARROW, BR, BRAND, FRAME, FRAME2, FRAME3 } from "@/config/local";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="static z-0 grid grid-cols-1 gap-y-20">
        <div className="">
          <Image className="" fill src={BRAND} alt={"ssss"} />
          <Image className="" fill src={BR} alt={"ssss"} />
        </div>
        <div className="z-5 space-y-10 place-items-center m-auto">
          <Title className="z-5 text-primary" title={"به دیده بان صنایع  خوش آمدید"} />
          <HTitle className="z-5 text-4xl" title={"ساختن رویاها با دقت و کیفیت"} />
          <SubTitle className="z-5 text-3xl" title={"ما در تبدیل چشم اندازها به واقعیت با مهارت استثنایی و توجه دقیق به جزئیات تخصص داریم. با سالها تجربه و تعهد به کیفیت"} />
          <div className="grid grid-cols-2 gap-20">
            <Button className="z-5">اکنون شروع کنید</Button>
            <IButton icon={<Image src={BACK_ARROW} alt={"ss"} width={20} height={20} />} title="مشاهده پروژه‌ها" className="bg-white/5 border hover:bg-black hover:text-white border-amber-50" />
          </div>
        </div>
        <div className="absolute -bottom-20 right-5 w-150 h-40 bg-white z-5 grid grid-cols-3 rounded-2xl shadow-xl/30 place-items-center">
          <div className="space-y-3">
            <Image src={FRAME3} alt={""} width={50} height={50} />
            <SubTitle className="text-black" title={"۳۰,۰۰۰+ مشتریان وفادار"} />
          </div>
          <div className="space-y-3">
            <Image src={FRAME2} alt={""} width={50} height={50} />
            <SubTitle className="text-black" title={"۲۰+ سال فعالیت مستمر"} />
          </div>
          <div className="space-y-3">
            <Image src={FRAME} alt={""} width={50} height={50} />
            <SubTitle className="text-black" title={"۱۰۰+ پرسنل متخصص"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 relative">
        <div>
          <Title className="text-primary" title={"درباره ما"} />
          <SubTitle title={"ساختن رویاها با دقت و کیفیت"}/>
          <CustomText title={"ساخت سازه‌هایی که مادام‌العمر دوام می‌آورند، نیازمند رویکردی کل‌نگر است که مواد پیشرفته، طراحی انعطاف‌پذیر، نگهداری منظم و شیوه‌های پایداری را ادغام می‌کند. با یادگیری از نمونه های تاریخی و بهره گیری از تکنولوژی مدرن"}/>
        </div>
        <div>

        </div>
      </div>
    </div>

  );
}
