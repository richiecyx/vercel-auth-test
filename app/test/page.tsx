"use client"

import Image from 'next/image'
import {useState} from "react";
import axios from "axios";
import {white} from "next/dist/lib/picocolors";
import {text} from "stream/consumers";

export default function Page() {
    const [pubkey,setPubkey] = useState("");
    const [target,setTarget] = useState("");
    const [network,setNetwork] = useState("");
    const [teleLink,setTeleLink] = useState("");
    const [listentStatus,setListenStatus] = useState("");
    const [connectWalletStatus,setConnectWalletStatus] = useState("");

    const listen = async () => {
            try {
                let data = {pubkey: pubkey, target: target, network: network};
                console.log(pubkey)
                console.log(target)
                console.log(network)
                let response = await axios.post("https://tg-serverless-mapper-shingapo-nk1pbm6do-bryanchengs-projects.vercel.app/api/serverless", data);
                if (response.status === 200) {
                    setListenStatus("Success")
                    setTeleLink(response.data);
                }
                else{
                    setListenStatus("Failed")
                }
            } catch (error) {
                setListenStatus("Failed")
            }
        };

    const connect = async () => {
        try {
            let data = {pubkey: pubkey};
            let response = await axios.post("http://localhost:4000/explorer/test", data);
            if (response.status === 200) {
                console.log(response.status)
                setConnectWalletStatus("Successfully Connected!");
            }
            else{
                setConnectWalletStatus("Connection Unsuccessful!");
            }
        } catch (error) {
            setConnectWalletStatus("Connection Unsuccessful!");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div>
                <div><input placeholder="pubkey" className={"text-black"} onChange={(e)=>{setPubkey(e.target.value)}}/></div>
                <div><button onClick={() => connect()}>connect wallet</button></div>
                <h1>{connectWalletStatus??""}</h1>

            </div>
            <div className={"p-5"}>
                <div><input placeholder={"Pubkey"} className={"text-black"} onChange={(e)=>{setPubkey(e.target.value)}}/></div>
                <div><input placeholder={"Target"} className={"text-black"} onChange={(e)=>{setTarget(e.target.value)}}/></div>
                <div><input placeholder={"Network"} className={"text-black"} onChange={(e)=>{setNetwork(e.target.value)}}/></div>
                <div><button onClick={() => listen()}>listen</button></div>
                <h1>{listentStatus??""}</h1>
                <a href={teleLink??""}>{teleLink??""}</a>


                    </div>
                    </main>
                    )
                }
