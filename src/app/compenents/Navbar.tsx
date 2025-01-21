import Link from "next/link"
const menu = [
    { name: "Home", path: "#" },
    { name: "Aboute us", path: "#" },
    { name: "Page 1", path: "/page1" },
    { name: "Page 2", path: "/page2" },
    { name: "Page 3", path: "/page3" },
]

export default function Navbar() {

    return (
        <div className="w-full h-16 bg-slate-400 sticky top-0 flex justify-between ">
            <div>
                logo
            </div>
            <ul className="flex gap-6">
                {menu.map((munu, index) => (<li key={index}><Link href={munu.path}>{munu.name}</Link></li>))}

            </ul>
        </div>
    )
}