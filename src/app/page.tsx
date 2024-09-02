import Logo from "@/images/logo";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex-col space-y-16">
      <div className="border-b-8 border-slate-600/40">
        <div
          style={{
            backgroundImage:
              "url('https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/b58e6c17-4d27-47fc-9c33-8e37ba189859/NL-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
          }}
          className="bg-cover bg-center bg-gradient-t from-black via-black/70 to-trasparent"
        >
          <Header>
            <button className="text-lg text-clip rounded-md px-[70px] py-1 ring-slate-500 ring-1  ">
              Hi
            </button>
            <button className="text-sm rounded-md px-4 py-2 bg-red-600 text-nowrap">
              Sign In
            </button>
          </Header>
          <div className="pt-[10%] pb-[12.5%] flex justify-center space-y-2  px-12">
            <div className="flex-row-reverse justify-center space-y-4">
              <div className="text-[400%] font-bold text-center">
                Unlimited films, TV programmes and more
              </div>

              <div className="text-[125%] text-center">
                Watch anywhere. Cancel at any time.
              </div>
              <div className="text-[125%] text-center pt-3">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>

              <div className="relative flex justify-center">
                <div className="flex space-x-2 absolute">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline-none ring-1 ring-slate-600 bg-slate-500/10 py-4 pr-24 px-8 w-full rounded-md"
                  ></input>
                  <button className="text-xl placeholder:font-semibold rounded-md px-8 py-2 font-bold bg-red-600 text-nowrap">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-8 border-slate-600/40 pb-16 px-12 lg:flex justify-center items-center">
        <div className="text-center mb-4 space-y-3 w-full">
          <div className="font-bold text-[400%]">Enjoy on your TV</div>
          <div className="text-[125%] text">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>

        <div className="flex justify-center w-full">
          <img
            className=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
        </div>
      </div>

      <div className="border-b-8 border-slate-600/40 pb-16 px-12 lg:flex lg:flex-row-reverse justify-evenly items-center">
        <div className="text-center mb-4 space-y-3 w-full">
          <div className="font-bold text-[400%] ">
            Download your programmes to watch offline
          </div>
          <div className="tetx-[125%]">
            Save your favourites easily and always have something to watch.
          </div>
        </div>

        <div className="flex justify-center w-full relative">
          <img
            className="max-w-full h-auto"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          ></img>
          {/* <div className=" max-w-full min-w-[40%] py-4 ring-1 h-[14%]  ring-slate-600 bg-black absolute rounded-md translate-y-[375px]"></div> */}
        </div>
      </div>

      <div className="lg:flex items-center justify-evenly border-b-8 border-slate-600/40 pb-16 px-12">
        <div className="text-center mb-4 space-y-3 w-full">
          <div className="font-bold text-[400%] ">Watch everywhere</div>
          <div className="text-[125%]">
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV.
          </div>
        </div>

        <div className="flex justify-evenly w-full relative">
          <img
            className="max-w-full h-auto"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          ></img>
        </div>
      </div>

      <div className="border-b-8 lg:flex lg:flex-row-reverse justify-evenly items-center border-slate-600/40 pb-16 px-12">
        <div className="text-center mb-4 space-y-3 w-full text-wrap">
          <div className="font-bold text-[400%] ">
            Create profiles for children
          </div>
          <div className="text-[125%]">
            Send children on adventures with their favourite characters in a
            space made just for them – free with your membership.
          </div>
        </div>
        <div className="flex justify-evenly w-full relative">
          <img
            className="max-w-full h-auto"
            src="https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          ></img>
        </div>
      </div>

      <div className="border-b-8 border-slate-600/40 pb-16 px-12 space-y-6">
        <div className="text-center mb-4 space-y-3 w-full text-wrap">
          <div className="font-bold text-3xl ">Frequently Asked Questions</div>
        </div>

        <div className="space-y-3">
          <div className="w-full p-5 text-lg bg-slate-800 hover:bg-slate-500/50 transition delay-[50ms]">
            What can I watch on Netflix
          </div>
          <div className="w-full p-5 text-lg bg-slate-800 hover:bg-slate-500/50 transition delay-[50ms]">
            What is Netflix?
          </div>
          <div className="w-full p-5 text-lg bg-slate-800 hover:bg-slate-500/50 transition delay-[50ms]">
            How much does Netflix cost?
          </div>
          <div className="w-full p-5 text-lg bg-slate-800 hover:bg-slate-500/50 transition delay-[50ms]">
            Where can I watch?
          </div>
          <div className="w-full p-5 text-lg bg-slate-800 hover:bg-slate-500/50 transition delay-[50ms]">
            How do I cancel?
          </div>
          <div className="w-full p-5 text-lg bg-slate-800 hover:bg-slate-500/50 transition delay-[50ms]">
            Is Netflix good for children?
          </div>
        </div>

        <div className="pb-[12.5%] flex justify-center space-y-2 px-12">
          <div className="flex-row-reverse justify-center space-y-4">
            <div className="text-lg text-center pt-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none ring-1 ring-slate-600 bg-slate-500/10 p-4 w-full rounded-md"
              ></input>
              <button className="text-xl placeholder:font-semibold rounded-md px-8 py-2 font-bold bg-red-600 text-nowrap">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
