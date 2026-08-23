"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type Side = "groom" | "bride";

type WeddingEvent = {
  date: string;
  title: string;
  time?: string;
  location: string;
  address?: string;
  map: string;
  description: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

const WEDDING_DATE = new Date(
  "2026-11-12T18:00:00+05:30",
).getTime();

const MUSIC_START = 8;

/* =========================================================
   EVENTS
========================================================= */

const groomEvents: WeddingEvent[] = [
  {
    date: "25 OCTOBER 2026",
    title: "Kirtan",
    location: "Our Home · Ambala City",
    address:
      "210, Jaggi Colony, Phase-3, Jaggi Colony, Ambala City",
    map: "https://www.google.com/maps/search/?api=1&query=210%20Jaggi%20Colony%20Phase-3%20Jaggi%20Colony%20Ambala%20City",
    description:
      "An evening of prayers, blessings and togetherness as we begin our wedding celebrations.",
  },
  {
    date: "31 OCTOBER 2026",
    title: "Engagement",
    time: "7:00 PM onwards",
    location: "The Glen Manor · Ambala City",
    map: "https://maps.app.goo.gl/sKmhU2aUPT4GBNPM7",
    description:
      "An evening of love, laughter and celebration as we officially begin this beautiful journey together.",
  },
  {
    date: "10 NOVEMBER 2026",
    title: "Haldi · Mehndi · DJ · Ladies Sangeet",
    location: "Our Home · Ambala City",
    map: "https://www.google.com/maps/search/?api=1&query=Ambala%20City%20Haryana",
    description:
      "A day filled with colour, music, dance and all the people who make our lives special.",
  },
  {
    date: "12 NOVEMBER 2026",
    title: "The Wedding",
    location: "Kamal White House · Pathankot",
    map: "https://share.google/dW1Nnjn30UPZdNYky",
    description:
      "The day our forever begins. We cannot wait to celebrate this beautiful moment with you.",
  },
];

const brideEvents: WeddingEvent[] = [
  {
    date: "10 NOVEMBER 2026",
    title: "Haldi · Mehndi · Ladies Sangeet",
    location: "Our Home · Ambala City",
    map: "https://www.google.com/maps/search/?api=1&query=Ambala%20City%20Haryana",
    description:
      "A beautiful day of colours, mehndi, music, dance and celebrations with our loved ones.",
  },
  {
    date: "11 NOVEMBER 2026",
    title: "Departure",
    location: "Ambala → Pathankot",
    map: "https://www.google.com/maps/search/?api=1&query=Pathankot%20Punjab",
    description:
      "The journey towards the most beautiful day begins.",
  },
  {
    date: "12 NOVEMBER 2026",
    title: "The Wedding",
    location: "Kamal White House · Pathankot",
    map: "https://share.google/dW1Nnjn30UPZdNYky",
    description:
      "The day our forever begins.",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding couple",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding celebration",
  },
];

/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const difference = Math.max(
        WEDDING_DATE - Date.now(),
        0,
      );

      setTime({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24),
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24,
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60,
        ),
        seconds: Math.floor(
          (difference / 1000) % 60,
        ),
      });
    };

    update();

    const timer = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto">
      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="rounded-sm border border-[#c98f8f]/40 bg-white/10 px-2 py-5 sm:px-6 sm:py-7 backdrop-blur-sm"
        >
          <div className="font-display text-3xl sm:text-5xl text-[#f0c9b8]">
            {String(value).padStart(2, "0")}
          </div>

          <div className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/60 mt-2">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#b97979] mb-4">
        {eyebrow}
      </p>

      <h2 className="font-display text-5xl sm:text-6xl text-[#70464c]">
        {title}
      </h2>

      <div className="w-16 h-px bg-[#c98f8f] mx-auto mt-5" />
    </div>
  );
}

/* =========================================================
   CELEBRATION ANIMATION
========================================================= */

