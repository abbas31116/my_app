import { Button } from "@/components/ui/button";
import { BoldTitle, CustomText, HTitle, SubTitle, Title } from "@/components/ui/title";
import { ABOUT, BACK_ARROW, BRAND, CHECKMARK, FRAME, FRAME2, FRAME3 } from "@/config/local";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" h-screen relative">
        <div className="absolute inset-0 overflow-hidden  ">
          <Image src={BRAND} alt={""} fill />
          <div className="inset-0 absolute bg-black/60"></div>
        </div>
        <div className="place-content-center place-items-center space-y-5 absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2">
          <HTitle
            className="z-10 text-xl text-primary"
            title={"به دیده بان صنایع  خوش آمدید"}
          />
          <BoldTitle
            className="z-10 text-5xl"
            title={"ساختن رویاها با دقت و کیفیت"}
          />
          <CustomText
            className="z-10 text-2xl"
            title={
              "ما در تبدیل چشم اندازها به واقعیت با مهارت استثنایی و توجه دقیق به جزئیات تخصص داریم. با سالها تجربه و تعهد به کیفیت "
            }
          />
          <div className="flex place-content-center space-x-10 ">
            <Button className="p-7 text-white">اکنون شروع کنید</Button>
            <Button variant={"ghost"} className="p-7">
              مشاهده پروژه‌ها{" "}
              <Image alt="" src={BACK_ARROW} width={30} height={30} />
            </Button>
          </div>
        </div>
        <div className="absolute grid grid-cols-3 bg-foreground place-content-center shadow-3xl right-10  -bottom-15 w-150 h-40 rounded-4xl p-7">
          <div className="space-y-4">
            <Image src={FRAME3} alt={"s"} width={50} height={50} />
            <SubTitle className="text-popover-foreground" title={"۳۰,۰۰۰+ مشتریان وفادار"} />
          </div>
          <div className="space-y-4">
            <Image src={FRAME2} alt={""} width={50} height={50} />
            <SubTitle className="text-popover-foreground" title={"۲۰+ سال فعالیت مستمر"} />
          </div>
          <div className="space-y-4">
            <Image src={FRAME} alt={""} width={50} height={50} />
            <SubTitle className="text-popover-foreground" title={"۱۰۰+ پرسنل متخصص"} />
          </div>

        </div>
      </div>
      <div className=" grid grid-cols-2 w-fill h-100 relative top-20 place-content-center place-items-center">
        <div className="space-y-5 ">
          <Title className="text-primary text-xl" title={"درباره ما"} />
          <BoldTitle className="text-black text-5xl" title={"ساختن رویاها با دقت و کیفیت"} />
          <CustomText className="text-muted text-2xl w-170" title={"ساخت سازه‌هایی که مادام‌العمر دوام می‌آورند، نیازمند رویکردی کل‌نگر است که مواد پیشرفته، طراحی انعطاف‌پذیر، نگهداری منظم و شیوه‌های پایداری را ادغام می‌کند. با یادگیری از نمونه های تاریخی و بهره گیری از تکنولوژی مدرن"} />

          <div className="bg-primary-foreground w-150 h-35 grid grid-cols-2 place-items-center place-content-center rounded-3xl">
            <div className="flex m-5 space-x-3">
              <Image src={CHECKMARK} alt={""} width={30} height={40} />
              <BoldTitle className="text-popover-foreground" title={"خدمات جامع"} />
            </div>
            <div className="flex m-5 space-x-3">
              <Image src={CHECKMARK} alt={""} width={30} height={40} />
              <BoldTitle className="text-popover-foreground" title={"فن آوری پیشرفته"} />

            </div>
            <div className="flex m-5 space-x-3">
              <Image src={CHECKMARK} alt={""} width={30} height={40} />
              <BoldTitle className="text-popover-foreground" title={"ارتباطات شفاف"} />
            </div>
            <div className="flex m-5 space-x-3">
              <Image src={CHECKMARK} alt={""} width={30} height={40} />
              <BoldTitle className="text-popover-foreground" title={"خدمات بالا"} />

            </div>
          </div>
        </div>
        <div>
          <Image src={ABOUT} alt={"درباره ما"} width={400} height={400} />
        </div>
      </div>

    </div>
  );
}
