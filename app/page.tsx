import Image from 'next/image'
import adian from './adian.png'
import ugly from './ugly.png'

import Page from "@/app/test/page";
import {text} from "stream/consumers";

export default function Home() {


    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image
        src={adian}
        width={500}
        height={500}
        alt="Picture of the Adian"
        />

        <Image
            src={ugly}
            width={500}
            height={500}
            alt="Picture of the Adian"
        />
        <div><h1 className={"text-2xl"}>ADIAN YOU ARE A GODDAMN DOGGY BF</h1></div>
    </main>
  )
}
