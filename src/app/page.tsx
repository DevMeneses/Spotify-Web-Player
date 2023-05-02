import {
  Home as HomeIcon,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

import Image from "next/image";

import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semilbold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={80}
                alt="Capa do álbum Veigh"
              />
              <strong>Echoes, Silence, Patience & Grace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={80}
                alt="Capa do álbum Echoes, Silence, Patience & Grace da banda Foo Fighters"
              />
              <strong>Echoes, Silence, Patience & Grace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={80}
                alt="Capa do álbum Echoes, Silence, Patience & Grace da banda Foo Fighters"
              />
              <strong>Echoes, Silence, Patience & Grace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={80}
                alt="Capa do álbum Echoes, Silence, Patience & Grace da banda Foo Fighters"
              />
              <strong>Echoes, Silence, Patience & Grace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={80}
                alt="Capa do álbum Echoes, Silence, Patience & Grace da banda Foo Fighters"
              />
              <strong>Echoes, Silence, Patience & Grace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album2.jpg"
                width={104}
                height={80}
                alt="Capa do álbum Echoes, Silence, Patience & Grace da banda Foo Fighters"
              />
              <strong>Echoes, Silence, Patience & Grace</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className="font-semilbold text-2xl mt-10">
            Made for Matheus Meneses
          </h1>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Mix do dia"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, Girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Mix do dia"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, Girl in red and more
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Mix do dia"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, Girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Mix do dia"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, Girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Mix do dia"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, Girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
