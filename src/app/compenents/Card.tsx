import Image from "next/image";
import Link from "next/link";

export default function Card({ scr, title }: { scr: string, title: string }) {
    return (
        <div>
            <Image src={scr} width={300} height={300} alt={""}></Image>
            <div>{title}</div>
            <div><Link href="#">Click</Link></div>
        </div>
    );
}