
import Video from "next-video";
import Image from "next/image";
import Collections from "@/components/Collections";
import videoBG from "@/videos/videoBG.mp4";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full  top-0 relative ">
      <div className="text-center items-center justify-center"> 
      <Link href={'/collections/suit-case'}>
          <Image
              src="/baner.png"
              alt="banner"
              width={1000}
              height={300}
              layout="responsive"
              className="w-screen object-cover "
            />
      </Link>

        <div className=" pt-11 font-mono leading-loose text-center flex my-8 items-center justify-center">
          <div className=" text-3xl w-[640px] h-[160] leading-normal tracking-tight ">
          ``For me, the horizon is looking to the future, letting my imagination carry me and thinking about what could happen, what the future holds - all its possibilities.``
          <br/>
          <span className=" text-lg font-extralight text-gray-500 ">Lionel Messi</span>
          </div>
        </div>
      </div>


      <Collections />
      <div >
        <div className="relative">
          <Image
            src="/vibeMach.png"
            alt="vibeMach"
            width={1000}
            height={300}
                  layout="responsive"
            className="w-screen object-cover  "
          />
          <div className="h-36 w-96    text-white text-wrap  absolute bottom-14 left-16">
            <p className="mb-3 leading-7 text-heading3-bold font-normal  ">
              Vibe Bag
            </p>
            <p className="mb-5 leading-6 tracking-normal text-base-medium font-normal ">
              Inspired by the vintage allure of the Viva-Cité bag, the Maison’s
              Vibe handbag in Monogram reimagines the compact multi-pocket
              silhouette, with two versatile straps for everyday styling.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/canoe.png"
            alt="canoe"
            width={1000}
            height={300}
            layout="responsive"
            className="w-screen  object-cover "
          />
          <div className="h-36 w-96 text-white text-wrap  absolute bottom-28 left-14">
            <p className="mb-5 leading-7 text-heading3-bold font-normal  ">
              Canoé Bag
            </p>
            <p className="mb-5 leading-6 tracking-normal text-base-medium font-norma  ">
              An ode to the Maison`s historic Cannes and Noé bags, the
              Monogram-adorned Canoé style unveils an effortless balance of
              sophistication and functionality. Featuring an interchangeable
              leather and braided chain strap, the versatile model exudes an
              everyday allure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
