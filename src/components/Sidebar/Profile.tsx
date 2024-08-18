import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className=" grid  items-center gap-3  grid-cols-profile">
      <Image
        width={18}
        height={18}
        src="https://github.com/marcelllombm.png"
        alt=""
        className="w-10 h-10 rounded-full mt-2"
      />
      <div className="flex  flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Marcelo Borges
        </span>
        <span className=" truncate text-sm text-zinc-500">
          melombm@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
