import Link from "next/link"
import Image from 'next/image';

export default function Page3() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Page 3</h1><br/>
          < Image src="/03.jpg" width={600} height={600} className="mx-auto" alt="Picture1"/>

            <Link className="text-2xl font-bold text-center"href="/page1">Go to Page 1</Link><br/>
            <Link className="text-2xl font-bold text-center"href="/page2">Go to Page 2</Link>
        </div>
    );
}