function CelebrationAnimation({
  show,
}: {
  show: boolean;
}) {
  const pieces = Array.from(
    { length: 28 },
    (_, index) => index,
  );

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
          {pieces.map((piece) => {
            const left = (piece * 37) % 100;
            const delay = (piece % 8) * 0.08;
            const duration = 2.8 + (piece % 5) * 0.25;

            return (
              <motion.div
                key={piece}
                initial={{
                  opacity: 0,
                  y: "100vh",
                  x: 0,
                  rotate: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [
                    "100vh",
                    "70vh",
                    "30vh",
                    "-10vh",
                  ],
                  x: [
                    0,
                    piece % 2 === 0 ? 30 : -30,
                    piece % 3 === 0 ? -50 : 50,
                    piece % 2 === 0 ? 80 : -80,
                  ],
                  rotate: [0, 90, 180, 360],
                  scale: [0.5, 1, 1, 0.8],
                }}
                transition={{
                  duration,
                  delay,
                  ease: "easeOut",
                }}
                className="absolute"
                style={{
                  left: `${left}%`,
                  top: 0,
                  width:
                    piece % 3 === 0 ? "7px" : "4px",
                  height:
                    piece % 3 === 0 ? "18px" : "10px",
                  background:
                    piece % 4 === 0
                      ? "#c98f8f"
                      : piece % 4 === 1
                        ? "#e8b9a9"
                        : piece % 4 === 2
                          ? "#b97979"
                          : "#f0d8c8",
                }}
              />
            );
          })}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1.05, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-[#b97979] text-5xl">
                ✦
              </div>

              <p className="font-display text-4xl sm:text-5xl text-[#70464c] mt-3">
                The celebration begins
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   SCRATCH CARD
========================================================= */

function ScratchCard({
  onReveal,
}: {
  onReveal: () => void;
}) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const cardRef =
    useRef<HTMLDivElement | null>(null);

  const isDrawingRef = useRef(false);
  const revealedRef = useRef(false);

  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const card = cardRef.current;

    if (!canvas || !card) return;

    const rect = card.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(
      0,
      0,
      rect.width,
      rect.height,
    );

    gradient.addColorStop(0, "#b97979");
    gradient.addColorStop(0.45, "#d9a89a");
    gradient.addColorStop(1, "#a8656b");

    ctx.fillStyle = gradient;
    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height,
    );

    /* Subtle texture */
    for (let i = 0; i < 180; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;

      ctx.fillStyle = "rgba(255,255,255,0.12)";

      ctx.beginPath();
      ctx.arc(
        x,
        y,
        Math.random() * 1.2,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }

    /* Border shine */
    ctx.strokeStyle =
      "rgba(255,255,255,0.35)";

    ctx.lineWidth = 1;

    ctx.strokeRect(
      0.5,
      0.5,
      rect.width - 1,
      rect.height - 1,
    );
  };

  useEffect(() => {
    setupCanvas();

    const resize = () => {
      if (!revealedRef.current) {
        setupCanvas();
      }
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener(
        "resize",
        resize,
      );
    };
  }, []);

  const getPoint = (
    event: PointerEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    const rect =
      canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const calculateProgress = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const sampleSize = 8;

    const imageData = ctx.getImageData(
      0,
      0,
      width,
      height,
    );

    let transparent = 0;
    let total = 0;

    for (
      let y = 0;
      y < height;
      y += sampleSize
    ) {
      for (
        let x = 0;
        x < width;
        x += sampleSize
      ) {
        const index =
          (y * width + x) * 4;

        const alpha =
          imageData.data[index + 3];

        total++;

        if (alpha < 80) {
          transparent++;
        }
      }
    }

    const percentage = Math.round(
      (transparent / total) * 100,
    );

    setProgress(percentage);

    if (
      percentage >= 48 &&
      !revealedRef.current
    ) {
      reveal();
    }
  };

  const scratch = (
    event: PointerEvent<HTMLCanvasElement>,
  ) => {
    if (revealedRef.current) return;

    const point = getPoint(event);
    const canvas = canvasRef.current;

    if (!point || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.beginPath();

    ctx.arc(
      point.x,
      point.y,
      30,
      0,
      Math.PI * 2,
    );

    ctx.fill();

    calculateProgress();
  };

  const reveal = () => {
    if (revealedRef.current) return;

    revealedRef.current = true;

    setProgress(100);
    setCelebrate(true);

    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(
          0,
          0,
          canvas.width,
          canvas.height,
        );
      }
    }

    window.setTimeout(() => {
      setRevealed(true);
      onReveal();
    }, 500);

    window.setTimeout(() => {
      setCelebrate(false);
    }, 3000);
  };

  return (
    <>
      <CelebrationAnimation show={celebrate} />

      <div
        ref={cardRef}
        className="relative mx-auto w-full max-w-xl h-64 sm:h-72 overflow-hidden rounded-sm border border-[#c98f8f]/50 bg-[#fffaf5] shadow-xl"
      >
        {/* ACTUAL DATE */}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#b97979]">
              Save the date
            </p>

            <p className="font-display text-5xl sm:text-6xl text-[#70464c] mt-5">
              12 November
            </p>

            <p className="tracking-[0.4em] text-xs text-[#70464c]/60 mt-3">
              2026
            </p>

            <div className="w-12 h-px bg-[#c98f8f] mx-auto mt-6" />

            <p className="text-[9px] tracking-[0.25em] uppercase text-[#70464c]/50 mt-5">
              Harit &amp; Shreya
            </p>
          </div>
        </div>

        {/* SCRATCH CANVAS */}

        {!revealed && (
          <canvas
            ref={canvasRef}
            onPointerDown={(event) => {
              isDrawingRef.current = true;

              event.currentTarget.setPointerCapture(
                event.pointerId,
              );

              scratch(event);
            }}
            onPointerMove={(event) => {
              if (!isDrawingRef.current) return;

              scratch(event);
            }}
            onPointerUp={() => {
              isDrawingRef.current = false;
            }}
            onPointerCancel={() => {
              isDrawingRef.current = false;
            }}
            onPointerLeave={() => {
              isDrawingRef.current = false;
            }}
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
          />
        )}

        {/* SCRATCH INSTRUCTION */}

        {!revealed && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">
                ✦
              </div>

              <p className="text-[10px] tracking-[0.35em] uppercase font-semibold">
                Scratch to reveal
              </p>

              <p className="text-xs mt-3 text-white/80">
                Reveal our special date
              </p>
            </div>
          </div>
        )}

        {/* PROGRESS */}

        {!revealed && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 pointer-events-none">
            <motion.div
              className="h-full bg-[#70464c]"
              animate={{
                width: `${progress}%`,
              }}
            />
          </div>
        )}
      </div>

      {revealed && (
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mt-7 text-[10px] tracking-[0.3em] uppercase text-[#70464c]"
        >
          The countdown has begun
        </motion.p>
      )}
    </>
  );
}

