import { Button } from "@/components/ui/button";
import GroupeComponents from "@/components/ui/group";
import CoustomRectangle, { CoustomRectangle2 } from "@/components/ui/Rectangle";
import { BoldTitle, CustomText, HTitle, SubTitle, Title } from "@/components/ui/title";
import {
  ABOUT,
  BACK_ARROW,
  BRAND,
  CHECKMARK,
  FRAME,
  FRAME10,
  FRAME11,
  FRAME12,
  FRAME13,
  FRAME14,
  FRAME15,
  FRAME2,
  FRAME3,
  FRAME4,
  FRAME5,
  FRAME6,
  FRAME7,
  FRAME8,
  FRAME9,
  IMAGE1,
  IMAGE2,
  IMAGE3,
  IMAGE4,
  IMAGE5,
  IMAGE6,
  IMAGE7,
  INSTA,
  LOGO,
  TELEGRAM,
  WHATSAPP
} from "@/config/local";
import { convertToPersianNumber } from "@/lib/utils";
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
        <div className="absolute grid grid-cols-3 bg-foreground place-content-center  shadow-3xl drop-shadow-md right-10  -bottom-15 w-150 h-40 rounded-4xl p-7">
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
      <div className=" grid grid-cols-2 w-fill h-100 m-15  place-content-center place-items-center">
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
      <div className="place-content-center place-items-center">
        <Title className="text-primary" title={"نمای کلی"} />
        <div className="grid grid-cols-4 gap-10 m-10">
          <GroupeComponents title={"استخدام و کاریابی"} icon={FRAME4} />
          <GroupeComponents title={"متخصصین صنعت"} icon={FRAME5} />
          <GroupeComponents title={"کارخانجات و صنعت"} icon={FRAME6} />
          <GroupeComponents title={"شرکت‌های خدماتی"} icon={FRAME7} />
        </div>
      </div>
      <div className="place-items-center place-content-center ">
        <div className="place-items-center place-content-center space-y-5">
          <Title className="text-primary" title={"چرا ما را انتخاب کنید؟"} />
          <SubTitle className="text-popover-foreground text-4xl" title={"چرا ما بهترین انتخاب شما هستیم"} />
          <CustomText className="text-muted text-2xl" title={"که با همکاری نزدیک با شرکا و مشتریان ما توسعه یافته است، دانش صنعت، دهه ها تجربه، نبوغ و سازگاری را برای ارائه برتری به مشتریان خود ترکیب می کند."} />
        </div>
        <div className="m-5 grid grid-cols-3 gap-5">
          <CoustomRectangle title={"راه حل های نوآوری"} Bold={"۸۰۰۰+ پروژه‌های انجام شده"} icon={FRAME8} width={70} height={70} />
          <Image src={IMAGE1} alt={"s"} width={320} height={325} />
          <CoustomRectangle title={"راه حل های نوآوری"} Bold={"۸۰۰۰+ پروژه‌های انجام شده"} icon={FRAME10} width={85} height={85} />
          <Image src={IMAGE2} alt={""} width={320} height={325} />
          <CoustomRectangle title={"راه حل های نوآوری"} Bold={"۸۰۰۰+ پروژه‌های انجام شده"} icon={FRAME9} width={85} height={85} />
          <Image src={IMAGE3} alt={""} width={320} height={325} />
        </div>
      </div>
      <div className="place-items-center place-content-center m-20">
        <div className="bg-popover w-258 h-85 place-items-center place-content-center relative">
          <Image className="float-right" src={IMAGE4} alt={""} width={360} height={55} />
          <div className=" place-content-center h-full w-160 space-y-10 left-0  place-items-center absolute">
            <Title className="text-primary right-0 absolute" title={"ارتباط باما"} />
            <div className="grid grid-cols-2 place-items-start place-content-start gap-x-5 gap-y-10 ">
              <div className="space-x-3.5 ">
                <Image className="" src={FRAME11} alt={""} width={50} height={50} />
                <Title className="text-primary" title={"با ما تماس بگیرید"} />
                <Title className="text-primary" title={convertToPersianNumber("09131311313")} />
              </div>
              <div className="space-x-3.5 ">
                <Image className="float-right" src={FRAME12} alt={""} width={50} height={50} />
                <Title className="text-primary" title={"ایمیل"} />
                <Title className="text-primary" title={"info@dideh-ban.ir"} />
              </div>
              <div className="space-x-3.5 ">
                <Image className="float-right" src={FRAME13} alt={""} width={50} height={50} />
                <Title className="text-primary" title={"با ما تماس بگیرید"} />
                <Title className="text-primary" title={"دفتر مرکزی: اصفهان، نجف آباد، اتاق بازرگانی"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="place-items-center place-content-center m-40">
        <div className="bg-muted/30 w-250 h-90 place-items-center place-content-center rounded-2xl relative">
          <div className="bg-white w-65 rounded-b-[67px] place-content-center place-items-center p-5 absolute top-0">
            <Image className="absolute top-0" src={LOGO} alt={""} width={50} height={50} />
            <Title className="text-popover-foreground text-2xl mt-5" title={"افتخارات همکاری"} />
            <SubTitle className="text-muted text-2xl" title={"Partnership honor"} />
          </div>
          <div className="grid grid-cols-4 absolute">
            <CoustomRectangle2 icon={IMAGE5} icon2={IMAGE6} width={100} height={100} width2={120} height2={120} />
            <CoustomRectangle2 icon={IMAGE5} icon2={IMAGE6} width={100} height={100} width2={120} height2={120} />
            <CoustomRectangle2 icon={IMAGE5} icon2={IMAGE6} width={100} height={100} width2={120} height2={120} />
            <CoustomRectangle2 icon={IMAGE5} icon2={IMAGE6} width={100} height={100} width2={120} height2={120} />
          </div>
        </div>
      </div>
      <div className="bg-popover w-full h-160 relative">
        <div className="relative">
          <div className="w-250 h-129 relative">
            <Image src={IMAGE7} alt={""} width={1000} height={50} />
            <div className="inset-0 absolute bg-black/60 rounded-bl-[50px]"></div>
            <div className="absolute top-0 right-5  grid grid-cols-3">
              <div>
                <div className=" place-self-start rounded-[26px] absolute top-5  bg-primary w-24 h-21.25"></div>
                <CustomText className="text-gray-300 text-2xl mt-35" title={"ساخت سازه‌هایی که مادام‌العمر دوام می‌آورند، نیازمند رویکردی کل‌نگر است که مواد پیشرفته، طراحی انعطاف‌پذیر، نگهداری منظم و شیوه‌های پایداری را ادغام می‌کند. با یادگیری از نمونه های تاریخی و بهره گیری از تکنولوژی مدرن"} />
              </div>
              <div className="m-15 place-items-center ">
                <div className="relative place-content-center place-items-center">
                  <Image src={FRAME14} alt={""} width={24} height={24} className=" float-right" />
                  <Title title={"دسترسی سریع"} />

                  <div className="my-15 ">
                    <p className="p-2">خانه</p>
                    <p className="p-2">پروژه‌ها</p>
                    <p className="p-2">درباره ما</p>
                    <p className="p-2">ارتباط باما</p>
                  </div>
                </div>

              </div>
              <div className="m-15 place-items-center ">
                <div className="relative place-content-center place-items-center">
                  <Image src={FRAME15} alt={""} width={24} height={24} className=" float-right" />
                  <Title title={"ما را در شبکه‌های اجتماعی دنبال کنید"} />

                  <div className="my-15 space-y-5">
                    <div className="bg-white w-40 rounded-t-xl h-10 place-content-center place-items-center p-2">
                      <Image src={INSTA} alt={""} width={30} height={30} className="float-right" />
                      <Title className="text-primary" title={"Instagram"} />
                    </div>
                    <div className="bg-white w-40  h-10 place-content-center place-items-center p-2">
                      <Image src={TELEGRAM} alt={""} width={30} height={30} className="float-right" />
                      <Title className="text-primary" title={"Telegram"} />
                    </div>
                    <div className="bg-white w-40 rounded-b-xl h-10 place-content-center place-items-center p-2">
                      <Image src={WHATSAPP} alt={""} width={30} height={30} className="float-right" />
                      <Title className="text-primary" title={"Whatsapp"} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>



        <div></div>
      </div>
    </div>
  );
}
