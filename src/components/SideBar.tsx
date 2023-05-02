import { HomeIcon, Library, Search } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10 group">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Prince
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Maneskin
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Milky Chance Dude
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Hip & Hop & Rap (Eua)
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Indie
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Elliot Smith
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Rock Nacional Old
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Acoustic Rock
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Rock n Roll
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          De boas
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Oliver Tree
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Indie BR
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Pop
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Hip & Hop BR
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Sertanejo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Veigh
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Indie Rock Nacional
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Funk Hits
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Faixas do Shazam
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">
          Eletronicas
        </a>
      </nav>
    </aside>
  );
}
