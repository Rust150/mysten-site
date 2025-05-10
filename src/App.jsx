// src/App.jsx
import React, { useEffect, useState } from 'react';

export default function App() {
  const [tps, setTps] = useState(1000042);

  useEffect(() => {
    const interval = setInterval(() => {
      setTps(prev => prev + Math.floor(Math.random() * 30 + 20));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#1d81c2] text-white flex flex-col items-center p-8 space-y-12">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Mysten Labs Logo"
        className="w-40 h-40 mb-4"
      />

      {/* Hero Text */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">$MYSTEN - Team Mysten Labs<span>💥</span></h1>
        <p className="text-sm mt-2">Born from chaos, coded in uptime.</p>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300">
          Buy $MYSTEN Now
        </button>
      </div>

      {/* Meet the Team */}
<section className="text-center w-full max-w-4xl mx-auto">
  <h2 className="text-xl font-semibold mb-6">Meet the Team</h2>
  <div className="flex justify-center items-start gap-12 flex-wrap">
    {[
      {
        name: 'Evan',
        title: 'Speed Typist Extraordinaire',
        desc: 'Fingers of fury',
        sprite: '/sprites/evan.png'
      },
      {
        name: 'Sam',
        title: 'King of Calm',
        desc: 'Mainnet maestro',
        sprite: '/sprites/sam.png'
      },
      {
        name: 'Adeniyi',
        title: 'Wig Wielder of Uptime',
        desc: 'Don’t mess with the wig',
        sprite: '/sprites/adeniyi.png'
      },
    ].map(({ name, title, desc, sprite }) => (
      <div key={name} className="text-center flex-1 min-w-[200px]">
        <img
          src={sprite}
          alt={`${name} sprite`}
          className="w-24 h-24 mb-2 transition-transform hover:animate-spin-slow mx-auto"
        />
        <p className="font-bold">{name}</p>
        <p className="text-sm">{title}</p>
        <p className="text-xs text-slate-200">{desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* TPS Display */}
      <section className="text-center">
        <h2 className="text-lg font-semibold mt-12 mb-2">100% Uptime. No Copium.</h2>
        <p className="text-sm">While other chains panic, we deploy at 3AM and then take a nap.</p>
        <div className="mt-4 bg-black p-3 text-green-400 font-mono rounded">
          mainnet_status: <span className="text-white">"ALWAYS ONLINE"</span><br />
          TPS: {tps.toLocaleString()}
        </div>
      </section>

      {/* Meme Gallery */}
<section className="w-full max-w-6xl mt-16">
  <h2 className="text-xl font-semibold mb-4 text-center">Meme Gallery</h2>
  <p className="text-sm text-center mb-4">Catch ‘em all. Deploy ‘em all. Meme ‘em all.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {[1, 2, 3, 4].map(num => (
      <div key={num} className="bg-slate-900 p-2 rounded shadow text-center">
        <img
          src={`/memes/meme${num}.png`}
          alt={`meme ${num}`}
          className="w-full h-auto rounded"
        />
      </div>
    ))}
  </div>
  <p className="text-xs text-center mt-2 text-slate-200">More memes coming soon.</p>
</section>
    </main>
  );
}
