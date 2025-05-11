import React, { useEffect, useState, useRef } from 'react';
import './App.css';

/* Image Modal */
function ImageModal({ src, onClose }) {
  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
    >
      <img src={src} alt="Preview" className="max-w-[90vw] max-h-[90vh] object-contain" />
    </div>
  );
}

/* Contract Copy Component */
function CopyContract() {
  const contract = "0xf22da9a24ad027cccb5f2d496cbe91de953d363513db08a3a734d361c7c17503::LOFI::LOFI";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center mt-6 mb-12 text-white font-mono text-lg lg:text-xl">
      <p className="mb-2">Contract Address:</p>
      <button
        onClick={handleCopy}
        className="text-green-300 hover:text-green-200 px-3 py-2 border border-green-400 rounded-md transition-all text-base lg:text-lg"
        title="Click to copy"
      >
        {contract}
      </button>
      {copied && <p className="text-sm mt-2 text-green-100">Copied to clipboard!</p>}
    </div>
  );
}

/* Hero Section */
function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1d81c2] to-[#155a8a] text-white pb-20 pt-10 relative overflow-hidden" id="top">
      <div className="floating-stars absolute inset-0 pointer-events-none z-0"></div>
      <nav className="bg-black px-12 py-6 flex justify-between items-center text-2xl font-extrabold shadow-xl z-50 sticky top-0">
        <div className="flex items-center space-x-4">
          <img src="/logo1.png" alt="Mysten Logo" className="w-12 h-12" />
          <span className="text-4xl tracking-wider">$MYSTEN</span>
        </div>
        <div className="flex space-x-10">
          <a href="#team" className="hover:text-yellow-300 transition">Team</a>
          <a href="#stickers" className="hover:text-yellow-300 transition">Stickers</a>
          <a href="#memes" className="hover:text-yellow-300 transition">Memes</a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 absolute lg:relative top-0 left-0 right-0 lg:top-auto lg:left-auto lg:right-auto">
          <img src="/logo.png" alt="Mysten Labs Logo" className="w-32 h-32 mx-auto lg:mx-0" />
          <h1 className="text-6xl font-bangers leading-tight drop-shadow-lg">TEAM MYSTEN LABS</h1>
          <p className="text-xl font-rubik text-white/90 max-w-md mx-auto lg:mx-0">
            From the creators of Sui — blazing fast, battle-tested, and always online.
          </p>
          <a href="#team" className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold px-10 py-4 rounded-xl transition shadow-lg">
            Learn More
          </a>
        </div>
        <div className="lg:w-1/2 flex justify-center relative z-0">
          <img src="/hero/team-banner.png" alt="Team Mysten Heroes" className="w-full max-w-4xl mx-auto drop-shadow-2xl lg:-mt-12 lg:ml-8" />
        </div>
      </div>
    </section>
  );
}

