```tsx
"use client";

import { useEffect, useRef, useState } from "react";
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
   THEME
========================================================= */

const THEME = {
  cream: "#FBF5EF",
  creamDark: "#F3E5DA",
  blush: "#EED6D1",
  blushLight: "#F7E9E5",
  roseGold: "#B76E79",
  roseGoldLight: "#D8A0A8",
  roseGoldDark: "#8F4F5A",
  text: "#4A3035",
  burgundy: "#633A43",
  white: "#FFFFFF",
};

/* =========================================================
   CONSTANTS
========================================================= */

const WEDDING_DATE = new Date(
  "2026-11-12T18:00:00+05:30"
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
    map:
      "https://www.google.com/maps/search/?api=1&query=210%20Jaggi%20Colony%20Phase-3%20Jaggi%20Colony%20Ambala%20City",
    description:
      "An evening of prayers, blessings and togetherness as we begin our wedding celebrations.",
  },
  {
    date: "31 OCTOBER 2026",
    title: "Engagement",
    time: "7:00 PM onwards",
    location: "The Glen Manor · Ambala City",
    map:
      "https://maps.app.goo.gl/sKmhU2aUPT4GBNPM7",
    description:
      "An evening of love, laughter and celebration as we officially begin this beautiful journey together.",
  },
  {
    date: "10 NOVEMBER 2026",
    title: "Haldi · Mehndi · DJ · Ladies Sangeet",
    location: "Our Home · Ambala City",
    map:
      "https://www.google.com/maps/search/?api=1&query=Ambala%20City%20Haryana",
    description:
      "A day filled with colour, music, dance and all the people who make our lives special.",
  },
  {
    date: "12 NOVEMBER 2026",
    title: "The Wedding",
    location: "Kamal White House · Pathankot",
    map:
      "https://share.google/dW1Nnjn30UPZdNYky",
    description:
      "The day our forever begins. We cannot wait to celebrate this beautiful moment with you.",
  },
];

const brideEvents: WeddingEvent[] = [
  {
    date: "10 NOVEMBER 2026",
    title: "Haldi · Mehndi · Ladies Sangeet",
    location: "Our Home · Ambala City",
    map:
      "https://www.google.com/maps/search/?api=1&query=Ambala%20City%20Haryana",
    description:
      "A beautiful day of colours, mehndi, music, dance and celebrations with our loved ones.",
  },
  {
    date: "11 NOVEMBER 2026",
    title: "Departure",
    location: "Ambala → Pathankot",
    map:
      "https://www.google.com/maps/search/?api=1&query=Pathankot%20Punjab",
    description:
      "The journey towards the most beautiful day begins.",
  },
  {
    date: "12 NOVEMBER 2026",
    title: "The Wedding",
    location: "Kamal White House · Pathankot",
    map:
      "https://share.google/dW1Nnjn30UPZdNYky",
    description:
      "The day our forever begins.",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    src:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding celebration",
  },
  {
    src:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding couple",
  },
  {
    src:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90",
    alt: "Wedding flowers",
  },
  {
    src:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90",
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
        0
      );

      setTime({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
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
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
      {Object.entries(time).map(
        ([label, value]) => (
          <div
            key={label}
            className="border border-[#d8a0a8]/40 bg-white/10 px-2 py-4 sm:px-6 sm:py-6 backdrop-blur-sm"
          >
            <div
              className="font-display text-3xl sm:text-5xl"
              style={{ color: THEME.roseGoldLight }}
            >
              {String(value).padStart(2, "0")}
            </div>

            <div className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/60 mt-2">
              {label}
            </div>
          </div>
        )
      )}
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
      <p
        className="text-[10px] tracking-[0.4em] uppercase mb-4"
        style={{ color: THEME.roseGold }}
      >
        {eyebrow}
      </p>

      <h2
        className="font-display text-5xl sm:text-6xl"
        style={{ color: THEME.text }}
      >
        {title}
      </h2>

      <div
        className="w-16 h-px mx-auto mt-5"
        style={{ backgroundColor: THEME.roseGold }}
      />
    </div>
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

  const [opening, setOpening] = useState(false);

  const handleReveal = () => {
    if (opening || !selectedSide) return;

    const side = selectedSide;

    setOpening(true);

    window.setTimeout(() => {
      onOpen(side);
    }, 1700);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ backgroundColor: THEME.cream }}
    >
      {/* CENTER BACKGROUND */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center,#fffaf7 0%,#fbf5ef 45%,#eed6d1 100%)",
        }}
      />

      {/* CENTER INVITATION */}

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: opening ? 0 : 1,
        }}
        transition={{ duration: 0.5 }}
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
            className="text-3xl mb-6"
            style={{ color: THEME.roseGold }}
          >
            ✦
          </motion.div>

          <p
            className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-semibold mt-16 sm:mt-20"
            style={{ color: THEME.text }}
          >
            With the blessings of our families
          </p>

          <h1
            className="font-display text-[65px] sm:text-[105px] leading-[0.75] mt-8"
            style={{ color: THEME.text }}
          >
            Harit

            <span
              className="block text-4xl sm:text-6xl my-6"
              style={{ color: THEME.roseGold }}
            >
              &
            </span>

            Shreya
          </h1>

          <p
            className="font-display text-xl sm:text-2xl mt-9 font-semibold"
            style={{ color: THEME.text }}
          >
            A celebration of two families
          </p>

          {/* SIDE SELECTION */}

          <div className="mt-10">

            <p
              className="text-[9px] tracking-[0.35em] uppercase mb-5 font-bold"
              style={{ color: THEME.text }}
            >
              Choose your side
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">

              <button
                type="button"
                onClick={() =>
                  setSelectedSide("groom")
                }
                className="px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all"
                style={{
                  backgroundColor:
                    selectedSide === "groom"
                      ? THEME.roseGold
                      : THEME.cream,
                  color:
                    selectedSide === "groom"
                      ? THEME.white
                      : THEME.text,
                  borderColor:
                    selectedSide === "groom"
                      ? THEME.roseGoldDark
                      : THEME.roseGold,
                }}
              >
                Groom&apos;s Side
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedSide("bride")
                }
                className="px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all"
                style={{
                  backgroundColor:
                    selectedSide === "bride"
                      ? THEME.roseGold
                      : THEME.cream,
                  color:
                    selectedSide === "bride"
                      ? THEME.white
                      : THEME.text,
                  borderColor:
                    selectedSide === "bride"
                      ? THEME.roseGoldDark
                      : THEME.roseGold,
                }}
              >
                Bride&apos;s Side
              </button>

            </div>
          </div>

          {/* REVEAL BUTTON */}

          <motion.button
            type="button"
            onClick={handleReveal}
            disabled={opening || !selectedSide}
            whileHover={{
              scale:
                opening || !selectedSide
                  ? 1
                  : 1.04,
            }}
            whileTap={{
              scale:
                opening || !selectedSide
                  ? 1
                  : 0.96,
            }}
            className="mt-9 px-10 py-4 text-white border text-[10px] tracking-[0.35em] uppercase shadow-lg disabled:opacity-50"
            style={{
              backgroundColor: THEME.roseGold,
              borderColor: THEME.roseGold,
            }}
          >
            {opening
              ? "Opening..."
              : "Tap to Reveal"}
          </motion.button>

          <p
            className="text-[8px] tracking-[0.3em] uppercase mt-4"
            style={{ color: `${THEME.text}55` }}
          >
            Your celebration awaits
          </p>

        </div>
      </motion.div>

      {/* LEFT CURTAIN */}

      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: opening ? "-102%" : "0%",
        }}
        transition={{
          duration: 1.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,#9b5662 0%,#b76e79 22%,#d8a0a8 48%,#b76e79 72%,#8f4f5a 100%)",
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
                "linear-gradient(90deg,rgba(80,30,40,.22),rgba(255,255,255,.18),rgba(80,30,40,.22))",
              filter: "blur(0.5px)",
            }}
          />
        ))}

        <div
          className="absolute right-0 top-0 bottom-0 w-[4px]"
          style={{
            backgroundColor: THEME.roseGoldLight,
          }}
        />

        <div
          className="absolute right-[4px] top-0 bottom-0 w-px"
          style={{
            backgroundColor: "rgba(255,245,240,.6)",
          }}
        />
      </motion.div>

      {/* RIGHT CURTAIN */}

      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: opening ? "102%" : "0%",
        }}
        transition={{
          duration: 1.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg,#9b5662 0%,#b76e79 22%,#d8a0a8 48%,#b76e79 72%,#8f4f5a 100%)",
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
                "linear-gradient(90deg,rgba(80,30,40,.22),rgba(255,255,255,.18),rgba(80,30,40,.22))",
              filter: "blur(0.5px)",
            }}
          />
        ))}

        <div
          className="absolute left-0 top-0 bottom-0 w-[4px]"
          style={{
            backgroundColor: THEME.roseGoldLight,
          }}
        />

        <div
          className="absolute left-[4px] top-0 bottom-0 w-px"
          style={{
            backgroundColor: "rgba(255,245,240,.6)",
          }}
        />
      </motion.div>

      {/* GOLD / ROSE GOLD TOP ROD */}

      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <div
          className="h-[5px]"
          style={{
            backgroundColor: THEME.roseGold,
          }}
        />

        <div
          className="h-[2px]"
          style={{
            backgroundColor: THEME.roseGoldLight,
          }}
        />

        <div
          className="h-[4px]"
          style={{
            backgroundColor: THEME.roseGoldDark,
          }}
        />
      </div>

      {/* FRAME */}

      <div
        className="absolute inset-5 sm:inset-8 border z-40 pointer-events-none"
        style={{
          borderColor: `${THEME.roseGold}66`,
        }}
      />

      <div
        className="absolute top-7 left-7 z-40 text-xl pointer-events-none"
        style={{ color: THEME.roseGold }}
      >
        ✦
      </div>

      <div
        className="absolute top-7 right-7 z-40 text-xl pointer-events-none"
        style={{ color: THEME.roseGold }}
      >
        ✦
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-40 text-center pointer-events-none">
        <span style={{ color: THEME.roseGold }}>
          ✦
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   SCRATCH DATE REVEAL
========================================================= */

function DateReveal({
  onReveal,
}: {
  onReveal: () => void;
}) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const [revealed, setRevealed] =
    useState(false);

  const [scratching, setScratching] =
    useState(false);

  const [celebrate, setCelebrate] =
    useState(false);

  const scratchedRef = useRef(0);
  const lastPointRef =
    useRef<{ x: number; y: number } | null>(null);

  const initializeCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    const dpr =
      window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(
      0,
      0,
      rect.width,
      rect.height
    );

    gradient.addColorStop(
      0,
      THEME.roseGoldDark
    );

    gradient.addColorStop(
      0.35,
      THEME.roseGold
    );

    gradient.addColorStop(
      0.7,
      THEME.roseGoldLight
    );

    gradient.addColorStop(
      1,
      THEME.roseGoldDark
    );

    ctx.fillStyle = gradient;
    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    ctx.fillStyle =
      "rgba(255,255,255,0.16)";

    for (let i = 0; i < 160; i++) {
      const x =
        Math.random() * rect.width;

      const y =
        Math.random() * rect.height;

      ctx.beginPath();
      ctx.arc(
        x,
        y,
        Math.random() * 1.5,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.fillStyle =
      "rgba(255,255,255,0.95)";

    ctx.textAlign = "center";

    ctx.font =
      "bold 12px Arial";

    ctx.fillText(
      "SCRATCH TO REVEAL",
      rect.width / 2,
      rect.height / 2 - 5
    );

    ctx.font =
      "10px Arial";

    ctx.fillStyle =
      "rgba(255,255,255,0.75)";

    ctx.fillText(
      "Reveal our special day",
      rect.width / 2,
      rect.height / 2 + 20
    );
  };

  useEffect(() => {
    initializeCanvas();

    const handleResize = () => {
      if (!revealed) {
        initializeCanvas();
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [revealed]);

  const getPoint = (
    event:
      | React.PointerEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return null;
    }

    const rect =
      canvas.getBoundingClientRect();

    if ("touches" in event) {
      const touch =
        event.touches[0];

      if (!touch) return null;

      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const erase = (
    x: number,
    y: number
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    ctx.save();

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      25,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.restore();
  };

  const calculateScratchedPercentage = () => {
    const canvas = canvasRef.current;

    if (!canvas) return 0;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return 0;

    const imageData =
      ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

    let transparent = 0;

    const total =
      imageData.data.length / 4;

    for (
      let i = 3;
      i < imageData.data.length;
      i += 4
    ) {
      if (imageData.data[i] < 50) {
        transparent++;
      }
    }

    return (
      (transparent / total) * 100
    );
  };

  const finishReveal = () => {
    if (revealed) return;

    setRevealed(true);
    setCelebrate(true);

    window.setTimeout(() => {
      onReveal();
    }, 900);

    window.setTimeout(() => {
      setCelebrate(false);
    }, 2600);
  };

  const handleStart = (
    event:
      | React.PointerEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (revealed) return;

    setScratching(true);

    const point = getPoint(event);

    if (!point) return;

    lastPointRef.current = point;

    erase(point.x, point.y);
  };

  const handleMove = (
    event:
      | React.PointerEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!scratching || revealed) return;

    if (
      "touches" in event
    ) {
      event.preventDefault();
    }

    const point = getPoint(event);

    if (!point) return;

    const last =
      lastPointRef.current;

    if (last) {
      const distance = Math.sqrt(
        Math.pow(point.x - last.x, 2) +
          Math.pow(point.y - last.y, 2)
      );

      const steps = Math.max(
        Math.ceil(distance / 8),
        1
      );

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;

        const x =
          last.x +
          (point.x - last.x) * t;

        const y =
          last.y +
          (point.y - last.y) * t;

        erase(x, y);
      }
    } else {
      erase(point.x, point.y);
    }

    lastPointRef.current = point;

    scratchedRef.current =
      calculateScratchedPercentage();

    if (scratchedRef.current >= 55) {
      finishReveal();
    }
  };

  const handleEnd = () => {
    setScratching(false);
    lastPointRef.current = null;
  };

  return (
    <section
      className="py-24"
      style={{
        backgroundColor:
          THEME.creamDark,
      }}
    >
      <div className="max-w-3xl mx-auto px-5 text-center">

        <p
          className="text-[10px] tracking-[0.4em] uppercase"
          style={{
            color: THEME.roseGold,
          }}
        >
          A little secret
        </p>

        <h2
          className="font-display text-5xl sm:text-6xl mt-4"
          style={{
            color: THEME.text,
          }}
        >
          When is the big day?
        </h2>

        <div
          className="w-16 h-px mx-auto mt-6"
          style={{
            backgroundColor:
              THEME.roseGold,
          }}
        />

        <p
          className="text-sm mt-7"
          style={{
            color: `${THEME.text}99`,
          }}
        >
          Some dates are meant to be
          discovered.
        </p>

        <div className="mt-10 mx-auto max-w-md">

          <div
            className="relative h-52 sm:h-60 border overflow-hidden shadow-lg"
            style={{
              backgroundColor:
                THEME.cream,
              borderColor:
                `${THEME.roseGold}80`,
            }}
          >

            {/* ACTUAL DATE */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div>

                <p
                  className="text-[9px] tracking-[0.4em] uppercase"
                  style={{
                    color:
                      THEME.roseGold,
                  }}
                >
                  Save the date
                </p>

                <p
                  className="font-display text-5xl sm:text-6xl mt-5"
                  style={{
                    color: THEME.text,
                  }}
                >
                  12 November
                </p>

                <p
                  className="tracking-[0.4em] text-xs mt-3"
                  style={{
                    color:
                      `${THEME.text}99`,
                  }}
                >
                  2026
                </p>

              </div>
            </div>

            {/* SCRATCH CANVAS */}

            {!revealed && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full touch-none cursor-crosshair"
                onPointerDown={handleStart}
                onPointerMove={handleMove}
                onPointerUp={handleEnd}
                onPointerCancel={handleEnd}
                onPointerLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
              />
            )}

            {/* CELEBRATION */}

            <AnimatePresence>
              {celebrate && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.3,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                >
                  <div className="text-5xl sm:text-6xl tracking-widest">
                    🎉 ✨ 💐
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {!revealed && (
            <p
              className="mt-6 text-[10px] tracking-[0.3em] uppercase"
              style={{
                color:
                  `${THEME.text}99`,
              }}
            >
              {scratching
                ? "Keep scratching..."
                : "Scratch the card to reveal"}
            </p>
          )}

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
              className="mt-7 text-[10px] tracking-[0.3em] uppercase"
              style={{
                color:
                  THEME.roseGoldDark,
              }}
            >
              The countdown has begun
            </motion.p>
          )}

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN WEBSITE
========================================================= */

export default function WeddingSite() {
  const [invitationOpen, setInvitationOpen] =
    useState(false);

  const [selectedSide, setSelectedSide] =
    useState<Side>("groom");

  const [dateRevealed, setDateRevealed] =
    useState(false);

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
     MUSIC TOGGLE
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

  /* =======================================================
     EVENTS
  ======================================================= */

  const currentEvents =
    selectedSide === "groom"
      ? groomEvents
      : brideEvents;

  return (
    <main
      className="overflow-hidden"
      style={{
        backgroundColor: THEME.cream,
        color: THEME.text,
      }}
    >

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
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full text-white border shadow-xl flex items-center justify-center"
          style={{
            backgroundColor:
              THEME.roseGoldDark,
            borderColor:
              THEME.roseGoldLight,
          }}
        >
          {musicPlaying ? "♫" : "🔇"}
        </motion.button>
      )}

      {/* NAVIGATION */}

      <header
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur border-b"
        style={{
          backgroundColor:
            "rgba(251,245,239,.92)",
          borderColor:
            `${THEME.roseGold}20`,
        }}
      >
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          <a
            href="#home"
            className="font-display text-2xl"
            style={{
              color: THEME.text,
            }}
          >
            H{" "}
            <span
              style={{
                color: THEME.roseGold,
              }}
            >
              &
            </span>{" "}
            S
          </a>

          <div
            className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase"
            style={{
              color: THEME.text,
            }}
          >
            <a href="#story">Story</a>
            <a href="#celebrations">
              Celebrations
            </a>
            <a href="#gallery">
              Gallery
            </a>
            <a href="#family">
              Family
            </a>
            <a href="#travel">
              Travel
            </a>
            <a href="#rsvp">
              RSVP
            </a>
          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.2em] uppercase border px-5 py-2 transition"
            style={{
              borderColor: THEME.roseGoldDark,
              color: THEME.roseGoldDark,
            }}
          >
            RSVP
          </a>

        </nav>
      </header>

      {/* HERO */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
        style={{
          background:
            "radial-gradient(circle at center,#fffaf7 0%,#fbf5ef 55%,#f3e5da 100%)",
        }}
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

          <p
            className="text-[10px] tracking-[0.45em] uppercase mb-10"
            style={{
              color: THEME.roseGold,
            }}
          >
            With the blessings of our families
          </p>

          <h1
            className="font-display text-[80px] sm:text-[145px] leading-[0.75]"
            style={{
              color: THEME.text,
            }}
          >
            Harit

            <span
              className="block text-5xl sm:text-7xl my-7"
              style={{
                color: THEME.roseGold,
              }}
            >
              &
            </span>

            Shreya
          </h1>

          <p
            className="font-display text-2xl sm:text-3xl mt-12"
            style={{
              color: THEME.text,
            }}
          >
            are getting married
          </p>

          <p
            className="tracking-[0.35em] text-[10px] uppercase mt-5"
            style={{
              color: `${THEME.text}99`,
            }}
          >
            Ambala · Pathankot
          </p>

        </motion.div>
      </section>

      {/* DATE REVEAL */}

      <DateReveal
        onReveal={() => {
          setDateRevealed(true);
        }}
      />

      {/* COUNTDOWN */}

      {dateRevealed && (
        <motion.section
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="py-24 text-white"
          style={{
            background:
              "linear-gradient(135deg,#633a43,#8f4f5a,#633a43)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 text-center">

            <p
              className="text-[10px] tracking-[0.4em] uppercase mb-6"
              style={{
                color:
                  THEME.roseGoldLight,
              }}
            >
              Counting every moment
            </p>

            <h2 className="font-display text-4xl sm:text-5xl mb-10">
              Until our forever begins
            </h2>

            <Countdown />

          </div>
        </motion.section>
      )}

      {/* STORY */}

      <section
        id="story"
        className="py-24"
        style={{
          backgroundColor:
            THEME.cream,
        }}
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
            className="text-center font-display text-2xl sm:text-3xl leading-relaxed"
            style={{
              color: `${THEME.text}CC`,
            }}
          >
            <p>
              It all started with two
              people, two stories, and a
              little bit of destiny.
            </p>

            <p className="mt-7">
              From the first conversations
              to the day we decided to
              spend forever together,
              every chapter has brought
              us closer to this moment.
            </p>

            <p className="mt-7">
              And now, surrounded by
              the people we love most,
              we are ready to begin our
              next chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVENTS */}

      <section
        id="celebrations"
        className="py-24"
        style={{
          backgroundColor:
            THEME.creamDark,
        }}
      >
        <div className="max-w-6xl mx-auto px-5">

          <SectionTitle
            eyebrow={
              selectedSide === "groom"
                ? "Groom's side"
                : "Bride's side"
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
                  className="relative p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow border"
                  style={{
                    backgroundColor:
                      THEME.cream,
                    borderColor:
                      `${THEME.roseGold}55`,
                  }}
                >

                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      backgroundColor:
                        THEME.roseGold,
                    }}
                  />

                  <p
                    className="text-[10px] tracking-[0.35em]"
                    style={{
                      color:
                        THEME.roseGold,
                    }}
                  >
                    {event.date}
                  </p>

                  <h3
                    className="font-display text-3xl sm:text-4xl mt-4"
                    style={{
                      color: THEME.text,
                    }}
                  >
                    {event.title}
                  </h3>

                  {event.time && (
                    <p
                      className="text-sm mt-3"
                      style={{
                        color:
                          THEME.roseGoldDark,
                      }}
                    >
                      {event.time}
                    </p>
                  )}

                  <p
                    className="text-xs tracking-[0.16em] uppercase mt-4"
                    style={{
                      color:
                        `${THEME.text}99`,
                    }}
                  >
                    {event.location}
                  </p>

                  {event.address && (
                    <p
                      className="text-sm leading-6 mt-3"
                      style={{
                        color:
                          `${THEME.text}99`,
                      }}
                    >
                      {event.address}
                    </p>
                  )}

                  <p
                    className="mt-5 text-sm leading-7"
                    style={{
                      color:
                        `${THEME.text}B3`,
                    }}
                  >
                    {event.description}
                  </p>

                  <a
                    href={event.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase border-b pb-1"
                    style={{
                      color:
                        THEME.roseGoldDark,
                      borderColor:
                        THEME.roseGold,
                    }}
                  >
                    View location →
                  </a>

                </motion.article>
              )
            )}

          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="py-24"
        style={{
          backgroundColor:
            THEME.cream,
        }}
      >
        <div className="max-w-6xl mx-auto px-5">

          <SectionTitle
            eyebrow="Our moments"
            title="Gallery"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {gallery.map(
              (photo, index) => (
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
                  className="overflow-hidden border"
                  style={{
                    borderColor:
                      `${THEME.roseGold}30`,
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-[280px] sm:h-[410px] object-cover hover:scale-105 transition duration-700"
                  />
                </motion.div>
              )
            )}

          </div>
        </div>
      </section>

      {/* FAMILY */}

      <section
        id="family"
        className="py-24"
        style={{
          backgroundColor:
            THEME.creamDark,
        }}
      >
        <div className="max-w-5xl mx-auto px-5 text-center">

          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div
              className="border p-10"
              style={{
                borderColor:
                  `${THEME.roseGold}55`,
                backgroundColor:
                  THEME.cream,
              }}
            >

              <p
                className="text-[10px] tracking-[0.35em] uppercase"
                style={{
                  color:
                    THEME.roseGold,
                }}
              >
                The Groom
              </p>

              <h3
                className="font-display text-4xl mt-5"
                style={{
                  color: THEME.text,
                }}
              >
                Harit Sharma
              </h3>

              <p
                className="font-display text-xl mt-5"
                style={{
                  color:
                    `${THEME.text}99`,
                }}
              >
                Son of
              </p>

              <p
                className="text-sm mt-2"
                style={{
                  color: THEME.text,
                }}
              >
                Yogesh Sharma &amp; Manju
              </p>

            </div>

            <div
              className="border p-10"
              style={{
                borderColor:
                  `${THEME.roseGold}55`,
                backgroundColor:
                  THEME.cream,
              }}
            >

              <p
                className="text-[10px] tracking-[0.35em] uppercase"
                style={{
                  color:
                    THEME.roseGold,
                }}
              >
                The Bride
              </p>

              <h3
                className="font-display text-4xl mt-5"
                style={{
                  color: THEME.text,
                }}
              >
                Shreya
              </h3>

              <p
                className="font-display text-xl mt-5"
                style={{
                  color:
                    `${THEME.text}99`,
                }}
              >
                Daughter of
              </p>

              <p
                className="text-sm mt-2"
                style={{
                  color: THEME.text,
                }}
              >
                Satish Kumar &amp; Davina
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* TRAVEL */}

      <section
        id="travel"
        className="py-24"
        style={{
          backgroundColor:
            THEME.cream,
        }}
      >
        <div className="max-w-5xl mx-auto px-5">

          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div
              className="border p-9"
              style={{
                borderColor:
                  `${THEME.roseGold}55`,
                backgroundColor:
                  THEME.creamDark,
              }}
            >

              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{
                  color:
                    THEME.roseGold,
                }}
              >
                Pre-Wedding
              </p>

              <h3
                className="font-display text-4xl mt-4"
                style={{
                  color: THEME.text,
                }}
              >
                Ambala
              </h3>

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color:
                    `${THEME.text}A6`,
                }}
              >
                Our celebrations before the
                wedding will take place in
                Ambala City.
              </p>

            </div>

            <div
              className="border p-9"
              style={{
                borderColor:
                  `${THEME.roseGold}55`,
                backgroundColor:
                  THEME.creamDark,
              }}
            >

              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{
                  color:
                    THEME.roseGold,
                }}
              >
                Wedding
              </p>

              <h3
                className="font-display text-4xl mt-4"
                style={{
                  color: THEME.text,
                }}
              >
                Pathankot
              </h3>

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color:
                    `${THEME.text}A6`,
                }}
              >
                We head to Pathankot for our
                wedding celebrations.
              </p>

              <a
                href="https://share.google/dW1Nnjn30UPZdNYky"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase border-b pb-1"
                style={{
                  borderColor:
                    THEME.roseGold,
                  color:
                    THEME.roseGoldDark,
                }}
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
        className="py-24 text-white"
        style={{
          background:
            "linear-gradient(135deg,#633a43,#8f4f5a)",
        }}
      >
        <div className="max-w-2xl mx-auto px-5 text-center">

          <p
            className="text-[10px] tracking-[0.4em] uppercase"
            style={{
              color:
                THEME.roseGoldLight,
            }}
          >
            We'd love to celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div
            className="w-16 h-px mx-auto mt-6 mb-8"
            style={{
              backgroundColor:
                THEME.roseGoldLight,
            }}
          />

          <p className="text-sm leading-7 text-white/75">
            Your presence would mean the
            world to us. Please join us as we
            begin this beautiful new chapter.
          </p>

          <button
            type="button"
            className="mt-9 px-8 py-3 text-[10px] tracking-[0.3em] uppercase"
            style={{
              backgroundColor:
                THEME.cream,
              color:
                THEME.roseGoldDark,
            }}
          >
            RSVP Coming Soon
          </button>

        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="text-white text-center py-16 px-5"
        style={{
          backgroundColor:
            "#4A3035",
        }}
      >

        <p
          className="font-display text-6xl"
          style={{
            color:
              THEME.roseGoldLight,
          }}
        >
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
```