/* =========================================================
   DATE REVEAL SECTION
========================================================= */

function DateReveal({
  onReveal,
}: {
  onReveal: () => void;
}) {
  return (
    <section className="py-24 bg-[#f7e9e4]">
      <div className="max-w-4xl mx-auto px-5">
        <SectionTitle
          eyebrow="A little secret"
          title="When is the big day?"
        />

        <p className="text-sm text-center text-[#70464c]/60 mb-10">
          Some dates are meant to be discovered.
        </p>

        <ScratchCard onReveal={onReveal} />
      </div>
    </section>
  );
}

/* =========================================================
   OPENING CURTAIN
========================================================= */

function OpeningCurtain({
  onOpen,
}: {
  onOpen: (side: Side) => void;
}) {
  const [selectedSide, setSelectedSide] =
    useState<Side | null>(null);

  const [opening, setOpening] =
    useState(false);

  const handleReveal = () => {
    if (
      opening ||
      selectedSide === null
    ) {
      return;
    }

    const side: Side = selectedSide;

    setOpening(true);

    window.setTimeout(() => {
      onOpen(side);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#fffaf5]">
      {/* CENTER CONTENT */}

      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: opening ? 0 : 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="absolute inset-0 z-30 flex items-center justify-center px-5"
      >
        <div className="text-center w-full max-w-xl">
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="text-[#b97979] text-3xl mb-8"
          >
            ✦
          </motion.div>

          <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-white font-semibold">
            You are invited
          </p>

          <div className="w-16 h-px bg-[#c98f8f] mx-auto mt-6" />

          <p className="font-display text-2xl sm:text-3xl text-white mt-8">
            To a celebration of love
          </p>

          {/* SIDE SELECTION */}

          <div className="mt-12">
            <p className="text-[9px] tracking-[0.35em] uppercase text-white/80 mb-5 font-bold">
              Choose your Team
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() =>
                  setSelectedSide("groom")
                }
                className={`px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all ${
                  selectedSide === "groom"
                    ? "bg-[#b97979] text-white border-[#b97979]"
                    : "bg-transparent border-[#b97979] text-white hover:bg-[#b97979]"
                }`}
              >
                Groom&apos;s Side
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedSide("bride")
                }
                className={`px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all ${
                  selectedSide === "bride"
                    ? "bg-[#b97979] text-white border-[#b97979]"
                    : "bg-transparent border-[#b97979] text-white hover:bg-[#b97979]"
                }`}
              >
                Bride&apos;s Side
              </button>
            </div>
          </div>

          {/* OPEN BUTTON */}

          <motion.button
            type="button"
            onClick={handleReveal}
            disabled={
              opening ||
              selectedSide === null
            }
            whileHover={{
              scale:
                opening ||
                selectedSide === null
                  ? 1
                  : 1.04,
            }}
            whileTap={{
              scale:
                opening ||
                selectedSide === null
                  ? 1
                  : 0.96,
            }}
            className="mt-9 px-10 py-4 bg-[#b97979] text-white border border-[#b97979] text-[10px] tracking-[0.35em] uppercase shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {opening
              ? "Opening..."
              : "Enter Invitation"}
          </motion.button>

          <p className="text-[8px] tracking-[0.3em] uppercase text-[#70464c]/40 mt-4">
            Your celebration awaits
          </p>
        </div>
      </motion.div>

      {/* LEFT CURTAIN */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: opening ? "-102%" : "0%",
        }}
        transition={{
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,#6d454b 0%,#9d6669 25%,#c98f8f 50%,#a96e72 75%,#70464c 100%)",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              left: `${i * 9}%`,
              width: "12%",
              background:
                "linear-gradient(90deg,rgba(0,0,0,.16),rgba(255,255,255,.12),rgba(0,0,0,.16))",
              filter: "blur(0.5px)",
            }}
          />
        ))}

        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#d9b29d]" />
      </motion.div>

      {/* RIGHT CURTAIN */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: opening ? "102%" : "0%",
        }}
        transition={{
          duration: 1.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg,#6d454b 0%,#9d6669 25%,#c98f8f 50%,#a96e72 75%,#70464c 100%)",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              right: `${i * 9}%`,
              width: "12%",
              background:
                "linear-gradient(90deg,rgba(0,0,0,.16),rgba(255,255,255,.12),rgba(0,0,0,.16))",
              filter: "blur(0.5px)",
            }}
          />
        ))}

        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#d9b29d]" />
      </motion.div>

      {/* TOP DECOR */}

      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="h-[3px] bg-[#b97979]" />
        <div className="h-[2px] bg-[#e4c2b4]" />
      </div>

      {/* FRAME */}

      <div className="absolute inset-5 sm:inset-8 border border-[#c98f8f]/40 z-40 pointer-events-none" />

      <div className="absolute top-7 left-7 z-40 text-[#b97979] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute top-7 right-7 z-40 text-[#b97979] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-40 text-center pointer-events-none">
        <span className="text-[#b97979]">
          ✦
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN WEBSITE
========================================================= */

