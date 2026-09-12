import { CoustomRectangle3, CoustomRectangle4 } from "@/components/ui/Rectangle"
import {  CustomText, SubTitle, Title } from "@/components/ui/title"
import { FRAME11, FRAME15, FRAME41,  FRAME43, IMAGE32, IMAGE41, IMAGE42 } from "@/config/local"
import { convertToPersianNumber } from "@/lib/utils"
import Image from "next/image"
export default function Honor() {

    return (
        <div className="my-50 mx-5">
            <div>
                <Image className="float-right" src={FRAME41} alt={""} width={50} height={50} />
                <Title className="text-popover-foreground text-2xl mx-2" title={"نام شرکت"} />
            </div>
            <Image className="my-5" src={IMAGE41} alt={""} width={1980} height={900} />
            <div className=" m-5 gap-20 flex">
                <Image src={IMAGE32} alt={""} width={350} height={200} />
                <Image src={IMAGE32} alt={""} width={350} height={200} />
                <Image src={IMAGE32} alt={""} width={350} height={200} />
                <Image src={IMAGE32} alt={""} width={350} height={200} />
            </div>
            <div className="m-10 grid grid-cols-2">
                <div>
                    <CoustomRectangle3 Sub={"ایتم اول"} />
                    <CoustomRectangle3 Sub={"ایتم دوم"} />
                    <CoustomRectangle3 Sub={"ایتم سوم"} />
                </div>
                <div className="w-300 shadow-md -mr-100 h-160 border rounded-4xl">
                    <div className="flex ">
                        <CoustomRectangle4 title={"تعداد محصولات:"} Bold={convertToPersianNumber("120")} />
                        <CoustomRectangle4 title={"تعداد پرسنل: "} Bold={convertToPersianNumber("20")} />
                        <CoustomRectangle4 title={"متراژ:"} Bold={convertToPersianNumber("470")} />
                        <CoustomRectangle4 title={"اصفهان /نجف آباد"} />
                    </div>
                    <div className="m-5">
                        <CustomText className="text-popover-foreground whitespace-pre-line" title={`"باور ما در گروه ساختمانی کرمانی همواره این بوده که خانه، تنها یک محل اقامت نیست؛ خانه، جایی‌ست برای آرامش، سرمایه‌ای برای آینده و نقطه‌ای برای شروع رؤیاها. پروژه اقاقیا، با نامی برگرفته از درختی مقاوم و زیبا، نماد پایداری، لطافت و ماندگاری ا‌ست.این پروژه با ۸ طبقه و ۱۷ واحد مسکونی، در متراژهای متنوع ۹۰، ۱۲۰ و ۱۵۰ مترمربع ساخته و به صورتی طراحی شده که پاسخگوی سبک‌های مختلف زندگی باشد. موقعیت ممتاز مکانی اقاقیا، دسترسی آسان به مراکز شهری، خدمات رفاهی، مدارس و درمانگاه‌ها را فراهم کرده و آن را به یکی از مناسب‌ترین گزینه‌ها برای خرید خانه یا سرمایه‌گذاری در شهر قم بدل کرده است.در بام این ساختمان، روف گاردنی مجهز تعبیه شده که علاوه بر ایجاد فضایی سبز و آرام برای استراحت و تعامل اجتماعی، به‌عنوان عایق حرارتی طبیعی، نقش مؤثری در کاهش مصرف انرژی و افزایش بهره‌وری ساختمان خواهد داشت، مزیتی که با گذر زمان، ارزش ملک را به طرز چشمگیری افزایش می‌دهد.تمام اجزای این پروژه با دقت مهندسی، ظرافت معماری و رعایت استانداردهای روز دنیا طراحی و اجرا شده‌اند.اقاقیا با وجود امکاناتی چون هوشمند سازی ساختمان، کافه بار، آسانسورهای فوق پیشرفته، لابی من ، سیستم اطفا حریق و …. ترکیبی است از تکنولوژی،\n امنیت و رفاه که تمام هدفش ایجاد حس رضایت و آرامش برای ساکنینش است.ویژگی‌ها:`} />

                        <ul className="text-popover-foreground list-disc">
                            <li className="text-popover-foreground">تفکیک ورودی‌ها: ورودی مستقل برای بخش اداری و بخش مسکونی جهت حفظ امنیت و حریم خصوصی</li>
                            <li className="text-popover-foreground"> سیرکولاسیون جداگانه: آسانسور، راه‌پله و پارکینگ مجزا برای هر بخش.</li>
                            <li className="text-popover-foreground"> جانمایی بهینه: طبقات پایین برای کاربری اداری (دسترسی آسان مراجعین)، طبقات بالا برای مسکونی (دید، نور، آرامش).</li>
                            <li className="text-popover-foreground">نمای هماهنگ ولی تفکیک‌شده: طراحی نما به‌گونه‌ای که هویت دو کاربری در آن قابل تشخیص باشد.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-370 h-185 bg-primary rounded-3xl mx-auto relative grid grid-cols-2">
                <div className="m-10">
                    <Title className="text-xl m-5" title={"ارتباط با مدیریت عامل"} />
                    <SubTitle className="text-4xl text-popover-foreground m-5" title={"نام شرکت"} />
                    <div className="w-200 bottom-16 right-10 h-100 rounded-3xl absolute bg-white">
                        <CustomText className="text-popover-foreground m-5" title={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."} />
                        <Title className="text-popover-foreground mx-5" title={"سرکار خانم "} />
                        <SubTitle className="text-popover-foreground mx-5" title={"مدیر عامل شرکت"} />
                        <div className="flex absolute left-5 bottom-5 gap-2">
                            <Image src={FRAME15} alt={""} width={50} height={50} />
                            <Image src={FRAME11} alt={""} width={50} height={50} />
                            <Image src={FRAME43} alt={""} width={50} height={50} />

                        </div>
                    </div>
                </div>
                <div className="absolute left-20 top-50 ">
                    <Image  src={IMAGE42} alt={""} width={500} height={90}/>
                </div>
            </div>
        </div>
    )

}