import {appleImg, bagImg, searchImg} from "../utils";
import {navLists} from "../constants";
import {Menu} from "lucide-react";
import { useState, useRef } from "react";
import clsx from "clsx";

const NavBar = () => {

    const [menuShown, setMenuShown] = useState(false);
    const reference = useRef();

  return (
    <header className="w-full py-10 px-5 flex justify-center items-center">
        <nav className="flex items-center justify-between gap-5 lg:w-5/6 w-full" >
            <img src={appleImg} alt="apple" width={18} height={18}/>

            <div ref={reference} className={clsx("relative flex gap-5 text-center",
                {
                    "max-sm:bg-zinc-900 max-sm:small-menu max-sm:rounded-xl max-sm:border max-sm:border-zinc-700 max-sm:scale-100 max-sm:mt-5 max-sm:py-5": menuShown,
                    "max-sm:hidden": !menuShown
                    
                }
            )}>
                {
                    navLists.map((el, i) => (
                        <p key={i} className="text-sm cursor-pointer max-sm:py-5 text-custom-gray px-5 hover:text-white transition-all">
                            {el}
                        </p>
                    ))
                }
            </div>

            <span className="flex gap-7">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
                <Menu className="cursor-pointer duration-150 group hover:text-custom-gray sm:hidden" onClick={_ => {setMenuShown(!menuShown)}}/>
            </span>
        </nav>
    </header>
  )
}

export default NavBar