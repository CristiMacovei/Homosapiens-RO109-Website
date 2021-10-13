import Navbar from "../components/Navbar";

import Image from "next/image";

import homo from "/homo.png";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* image and logo */}
      <section id="logo">
        <div className="grid grid-cols-2">
          <div className="flex flex-col col-span-1 text-center align-middle">
            <p className="my-auto text-5xl font-bold text-white">
              {" "}
              Homosapiens RO 109{" "}
            </p>
            <p className="my-auto text-2xl font-semibold text-white">
              We keep evolving TM
            </p>
          </div>
          <div className="col-span-1">
            <Image src="/homo.png" alt="" width="657" height="734"></Image>
          </div>
        </div>
      </section>

      {/* awards  */}
      <section id="awards" className="my-40">
        <div className="text-lg text-center text-white">
          <p className='text-4xl'> Our Awards </p>

          <div className="grid w-4/5 grid-cols-3 mx-auto my-3 bg-white bg-opacity-25 rounded-lg h-80">
            <div className="flex flex-col justify-center col-span-1 align-middle">
              <p className="text-center align-bottom">2018-2019 Rover Ruckus</p>
              <p className="text-center align-top"> Regional Phase </p>
            </div>

            <div className="flex justify-center col-span-1 align-middle">
              <p className="my-auto text-center">
                Finalist Alliance Award 2<sup>nd</sup> Pick
              </p>
            </div>
            <div className="flex justify-center col-span-1 align-middle">
              <p className="my-auto text-center">
                Inspire Award 1<sup>st</sup> Pick
              </p>
            </div>
          </div>

          <div className="grid w-4/5 grid-cols-3 mx-auto my-3 bg-white bg-opacity-25 rounded-lg h-80">
            <div className="flex flex-col justify-center col-span-1 align-middle">
              <p className="text-center align-bottom">2018-2019 Rover Ruckus</p>
              <p className="text-center align-top"> National Phase </p>
            </div>

            <div className="flex justify-center col-span-1 align-middle">
              <p className="my-auto text-center">
                Finalist Alliance Award 2<sup>nd</sup> Pick
              </p>
            </div>
            <div className="flex justify-center col-span-1 align-middle">
              <p className="my-auto text-center">
                Design Award 1<sup>sd</sup> Pick
              </p>
            </div>
          </div>

          <div className="grid w-4/5 grid-cols-3 mx-auto my-3 bg-white bg-opacity-25 rounded-lg h-80">
            <div className="flex flex-col justify-center col-span-1 align-middle">
              <p className="text-center align-bottom">2019-2020 Skystone</p>
            </div>

            <div className="flex justify-center col-span-2 align-middle">
              <p className="my-auto text-center">
                STEM Activity Excelence Award 3<sup>rd</sup> Pick
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="my-40">
        <div className="text-lg text-center text-white">
          <p className='text-4xl'> Our Sponsors (∅) </p>
        </div>
      </section>
      
    </>
  );
}
