import { FRAME11, FRAME14, FRAME15, IMAGE7, IMAGE8, INSTA, TELEGRAM, WHATSAPP } from "@/config/local";
import { CustomText, SubTitle, Title } from "../ui/title";
import Image from "next/image";
import { convertToPersianNumber } from "@/lib/utils";
export default function Fotter() {
    return <div className="bg-popover w-full h-160 relative mt-50 ">
        <div className="relative">
          <div className="w-250 h-130 relative">
            <Image src={IMAGE7} alt={""} width={1000} height={50} />
            <div className="inset-0 absolute bg-black/60 rounded-bl-[50px]"></div>
            <div className="absolute top-0 right-5  grid grid-cols-3">
              <div>
                <div className=" place-self-start rounded-[26px] absolute top-5  bg-primary w-24 h-21.25"></div>
                <CustomText
                  className="text-gray-300 text-2xl mt-35"
                  title={
                    "ساخت سازه‌هایی که مادام‌العمر دوام می‌آورند، نیازمند رویکردی کل‌نگر است که مواد پیشرفته، طراحی انعطاف‌پذیر، نگهداری منظم و شیوه‌های پایداری را ادغام می‌کند. با یادگیری از نمونه های تاریخی و بهره گیری از تکنولوژی مدرن"
                  }
                />
              </div>
              <div className="m-15 place-items-center ">
                <div className="relative place-content-center place-items-center">
                  <Image
                    src={FRAME14}
                    alt={""}
                    width={24}
                    height={24}
                    className=" float-right"
                  />
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
                  <Image
                    src={FRAME15}
                    alt={""}
                    width={24}
                    height={24}
                    className=" float-right"
                  />
                  <Title title={"ما را در شبکه‌های اجتماعی دنبال کنید"} />

                  <div className="my-15 space-y-5">
                    <div className="bg-white w-40 rounded-t-xl h-10 place-content-center place-items-center p-2">
                      <Image
                        src={INSTA}
                        alt={""}
                        width={30}
                        height={30}
                        className="float-right"
                      />
                      <Title className="text-primary" title={"Instagram"} />
                    </div>
                    <div className="bg-white w-40  h-10 place-content-center place-items-center p-2">
                      <Image
                        src={TELEGRAM}
                        alt={""}
                        width={30}
                        height={30}
                        className="float-right"
                      />
                      <Title className="text-primary" title={"Telegram"} />
                    </div>
                    <div className="bg-white w-40 rounded-b-xl h-10 place-content-center place-items-center p-2">
                      <Image
                        src={WHATSAPP}
                        alt={""}
                        width={30}
                        height={30}
                        className="float-right"
                      />
                      <Title className="text-primary" title={"Whatsapp"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary w-200 h-150 rounded-br-[284px] grid grid-cols-2 absolute left-0 -top-20">
          <div className="bg-primary w-150 h-150 rounded-br-[284px] place-content-center place-items-center z-10">
            <Title className="text-4xl m-5" title={"نیاز به "} />
            <Title className="text-4xl m-5" title={" راهنمایی دارید؟"} />
            <SubTitle className="text-muted text-4xl m-5" title={"?Do you need help"} />
            <div className="bg-white flex w-70 h-20 place-content-center place-items-center space-x-5 rounded-2xl m-10">
              <Title className="text-muted" title={"مشاوره"} />
              <Title className="text-popover-foreground text-2xl" title={convertToPersianNumber("۰۳۱-۴۴۴۴۴")} />
              <Image src={FRAME11} alt={""} width={50} height={50} />
            </div>
          </div>
          <div className="inset-0 absolute overflow-hidden">
            <Image src={IMAGE8} alt={""} width={660} height={300} className="float-left" />
          </div>
        </div>
      </div>
}