function TotalTransactionsDisplay() {
  const [txCount, setTxCount] = useState(null);

  useEffect(() => {
    async function fetchTotalTransactions() {
      try {
        const response = await fetch('https://fullnode.mainnet.sui.io:443', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'sui_getTotalTransactionBlocks',
            params: [],
          }),
        });

        const data = await response.json();
        const totalTx = data?.result;
        if (totalTx) {
          setTxCount(Number(totalTx));
        }
      } catch (err) {
        console.error('Failed to fetch total transactions:', err);
      }
    }

    fetchTotalTransactions();
    const interval = setInterval(fetchTotalTransactions, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 text-center overflow-hidden bg-[#1d81c2] text-white">
      {txCount && (
        <div className="absolute inset-0 flex justify-center items-center opacity-10 text-[16rem] font-extrabold text-white pointer-events-none select-none leading-none z-0">
          {txCount.toLocaleString()}
        </div>
      )}

      <div className="relative z-10">
        <h2 className="text-4xl font-bangers mb-4">Billions of Bytes. Zero Downtime.</h2>
        <p className="text-base mb-6">Mysten stays busy. Here's how much we’ve moved.</p>
        <div className="inline-block px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-left text-white shadow-lg">
          <p className="text-lg font-mono">
            total_transactions:{' '}
            <span className="text-green-400">
              {txCount?.toLocaleString() ?? 'Loading...'}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* Team Section */
function TeamSection() {
  const teams = [
    { name: 'Evan', title: 'Speed Typist Extraordinaire', desc: 'Fingers of fury', sprite: '/sprites/evan.png', bio: 'An experienced coder and visionary leader.' },
    { name: 'Sam', title: 'King of Calm', desc: 'Mainnet maestro', sprite: '/sprites/sam.png', bio: 'Strategic thinker with deep technical insights.' },
    { name: 'Adeniyi', title: 'Wig Wielder of Uptime', desc: 'Don’t mess with the wig', sprite: '/sprites/adeniyi.png', bio: 'Ensures continuous uptime and seamless performance.' },
  ];

  return (
    <section id="team" className="bg-[#155a8a] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-5xl font-bangers mb-16">Meet the Team</h2>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {teams.map(({ name, title, desc, sprite, bio }) => (
            <div key={name} className="bg-[#1d81c2] p-6 rounded-2xl shadow-lg text-center transition-transform hover:scale-105">
              <img src={sprite} alt={`${name} sprite`} className="w-28 h-28 mx-auto mb-4 transition-transform duration-500 hover:rotate-[360deg]" />
              <h3 className="text-2xl font-bangers mb-1">{name}</h3>
              <p className="text-lg italic font-semibold text-yellow-200">{title}</p>
              <p className="text-sm font-rubik mt-1">{desc}</p>
              <p className="text-xs text-slate-200 font-rubik mt-2">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* Social Links */
function SocialLinks() {
  return (
    <section className="bg-[#134f75] text-white py-12 text-center">
      <h3 className="text-3xl font-bangers mb-6">Join the Community</h3>
      <div className="flex justify-center gap-8 items-center text-white text-xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <img src="/icons/telegram.png" alt="Telegram" className="w-8 h-8" />
        </a>
        <a href="mailto:info@mystenlabs.com">
          <img src="/icons/email.png" alt="Email" className="w-8 h-8" />
        </a>
        <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/dexscreener.png" alt="Dexscreener" className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-12 text-sm">
      <p>&copy; {new Date().getFullYear()} Mysten Labs. All rights reserved.</p>
    </footer>
  );
}

function MemeGallery() {
  const memes = [1, 2, 3, 4]; // Add as many as you have
  const [index, setIndex] = useState(0);
  const [previewSrc, setPreviewSrc] = useState(null);

  const next = () => setIndex((prev) => (prev + 1) % memes.length);
  const prev = () => setIndex((prev) => (prev - 1 + memes.length) % memes.length);

  return (
    <section id="memes" className="w-full max-w-6xl mx-auto mt-14 px-1 text-center">
      <h2 className="text-5xl font-bangers mb-6">Meme Gallery</h2>
      <p className="text-sm mb-10">Catch ‘em all. Deploy ‘em all. Meme ‘em all.</p>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-black bg-opacity-40 hover:bg-opacity-70 text-white text-3xl px-4 py-2 rounded-full"
        >
          ‹
        </button>

        <img
          src={`/memes/meme${memes[index]}.png`}
          alt={`Meme ${memes[index]}`}
          className="w-full max-w-3xl h-auto rounded-xl object-contain cursor-pointer shadow-xl"
          onClick={() => setPreviewSrc(`/memes/meme${memes[index]}.png`)}
        />

        <button
          onClick={next}
          className="absolute right-0 z-10 bg-black bg-opacity-40 hover:bg-opacity-70 text-white text-3xl px-4 py-2 rounded-full"
        >
          ›
        </button>
      </div>
      <ImageModal src={previewSrc} onClose={() => setPreviewSrc(null)} />
    </section>
  );
}





/* Sticker Gallery — Centered, Clean */
function StickerGallery() {
  const rawStickers = Array.from({ length: 15 }, (_, i) => i + 1);
  const [previewSrc, setPreviewSrc] = useState(null);
  const scrollRef = useRef(null);
  const hoverZoneRef = useRef(null);
  const [hovering, setHovering] = useState(null);
  const SCROLL_SPEED = 2;

  const stickers = [...rawStickers, ...rawStickers];

  useEffect(() => {
    let animationFrame;
    const step = () => {
      if (hovering && scrollRef.current) {
        const container = scrollRef.current;
        if (hovering === 'left') {
          container.scrollLeft -= SCROLL_SPEED;
          if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 2;
          }
        } else if (hovering === 'right') {
          container.scrollLeft += SCROLL_SPEED;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hovering]);

  const handleMouseMove = (e) => {
    if (!hoverZoneRef.current) return;
    const { left, right } = hoverZoneRef.current.getBoundingClientRect();
    const padding = 100;
    if (e.clientX < left + padding) {
      setHovering('left');
    } else if (e.clientX > right - padding) {
      setHovering('right');
    } else {
      setHovering(null);
    }
  };

  return (
    <section
      id="stickers"
      className="w-full max-w-7xl mx-auto mt-24 px-4 relative"
      ref={hoverZoneRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovering(null)}
    >
      <h2 className="text-3xl font-bangers mb-4 text-center">Sticker Gallery</h2>
      <p className="text-sm text-center mb-4">Peel them. Slap them. Trade them.</p>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden py-6 justify-center"
        style={{ scrollBehavior: 'auto' }}
      >
        {stickers.map((num, i) => (
          <div
            key={`${num}-${i}`}
            className="shrink-0 w-36 h-36 flex items-center justify-center cursor-pointer"
            onClick={() => setPreviewSrc(`/stickers/sticker${num}.png`)}
          >
            <img
              src={`/stickers/sticker${num}.png`}
              alt={`Sticker ${num}`}
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
  <a
    href="https://t.me/addstickers/MystenLabs"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-sm bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-semibold transition"
  >
    View Full Sticker Set
  </a>
  <div className="mt-12 border-t border-white/20 w-full max-w-4xl mx-auto"></div>

</div>


<ImageModal src={previewSrc} onClose={() => setPreviewSrc(null)} />

      <ImageModal src={previewSrc} onClose={() => setPreviewSrc(null)} />
    </section>
  );
}

/* App Root */
export default function App() {
  const [tps, setTps] = useState(1000042);

  useEffect(() => {
    const interval = setInterval(() => {
      setTps((prev) => prev + Math.floor(Math.random() * 30 + 20));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#1d81c2] min-h-screen text-white font-sans">
      <HeroSection />
      <CopyContract />
      <TeamSection />
      <TotalTransactionsDisplay />
      <MemeGallery />
      <StickerGallery />
      <SocialLinks />
      <Footer />
    </main>
  );
}
