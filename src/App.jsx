import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { LuBlend } from "react-icons/lu";
import { FaFireAlt } from "react-icons/fa";
import { TbTax } from "react-icons/tb";

function App() {
  const [copy, setCopy] = useState(false);

  return (
    <div className=" text-white">
      {/* hero  */}
      <div className=" relative h-screen w-full">
        <div className=" absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <video
              className=" w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753625716/u7122187825_Use_only_this_brown_bull_character_as_guidance._g_81a421ee-9252-42c1-87da-96ec8e95d027_2_hegy5r.mp4"
            ></video>
            <div className=" absolute inset-0 ">
              <div className=" w-full flex items-center justify-between px-5 md:px-32 py-5">
                <div className=" flex flex-col items-center">
                  <h3 className="ex text-stroke -rotate-6">MEET YOUR</h3>
                  <h3 className=" text-3xl next leading-3 text-button">MOXGANG</h3>
                  <h3 className="heading mt-1 text-sm">Powered by Solana</h3>
                </div>
                <div className=" flex gap-5">
                  <a
                    href="https://twitter.com/moxsol"
                    className=" px-2.5 py-2 bg-darkis rounded-lg -rotate-3"
                  >
                    <FaXTwitter className=" text-white" />
                  </a>
                  <a
                    href="https://discord.com/invite/moxsol"
                    className="px-2.5 py-2 bg-darkis rounded-lg rotate-1"
                  >
                    <RiUserCommunityLine className=" text-white" />
                  </a>
                  <a
                    href="https://letsbonk.fun/token/88KV6h8g5sXfZiUAfvjQxd6gxDiSmfajLmVh2x2Dbonk"
                    className=" px-4 py-2 hero bg-darkis rounded-lg"
                  >
                    BUY MOX
                  </a>
                </div>
              </div>
              <div className=" w-full h-full flex items-center justify-center">
                <div className=" flex items-center gap-4 justify-between px-5 w-80 md:w-max rounded-lg bg-darkis py-2">
                  <p className=" ex truncate">
                    88KV6h8g5sXfZiUAfvjQxd6gxDiSmfajLmVh2x2Dbonk
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "88KV6h8g5sXfZiUAfvjQxd6gxDiSmfajLmVh2x2Dbonk"
                        );
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 5000);
                      }}
                    >
                      {copy ? (
                        <MdOutlineDone className=" size-5" />
                      ) : (
                        <IoCopyOutline className=" size-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}
      {/* about  */}
      <div className=" w-full h-screen flex relative ">
        <div className=" w-1/2 h-full">
          <div className=" w-full h-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753625711/image_zf1wqi.webp')]"></div>
        </div>
        <div className=" w-1/2 h-full">
          <div className=" w-full h-full bg-cover bg-no-repeat bg-center bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753625722/image_hmwef5.png')]"></div>
        </div>
        <div className=" absolute inset-0 w-full h-full flex flex-col items-center justify-center text-stroke">
          <h1 className=" text-5xl md:text-7xl hero text-stroke">ABOUT MOX</h1>
          <p className=" w-full md:w-1/2 mt-5 text-center ex text-2xl text-zinc-200">
            MOX began as a soft-eyed bull just trying to live slow — riding his
            bike through green fields, sipping coffee by the pool, and napping
            in a goose’s nest like life owes him peace. While the world chases
            charts, MOX plays golf, tends to his crops, and occasionally
            skydives for the thrill of it. He’s not here to moon — he’s here to
            vibe. Welcome to MOX: the cozy bull of the blockchain. ☕🐂
          </p>
        </div>
      </div>
      {/* about end */}

      {/* tokenomics */}
      <div className=" relative  border-t-8 border-white h-screen w-full">
        <div className=" w-full h-full">
          <video
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753625723/u7122187825_Use_only_this_brown_bull_character_as_guidance._g_981cc6ca-8bb2-49d4-9003-519dacedaa55_2_tmcbi6.mp4"
            className=" w-full h-full object-cover"
          ></video>
        </div>
        <div className=" absolute inset-0 w-full h-full px-5 md:px-32">
          <h1 className=" text-5xl md:text-7xl hero text-stroke mt-10 text-button">
            TOKENOMICS
          </h1>
          <div className=" px-5 py-2 bg-button mt-5 border-2 border-black flex items-center gap-3 w-max rounded-full">
            <LuBlend className=" size-5 text-black" />
            <p className=" heading text-black text-xl">Supply 1B</p>
          </div>
          <div className=" px-5 py-2 bg-button mt-5 border-2 border-black flex items-center gap-3 w-max rounded-full">
            <FaFireAlt className=" size-5 text-black" />
            <p className=" heading text-black text-xl">LP Burnt 100%</p>
          </div>
          <div className=" px-5 py-2 bg-button mt-5 border-2 border-black flex items-center gap-3 w-max rounded-full">
            <TbTax className=" size-5 text-black" />
            <p className=" heading text-black text-xl">0% Fee </p>
          </div>
        </div>
      </div>
      {/* tokenomics end */}
      {/* memes  */}
      <div className=" w-full h-[50vh] md:h-screen overflow-hidden">
        <div className=" grid grid-cols-4 w-full h-full">
          <div className=" w-full h-full">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753625709/image_6_wgaagi.webp"
              className=" w-full h-full -rotate-6 object-cover scale-125"
              alt=""
            />
          </div>
          <div className=" w-full h-full ">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753625711/image_zf1wqi.webp"
              className=" w-full h-full -rotate-6 object-cover scale-110 border-l-4"
              alt=""
            />
          </div>
          <div className=" w-full h-full">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753625711/u7122187825_httpss.mj.runD1j8CPAUsbo_Use_only_this_brown_bull_bf046a69-5366-4410-93d1-fec55d2ec16c_3_ybomkv.webp"
              className=" w-full h-full -rotate-6 object-cover scale-110 border-l-4"
              alt=""
            />
          </div>
          <div className=" w-full h-full">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753625709/image_1_oyxg9t.webp"
              className=" w-full h-full -rotate-6 object-cover scale-125 border-l-4"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* memes end */}

      {/* how to buy  */}
      <div className=" w-full h-screen bg-[#8E683B] relative px-2 md:px-20">
        <div className=" absolute top-0 left-0 right-0 w-full">
          <img src="/top-cloud.png" alt="" />
        </div>
        <div className=" absolute bottom-0 left-0 right-0  w-full">
          <img src="/top-cloud.png" alt="" className=" rotate-180" />
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className=" w-full h-72 md:h-96 shadow-[4px_4px_0px_0px_#ca9823] px-5 rounded-lg bg-button border border-yellow-400 flex flex-col justify-center gap-3">
            <h1 className=" text-2xl md:text-3xl text-stroke hero text-center">
              1. Download Phantom wallet
            </h1>
            <p className=" next text-black text-center">
              Download Phantom Wallet or any Solana wallet.
            </p>
          </div>
          <div className=" w-full h-72 md:h-96 shadow-[4px_4px_0px_0px_#ca9823] px-5 rounded-lg bg-button border border-yellow-400 flex flex-col justify-center gap-3">
            <h1 className=" text-2xl md:text-3xl text-stroke hero text-center">
              2. Get SOL
            </h1>
            <p className=" next text-black text-center">
              If you don't have SOL yet, you can purchase from any CEX, and send
              it to your SOL wallet.
            </p>
          </div>
          <div className=" w-full h-72 md:h-96 shadow-[4px_4px_0px_0px_#ca9823] px-5 rounded-lg bg-button border border-yellow-400 flex flex-col justify-center gap-3">
            <h1 className=" text-2xl md:text-3xl text-stroke hero text-center">
              3. Go To Bonk
            </h1>
            <p className=" next text-black text-center">
              After you get your SOL in your wallet, you can head to Bonk.fun.
            </p>
          </div>
          <div className=" w-full h-72 md:h-96 shadow-[4px_4px_0px_0px_#ca9823] px-5 rounded-lg bg-button border border-yellow-400 flex flex-col justify-center gap-3">
            <h1 className=" text-2xl md:text-3xl text-stroke hero text-center">
              4. Swap $MOXGANG
            </h1>
            <p className=" next text-black text-center">
              Click and select $BOU token or paste the Token Contract Address
              into Bonk and swap SOL for $MOX.
            </p>
          </div>
        </div>

        <p className=" text-center text-2xl ex mt-10 md:mt-20">
          © {new Date().getFullYear()} MOX
        </p>
      </div>
      {/* how to buy end */}
    </div>
  );
}

export default App;
