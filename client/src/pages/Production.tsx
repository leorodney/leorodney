import { useState } from 'react';
import productionBG from '../assets/production.jpeg';
import Anvil from '../components/Anvil';
import Header from '../components/Header';
import Projection from '../components/Projection';
import { Prompt }  from "../interfaces/prompt";

export default function Production() {
  const PromptInterface : Prompt = { img: "", author: "", value: "" };
  const [prompt, setPrompt] = useState(PromptInterface);  
  const [status, setStatus] = useState({generating: false, publishing: false});

  return (
    <main className="h-screen w-screen flex items-center justify-center flex-col bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${productionBG})`}}>
      {/* <Header/> */}
      <section className='h-[540px] w-[75%] px-6 py-8 flex items-center gap-4 bg-gray-200 rounded-lg'>
        <Projection img={prompt.img} {...status}/>
        <Anvil prompt={prompt} setPrompt={setPrompt} setStatus={setStatus}/>
      </section>
    </main>
  )
}
