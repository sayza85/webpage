import Link from "next/link"
import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Page 1</h1><br/>
          < Image src="/02.png" width={600} height={600} className="mx-auto" alt="Picture1"/><br />
            <Link className="text-2xl font-bold text-center" href="/page2" >Go to Page 2</Link><br />
            <Link className="text-2xl font-bold text-center"href="/page3">Go to Page 3</Link><br/><br/><br/>
            <h2 className="text-3xl font-bold text-center">Studen ID 66162110343-1</h2>
        </div>
    );
}