export default function WeddingSite() {
  const [invitationOpen, setInvitationOpen] =
    useState(false);

  const [selectedSide, setSelectedSide] =
    useState<Side | null>(null);

  const [musicPlaying, setMusicPlaying] =
    useState(false);

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  /* =======================================================
     OPEN INVITATION
  ======================================================= */

  const openInvitation = (side: Side) => {
    setSelectedSide(side);
    setInvitationOpen(true);

    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = MUSIC_START;
    audio.volume = 0.35;

    audio
      .play()
      .then(() => {
        setMusicPlaying(true);
      })
      .catch(() => {
        setMusicPlaying(false);
      });
  };

  /* =======================================================
     MUSIC
  ======================================================= */

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => {
        setMusicPlaying(true);
      })
      .catch(() => {});
  };

  const currentEvents =
    selectedSide === "bride"
      ? brideEvents
      : groomEvents;

  return (
    <main className="overflow-hidden bg-[#fdf7f4]">
      {/* AUDIO */}

      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        preload="auto"
        loop
      />

      {/* OPENING */}

      <AnimatePresence>
        {!invitationOpen && (
          <OpeningCurtain
            onOpen={openInvitation}
          />
        )}
      </AnimatePresence>

      {/* MUSIC BUTTON */}

      {invitationOpen && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          onClick={toggleMusic}
          aria-label="Toggle music"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#70464c] text-white border border-[#d9b29d] shadow-xl flex items-center justify-center"
        >
          {musicPlaying ? "♫" : "🔇"}
        </motion.button>
      )}

      {/* NAVIGATION */}

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#fffaf5]/90 backdrop-blur border-b border-[#70464c]/10">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-2xl text-[#70464c]"
          >
            H{" "}
            <span className="text-[#b97979]">
              &
            </span>{" "}
            S
          </a>

          <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase text-[#70464c]">
            <a
              href="#story"
              className="hover:text-[#b97979] transition"
            >
              Story
            </a>

            <a
              href="#celebrations"
              className="hover:text-[#b97979] transition"
            >
              Celebrations
            </a>

            <a
              href="#gallery"
              className="hover:text-[#b97979] transition"
            >
              Gallery
            </a>

            <a
              href="#family"
              className="hover:text-[#b97979] transition"
            >
              Family
            </a>

            <a
              href="#travel"
              className="hover:text-[#b97979] transition"
            >
              Travel
            </a>

            <a
              href="#rsvp"
              className="hover:text-[#b97979] transition"
            >
              RSVP
            </a>
          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.2em] uppercase border border-[#70464c] px-5 py-2 text-[#70464c] hover:bg-[#70464c] hover:text-white transition"
          >
            RSVP
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 bg-[#fffaf5]"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center px-5"
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-[#b97979] mb-10">
            With the blessings of our families
          </p>

          <h1 className="font-display text-[72px] sm:text-[145px] leading-[0.75] text-[#70464c]">
            Harit

            <span className="block text-5xl sm:text-7xl my-7 text-[#b97979]">
              &
            </span>

            Shreya
          </h1>

          <p className="font-display text-2xl sm:text-3xl mt-12 text-[#70464c]">
            are getting married
          </p>

          <p className="tracking-[0.35em] text-[10px] uppercase text-[#70464c]/60 mt-5">
            Ambala · Pathankot
          </p>

          <div className="w-16 h-px bg-[#c98f8f] mx-auto mt-8" />

          <p className="text-[10px] tracking-[0.3em] uppercase text-[#70464c]/50 mt-6">
            12 November 2026
          </p>
        </motion.div>
      </section>

      {/* DATE REVEAL */}

      <DateReveal onReveal={() => {}} />

      {/* COUNTDOWN */}

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="py-24 bg-[#70464c] text-white"
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#e8b9a9] mb-6">
            Counting every moment
          </p>

          <h2 className="font-display text-4xl sm:text-5xl mb-10">
            Until our forever begins
          </h2>

          <Countdown />
        </div>
      </motion.section>

      {/* STORY */}

      <section
        id="story"
        className="py-24 bg-[#fffaf5]"
      >
        <div className="max-w-4xl mx-auto px-5">
          <SectionTitle
            eyebrow="A little bit of us"
            title="Our Story"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-[#70464c]/80"
          >
            <p>
              It all started with two people, two
              stories, and a little bit of destiny.
            </p>

            <p className="mt-7">
              From the first conversations to the day
              we decided to spend forever together,
              every chapter has brought us closer to
              this moment.
            </p>

            <p className="mt-7">
              And now, surrounded by the people we
              love most, we are ready to begin our next
              chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CELEBRATIONS */}

      <section
        id="celebrations"
        className="py-24 bg-[#f7e9e4]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <SectionTitle
            eyebrow={
              selectedSide === "bride"
                ? "Team Bride"
                : "Team Groom"
            }
            title="The Celebrations"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {currentEvents.map(
              (event, index) => (
                <motion.article
                  key={`${event.title}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="relative bg-[#fffaf5] border border-[#c98f8f]/40 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#b97979]" />

                  <p className="text-[10px] tracking-[0.35em] text-[#b97979]">
                    {event.date}
                  </p>

                  <h3 className="font-display text-3xl sm:text-4xl text-[#70464c] mt-4">
                    {event.title}
                  </h3>

                  {event.time && (
                    <p className="text-sm text-[#b97979] mt-3">
                      {event.time}
                    </p>
                  )}

                  <p className="text-xs tracking-[0.16em] uppercase text-[#70464c]/60 mt-4">
                    {event.location}
                  </p>

                  {event.address && (
                    <p className="text-sm leading-6 text-[#70464c]/60 mt-3">
                      {event.address}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-7 text-[#70464c]/70">
                    {event.description}
                  </p>

                  <a
                    href={event.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase text-[#70464c] border-b border-[#c98f8f] pb-1"
                  >
                    View location →
                  </a>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="py-24 bg-[#fffaf5]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <SectionTitle
            eyebrow="Our moments"
            title="Gallery"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-[280px] sm:h-[410px] object-cover hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}

      <section
        id="family"
        className="py-24 bg-[#f7e9e4]"
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">
            <div className="border border-[#c98f8f]/40 bg-[#fffaf5] p-10">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b97979]">
                The Groom
              </p>

              <h3 className="font-display text-4xl text-[#70464c] mt-5">
                Harit Sharma
              </h3>

              <p className="font-display text-xl text-[#70464c]/60 mt-5">
                Son of
              </p>

              <p className="text-sm mt-2 text-[#70464c]">
                Yogesh Sharma &amp; Manju
              </p>
            </div>

            <div className="border border-[#c98f8f]/40 bg-[#fffaf5] p-10">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b97979]">
                The Bride
              </p>

              <h3 className="font-display text-4xl text-[#70464c] mt-5">
                Shreya
              </h3>

              <p className="font-display text-xl text-[#70464c]/60 mt-5">
                Daughter of
              </p>

              <p className="text-sm mt-2 text-[#70464c]">
                Satish Kumar &amp; Davina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL */}

      <section
        id="travel"
        className="py-24 bg-[#fffaf5]"
      >
        <div className="max-w-5xl mx-auto px-5">
          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">
            <div className="border border-[#c98f8f]/40 p-9 bg-[#f7e9e4]/50">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b97979]">
                Pre-Wedding
              </p>

              <h3 className="font-display text-4xl text-[#70464c] mt-4">
                Ambala
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#70464c]/65">
                Our celebrations before the wedding
                will take place in Ambala City.
              </p>
            </div>

            <div className="border border-[#c98f8f]/40 p-9 bg-[#f7e9e4]/50">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b97979]">
                Wedding
              </p>

              <h3 className="font-display text-4xl text-[#70464c] mt-4">
                Pathankot
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#70464c]/65">
                We head to Pathankot for our wedding
                celebrations.
              </p>

              <a
                href="https://share.google/dW1Nnjn30UPZdNYky"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase border-b border-[#c98f8f] pb-1 text-[#70464c]"
              >
                Wedding venue →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}

      <section
        id="rsvp"
        className="py-24 bg-[#70464c] text-white"
      >
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#e8b9a9]">
            We&apos;d love to celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div className="w-16 h-px bg-[#d9b29d] mx-auto mt-6 mb-8" />

          <p className="text-sm leading-7 text-white/70">
            Your presence would mean the world to
            us. Please join us as we begin this
            beautiful new chapter.
          </p>

          <button
            type="button"
            className="mt-9 bg-[#fffaf5] text-[#70464c] px-8 py-3 text-[10px] tracking-[0.3em] uppercase"
          >
            RSVP Coming Soon
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#503238] text-white text-center py-16 px-5">
        <p className="font-display text-6xl text-[#e8b9a9]">
          H{" "}
          <span className="text-white">
            &
          </span>{" "}
          S
        </p>

        <p className="font-display text-3xl mt-4">
          Harit &amp; Shreya
        </p>

        <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mt-5">
          Our Wedding · Pathankot
        </p>

        <p className="text-xs text-white/30 mt-10">
          Made with love.
        </p>
      </footer>
    </main>
  );
}