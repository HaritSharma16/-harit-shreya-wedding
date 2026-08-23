"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
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
   THEME
========================================================= */

const COLORS = {
  cream: "#FBF4EE",
  creamDark: "#F4E7DE",
  blush: "#F3D7D2",
  blushLight: "#F8E9E5",
  rose: "#B76E79",
  roseDark: "#7D3F4A",
  roseLight: "#D8A48F",
  champagne: "#E8C7B8",
  text: "#61343C",
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

    const timer = window.setInterval(
      update,
      1000
    );

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
            className="border border-white/20 bg-white/10 backdrop-blur px-2 py-4 sm:px-6 sm:py-6 rounded-sm"
          >
            <div className="font-display text-3xl sm:text-5xl text-white">
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
        style={{ color: COLORS.rose }}
      >
        {eyebrow}
      </p>

      <h2
        className="font-display text-5xl sm:text-6xl"
        style={{ color: COLORS.roseDark }}
      >
        {title}
      </h2>

      <div
        className="w-16 h-px mx-auto mt-5"
        style={{ backgroundColor: COLORS.rose }}
      />
    </div>
  );
}

/* =========================================================
   CELEBRATION PARTICLES
========================================================= */

function CelebrationAnimation({
  active,
}: {
  active: boolean;
}) {
  const particles = Array.from(
    { length: 42 },
    (_, index) => index
  );

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">
          {particles.map((particle) => {
            const angle =
              (particle / particles.length) *
              Math.PI *
              2;

            const distance =
              180 + (particle % 7) * 45;

            const x =
              Math.cos(angle) * distance;

            const y =
              Math.sin(angle) * distance;

            const size =
              3 + (particle % 4);

            return (
              <motion.span
                key={particle}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.3, 0.8, 0],
                  x,
                  y,
                  rotate:
                    particle * 45,
                }}
                transition={{
                  duration:
                    1.8 +
                    (particle % 5) * 0.12,
                  delay:
                    (particle % 8) * 0.025,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: size,
                  height: size,
                  background:
                    particle % 3 === 0
                      ? COLORS.rose
                      : particle % 3 === 1
                      ? COLORS.roseLight
                      : COLORS.champagne,
                  boxShadow:
                    `0 0 8px ${COLORS.roseLight}`,
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
              opacity: [0, 1, 0],
              scale: [0.7, 1.1, 1.5],
            }}
            transition={{
              duration: 1.5,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
            style={{
              border:
                `1px solid ${COLORS.roseLight}`,
              boxShadow:
                `0 0 60px ${COLORS.roseLight}`,
            }}
          />
        </div>
      )}
    </AnimatePresence>
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
    if (opening || selectedSide === null) {
      return;
    }

    const side: Side = selectedSide;

    setOpening(true);

    window.setTimeout(() => {
      onOpen(side);
    }, 1700);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        backgroundColor: COLORS.cream,
      }}
    >
      {/* CENTER */}

      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: opening ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
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
            className="text-3xl mb-5"
            style={{
              color: COLORS.rose,
            }}
          >
            ✦
          </motion.div>

          <p
            className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-semibold"
            style={{
              color: COLORS.roseDark,
            }}
          >
            With the blessings of our families
          </p>

          <h1
            className="font-display text-[65px] sm:text-[105px] leading-[0.75] mt-7"
            style={{
              color: COLORS.roseDark,
            }}
          >
            Harit

            <span
              className="block text-4xl sm:text-6xl my-6"
              style={{
                color: COLORS.rose,
              }}
            >
              &
            </span>

            Shreya
          </h1>

          <p
            className="font-display text-xl sm:text-2xl mt-9"
            style={{
              color: COLORS.roseDark,
            }}
          >
            A celebration of two families
          </p>

          {/* SIDE SELECTION */}

          <div className="mt-10">
            <p
              className="text-[9px] tracking-[0.35em] uppercase mb-5 font-bold"
              style={{
                color: COLORS.roseDark,
              }}
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
                      ? COLORS.rose
                      : COLORS.blush,
                  color:
                    selectedSide === "groom"
                      ? "#fff"
                      : COLORS.roseDark,
                  borderColor: COLORS.rose,
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
                      ? COLORS.rose
                      : COLORS.blush,
                  color:
                    selectedSide === "bride"
                      ? "#fff"
                      : COLORS.roseDark,
                  borderColor: COLORS.rose,
                }}
              >
                Bride&apos;s Side
              </button>
            </div>
          </div>

          {/* REVEAL */}

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
            className="mt-9 px-10 py-4 text-white border text-[10px] tracking-[0.35em] uppercase shadow-lg disabled:opacity-50"
            style={{
              backgroundColor: COLORS.rose,
              borderColor: COLORS.rose,
            }}
          >
            {opening
              ? "Opening..."
              : "Tap to Reveal"}
          </motion.button>

          <p
            className="text-[8px] tracking-[0.3em] uppercase mt-4"
            style={{
              color: COLORS.roseDark,
              opacity: 0.4,
            }}
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
            "linear-gradient(90deg,#6f3742 0%,#8e4b57 22%,#a95d69 48%,#874550 75%,#62303a 100%)",
        }}
      >
        {[...Array(12)].map(
          (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${i * 9}%`,
                width: "12%",
                background:
                  "linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.08),rgba(0,0,0,.18))",
                filter:
                  "blur(0.5px)",
              }}
            />
          )
        )}

        <div
          className="absolute right-0 top-0 bottom-0 w-[4px]"
          style={{
            backgroundColor:
              COLORS.roseLight,
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
            "linear-gradient(270deg,#6f3742 0%,#8e4b57 22%,#a95d69 48%,#874550 75%,#62303a 100%)",
        }}
      >
        {[...Array(12)].map(
          (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                right: `${i * 9}%`,
                width: "12%",
                background:
                  "linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.08),rgba(0,0,0,.18))",
                filter:
                  "blur(0.5px)",
              }}
            />
          )
        )}

        <div
          className="absolute left-0 top-0 bottom-0 w-[4px]"
          style={{
            backgroundColor:
              COLORS.roseLight,
          }}
        />
      </motion.div>

      {/* TOP ROD */}

      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <div
          className="h-[5px]"
          style={{
            backgroundColor:
              COLORS.rose,
          }}
        />

        <div
          className="h-[2px]"
          style={{
            backgroundColor:
              COLORS.champagne,
          }}
        />

        <div
          className="h-[4px]"
          style={{
            backgroundColor:
              COLORS.roseDark,
          }}
        />
      </div>

      {/* FRAME */}

      <div
        className="absolute inset-5 sm:inset-8 border z-40 pointer-events-none"
        style={{
          borderColor:
            "rgba(183,110,121,.4)",
        }}
      />

      <div
        className="absolute top-7 left-7 z-40 text-xl pointer-events-none"
        style={{
          color: COLORS.rose,
        }}
      >
        ✦
      </div>

      <div
        className="absolute top-7 right-7 z-40 text-xl pointer-events-none"
        style={{
          color: COLORS.rose,
        }}
      >
        ✦
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-40 text-center pointer-events-none">
        <span
          style={{
            color: COLORS.rose,
          }}
        >
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
    useRef<HTMLCanvasElement | null>(
      null
    );

  const cardRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const scratchingRef =
    useRef(false);

  const revealedRef =
    useRef(false);

  const lastPointRef =
    useRef<{
      x: number;
      y: number;
    } | null>(null);

  const [revealed, setRevealed] =
    useState(false);

  const [scratchPercent, setScratchPercent] =
    useState(0);

  const [celebration, setCelebration] =
    useState(false);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;

    if (!canvas || !card) {
      return;
    }

    const rect =
      card.getBoundingClientRect();

    const dpr =
      window.devicePixelRatio || 1;

    canvas.width =
      Math.floor(rect.width * dpr);

    canvas.height =
      Math.floor(rect.height * dpr);

    canvas.style.width =
      `${rect.width}px`;

    canvas.style.height =
      `${rect.height}px`;

    const context =
      canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

    const gradient =
      context.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

    gradient.addColorStop(
      0,
      COLORS.roseDark
    );

    gradient.addColorStop(
      0.35,
      COLORS.rose
    );

    gradient.addColorStop(
      0.65,
      COLORS.roseLight
    );

    gradient.addColorStop(
      1,
      COLORS.champagne
    );

    context.fillStyle = gradient;

    context.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    /* Decorative scratch-card texture */

    context.globalAlpha = 0.18;

    for (
      let i = 0;
      i < 140;
      i++
    ) {
      const x =
        Math.random() * rect.width;

      const y =
        Math.random() * rect.height;

      const radius =
        Math.random() * 1.7 + 0.5;

      context.beginPath();

      context.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      context.fillStyle = "#ffffff";

      context.fill();
    }

    context.globalAlpha = 1;

    /* Border shine */

    context.strokeStyle =
      "rgba(255,255,255,.35)";

    context.lineWidth = 1;

    context.strokeRect(
      0.5,
      0.5,
      rect.width - 1,
      rect.height - 1
    );

    /* Scratch instruction */

    context.fillStyle =
      "rgba(255,255,255,.95)";

    context.textAlign = "center";

    context.font =
      "600 11px Arial";

    context.fillText(
      "SCRATCH TO REVEAL",
      rect.width / 2,
      rect.height / 2 - 5
    );

    context.font =
      "10px Arial";

    context.fillStyle =
      "rgba(255,255,255,.65)";

    context.fillText(
      "Use your finger or mouse",
      rect.width / 2,
      rect.height / 2 + 18
    );
  }, []);

  useEffect(() => {
    setupCanvas();

    const handleResize = () => {
      if (!revealedRef.current) {
        setupCanvas();
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
  }, [setupCanvas]);

  const getPoint = (
    event:
      | React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return null;
    }

    const rect =
      canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const calculateScratch = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return 0;
    }

    const context =
      canvas.getContext("2d");

    if (!context) {
      return 0;
    }

    const rect =
      canvas.getBoundingClientRect();

    const sampleCanvas =
      document.createElement("canvas");

    const sampleSize = 80;

    sampleCanvas.width =
      sampleSize;

    sampleCanvas.height =
      sampleSize;

    const sampleContext =
      sampleCanvas.getContext("2d");

    if (!sampleContext) {
      return 0;
    }

    sampleContext.drawImage(
      canvas,
      0,
      0,
      rect.width,
      rect.height,
      0,
      0,
      sampleSize,
      sampleSize
    );

    const imageData =
      sampleContext.getImageData(
        0,
        0,
        sampleSize,
        sampleSize
      );

    let transparent = 0;

    for (
      let i = 3;
      i <
      imageData.data.length;
      i += 4
    ) {
      if (
        imageData.data[i] < 80
      ) {
        transparent++;
      }
    }

    return (
      (transparent /
        (sampleSize *
          sampleSize)) *
      100
    );
  };

  const reveal = () => {
    if (revealedRef.current) {
      return;
    }

    revealedRef.current = true;
    scratchingRef.current = false;

    setScratchPercent(100);
    setCelebration(true);

    const canvas = canvasRef.current;

    if (canvas) {
      const context =
        canvas.getContext("2d");

      if (context) {
        context.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    }

    setTimeout(() => {
      setRevealed(true);
      onReveal();
    }, 450);

    setTimeout(() => {
      setCelebration(false);
    }, 2200);
  };

  const scratch = (
    event:
      React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (
      !scratchingRef.current ||
      revealedRef.current
    ) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const point =
      getPoint(event);

    if (!point) {
      return;
    }

    const context =
      canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.save();

    context.globalCompositeOperation =
      "destination-out";

    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 38;

    const last =
      lastPointRef.current;

    context.beginPath();

    if (last) {
      context.moveTo(
        last.x,
        last.y
      );

      context.lineTo(
        point.x,
        point.y
      );
    } else {
      context.moveTo(
        point.x,
        point.y
      );

      context.lineTo(
        point.x + 0.1,
        point.y + 0.1
      );
    }

    context.stroke();

    /* Create a wider soft scratch */

    context.globalAlpha = 0.35;
    context.lineWidth = 55;

    context.beginPath();

    if (last) {
      context.moveTo(
        last.x,
        last.y
      );

      context.lineTo(
        point.x,
        point.y
      );
    }

    context.stroke();

    context.restore();

    lastPointRef.current =
      point;

    const percentage =
      calculateScratch();

    setScratchPercent(
      Math.min(
        Math.round(percentage),
        100
      )
    );

    if (percentage >= 55) {
      reveal();
    }
  };

  const handlePointerDown = (
    event:
      React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (revealedRef.current) {
      return;
    }

    scratchingRef.current = true;

    const point =
      getPoint(event);

    lastPointRef.current =
      point;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    scratch(event);
  };

  const handlePointerUp = (
    event:
      React.PointerEvent<HTMLCanvasElement>
  ) => {
    scratchingRef.current = false;

    lastPointRef.current =
      null;

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {}
  };

  return (
    <>
      <CelebrationAnimation
        active={celebration}
      />

      <section
        className="py-24"
        style={{
          backgroundColor:
            COLORS.creamDark,
        }}
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p
            className="text-[10px] tracking-[0.4em] uppercase"
            style={{
              color: COLORS.rose,
            }}
          >
            A little secret
          </p>

          <h2
            className="font-display text-5xl sm:text-6xl mt-4"
            style={{
              color: COLORS.roseDark,
            }}
          >
            When is the big day?
          </h2>

          <div
            className="w-16 h-px mx-auto mt-6"
            style={{
              backgroundColor:
                COLORS.rose,
            }}
          />

          <p
            className="text-sm mt-7"
            style={{
              color: COLORS.roseDark,
              opacity: 0.65,
            }}
          >
            Some dates are meant to be
            discovered.
          </p>

          <div className="mt-10 mx-auto max-w-md">
            <motion.div
              ref={cardRef}
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
                duration: 0.7,
              }}
              className="relative h-60 sm:h-64 overflow-hidden shadow-xl"
              style={{
                backgroundColor:
                  COLORS.cream,
                border:
                  `1px solid ${COLORS.rose}66`,
              }}
            >
              {/* ACTUAL DATE */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <p
                    className="text-[9px] tracking-[0.4em] uppercase"
                    style={{
                      color: COLORS.rose,
                    }}
                  >
                    Save the date
                  </p>

                  <p
                    className="font-display text-5xl sm:text-6xl mt-5"
                    style={{
                      color: COLORS.roseDark,
                    }}
                  >
                    12 November
                  </p>

                  <p
                    className="tracking-[0.4em] text-xs mt-3"
                    style={{
                      color: COLORS.roseDark,
                      opacity: 0.6,
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
                  onPointerDown={
                    handlePointerDown
                  }
                  onPointerMove={
                    scratch
                  }
                  onPointerUp={
                    handlePointerUp
                  }
                  onPointerCancel={
                    handlePointerUp
                  }
                  className="absolute inset-0 w-full h-full touch-none cursor-crosshair"
                />
              )}

              {/* REVEAL GLOW */}

              <AnimatePresence>
                {revealed && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow:
                        `inset 0 0 70px ${COLORS.roseLight}`,
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {!revealed && (
              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <p
                    className="text-[9px] tracking-[0.25em] uppercase"
                    style={{
                      color:
                        COLORS.roseDark,
                      opacity: 0.55,
                    }}
                  >
                    Scratch the card
                  </p>

                  <p
                    className="text-[9px] tracking-[0.15em]"
                    style={{
                      color:
                        COLORS.rose,
                    }}
                  >
                    {scratchPercent}%
                  </p>
                </div>

                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{
                    backgroundColor:
                      COLORS.blush,
                  }}
                >
                  <motion.div
                    className="h-full"
                    animate={{
                      width:
                        `${scratchPercent}%`,
                    }}
                    style={{
                      backgroundColor:
                        COLORS.rose,
                    }}
                  />
                </div>
              </div>
            )}

            {revealed && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-7"
              >
                <p
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{
                    color:
                      COLORS.roseDark,
                  }}
                >
                  The countdown has begun
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
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

  const [dateRevealed, setDateRevealed] =
    useState(false);

  const [musicPlaying, setMusicPlaying] =
    useState(false);

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  /* =======================================================
     OPEN INVITATION
  ======================================================= */

  const openInvitation = (
    side: Side
  ) => {
    setSelectedSide(side);

    setInvitationOpen(true);

    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime =
      MUSIC_START;

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
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

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
    selectedSide === "bride"
      ? brideEvents
      : groomEvents;

  return (
    <main
      className="overflow-hidden"
      style={{
        backgroundColor:
          COLORS.cream,
        color: COLORS.text,
      }}
    >
      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        preload="auto"
        loop
      />

      {/* =====================================================
          OPENING
      ===================================================== */}

      <AnimatePresence>
        {!invitationOpen && (
          <OpeningCurtain
            onOpen={openInvitation}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MUSIC BUTTON
      ===================================================== */}

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
              COLORS.roseDark,
            borderColor:
              COLORS.roseLight,
          }}
        >
          {musicPlaying
            ? "♫"
            : "🔇"}
        </motion.button>
      )}

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur border-b"
        style={{
          backgroundColor:
            "rgba(251,244,238,.92)",
          borderColor:
            "rgba(125,63,74,.12)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-2xl"
            style={{
              color:
                COLORS.roseDark,
            }}
          >
            H{" "}
            <span
              style={{
                color: COLORS.rose,
              }}
            >
              &
            </span>{" "}
            S
          </a>

          <div
            className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase"
            style={{
              color:
                COLORS.roseDark,
            }}
          >
            <a
              href="#story"
              className="hover:opacity-60 transition"
            >
              Story
            </a>

            <a
              href="#celebrations"
              className="hover:opacity-60 transition"
            >
              Celebrations
            </a>

            <a
              href="#gallery"
              className="hover:opacity-60 transition"
            >
              Gallery
            </a>

            <a
              href="#family"
              className="hover:opacity-60 transition"
            >
              Family
            </a>

            <a
              href="#travel"
              className="hover:opacity-60 transition"
            >
              Travel
            </a>

            <a
              href="#rsvp"
              className="hover:opacity-60 transition"
            >
              RSVP
            </a>
          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.2em] uppercase border px-5 py-2 transition"
            style={{
              borderColor:
                COLORS.roseDark,
              color:
                COLORS.roseDark,
            }}
          >
            RSVP
          </a>
        </nav>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
        style={{
          backgroundColor:
            COLORS.cream,
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
              color: COLORS.rose,
            }}
          >
            With the blessings of our families
          </p>

          <h1
            className="font-display text-[80px] sm:text-[145px] leading-[0.75]"
            style={{
              color: COLORS.roseDark,
            }}
          >
            Harit

            <span
              className="block text-5xl sm:text-7xl my-7"
              style={{
                color: COLORS.rose,
              }}
            >
              &
            </span>

            Shreya
          </h1>

          <p
            className="font-display text-2xl sm:text-3xl mt-12"
            style={{
              color:
                COLORS.roseDark,
            }}
          >
            are getting married
          </p>

          <p
            className="tracking-[0.35em] text-[10px] uppercase mt-5"
            style={{
              color:
                COLORS.roseDark,
              opacity: 0.6,
            }}
          >
            Ambala · Pathankot
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          DATE REVEAL
      ===================================================== */}

      <DateReveal
        onReveal={() => {
          setDateRevealed(true);
        }}
      />

      {/* =====================================================
          COUNTDOWN
      ===================================================== */}

      {dateRevealed && (
        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="py-24 text-white"
          style={{
            background:
              "linear-gradient(135deg,#7D3F4A,#9D5865,#7D3F4A)",
          }}
        >
          <div className="max-w-5xl mx-auto px-5 text-center">
            <p
              className="text-[10px] tracking-[0.4em] uppercase mb-6"
              style={{
                color:
                  COLORS.champagne,
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

      {/* =====================================================
          STORY
      ===================================================== */}

      <section
        id="story"
        className="py-24"
        style={{
          backgroundColor:
            COLORS.cream,
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
              color:
                COLORS.roseDark,
              opacity: 0.8,
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

      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section
        id="celebrations"
        className="py-24"
        style={{
          backgroundColor:
            COLORS.creamDark,
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <SectionTitle
            eyebrow={
              selectedSide === "bride"
                ? "Bride's side"
                : "Groom's side"
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
                    delay:
                      index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="relative p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow"
                  style={{
                    backgroundColor:
                      COLORS.cream,
                    border:
                      `1px solid ${COLORS.rose}66`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      backgroundColor:
                        COLORS.rose,
                    }}
                  />

                  <p
                    className="text-[10px] tracking-[0.35em]"
                    style={{
                      color:
                        COLORS.rose,
                    }}
                  >
                    {event.date}
                  </p>

                  <h3
                    className="font-display text-3xl sm:text-4xl mt-4"
                    style={{
                      color:
                        COLORS.roseDark,
                    }}
                  >
                    {event.title}
                  </h3>

                  {event.time && (
                    <p
                      className="text-sm mt-3"
                      style={{
                        color:
                          COLORS.rose,
                      }}
                    >
                      {event.time}
                    </p>
                  )}

                  <p
                    className="text-xs tracking-[0.16em] uppercase mt-4"
                    style={{
                      color:
                        COLORS.roseDark,
                      opacity: 0.6,
                    }}
                  >
                    {event.location}
                  </p>

                  {event.address && (
                    <p
                      className="text-sm leading-6 mt-3"
                      style={{
                        color:
                          COLORS.roseDark,
                        opacity: 0.6,
                      }}
                    >
                      {event.address}
                    </p>
                  )}

                  <p
                    className="mt-5 text-sm leading-7"
                    style={{
                      color:
                        COLORS.roseDark,
                      opacity: 0.7,
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
                        COLORS.roseDark,
                      borderColor:
                        COLORS.rose,
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

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="gallery"
        className="py-24"
        style={{
          backgroundColor:
            COLORS.cream,
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
                    delay:
                      index * 0.1,
                  }}
                  className="overflow-hidden"
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

      {/* =====================================================
          FAMILY
      ===================================================== */}

      <section
        id="family"
        className="py-24"
        style={{
          backgroundColor:
            COLORS.creamDark,
        }}
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">
            <div
              className="p-10"
              style={{
                backgroundColor:
                  COLORS.cream,
                border:
                  `1px solid ${COLORS.rose}66`,
              }}
            >
              <p
                className="text-[10px] tracking-[0.35em] uppercase"
                style={{
                  color:
                    COLORS.rose,
                }}
              >
                The Groom
              </p>

              <h3
                className="font-display text-4xl mt-5"
                style={{
                  color:
                    COLORS.roseDark,
                }}
              >
                Harit Sharma
              </h3>

              <p
                className="font-display text-xl mt-5"
                style={{
                  color:
                    COLORS.roseDark,
                  opacity: 0.6,
                }}
              >
                Son of
              </p>

              <p
                className="text-sm mt-2"
                style={{
                  color:
                    COLORS.roseDark,
                }}
              >
                Yogesh Sharma &amp; Manju
              </p>
            </div>

            <div
              className="p-10"
              style={{
                backgroundColor:
                  COLORS.cream,
                border:
                  `1px solid ${COLORS.rose}66`,
              }}
            >
              <p
                className="text-[10px] tracking-[0.35em] uppercase"
                style={{
                  color:
                    COLORS.rose,
                }}
              >
                The Bride
              </p>

              <h3
                className="font-display text-4xl mt-5"
                style={{
                  color:
                    COLORS.roseDark,
                }}
              >
                Shreya
              </h3>

              <p
                className="font-display text-xl mt-5"
                style={{
                  color:
                    COLORS.roseDark,
                  opacity: 0.6,
                }}
              >
                Daughter of
              </p>

              <p
                className="text-sm mt-2"
                style={{
                  color:
                    COLORS.roseDark,
                }}
              >
                Satish Kumar &amp; Davina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAVEL
      ===================================================== */}

      <section
        id="travel"
        className="py-24"
        style={{
          backgroundColor:
            COLORS.cream,
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
                backgroundColor:
                  COLORS.creamDark,
                borderColor:
                  `${COLORS.rose}66`,
              }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{
                  color:
                    COLORS.rose,
                }}
              >
                Pre-Wedding
              </p>

              <h3
                className="font-display text-4xl mt-4"
                style={{
                  color:
                    COLORS.roseDark,
                }}
              >
                Ambala
              </h3>

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color:
                    COLORS.roseDark,
                  opacity: 0.65,
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
                backgroundColor:
                  COLORS.creamDark,
                borderColor:
                  `${COLORS.rose}66`,
              }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{
                  color:
                    COLORS.rose,
                }}
              >
                Wedding
              </p>

              <h3
                className="font-display text-4xl mt-4"
                style={{
                  color:
                    COLORS.roseDark,
                }}
              >
                Pathankot
              </h3>

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color:
                    COLORS.roseDark,
                  opacity: 0.65,
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
                  color:
                    COLORS.roseDark,
                  borderColor:
                    COLORS.rose,
                }}
              >
                Wedding venue →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RSVP
      ===================================================== */}

      <section
        id="rsvp"
        className="py-24 text-white"
        style={{
          background:
            "linear-gradient(135deg,#7D3F4A,#9D5865,#7D3F4A)",
        }}
      >
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p
            className="text-[10px] tracking-[0.4em] uppercase"
            style={{
              color:
                COLORS.champagne,
            }}
          >
            We&apos;d love to celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div
            className="w-16 h-px mx-auto mt-6 mb-8"
            style={{
              backgroundColor:
                COLORS.champagne,
            }}
          />

          <p className="text-sm leading-7 text-white/70">
            Your presence would mean the
            world to us. Please join us as we
            begin this beautiful new chapter.
          </p>

          <button
            type="button"
            className="mt-9 px-8 py-3 text-[10px] tracking-[0.3em] uppercase"
            style={{
              backgroundColor:
                COLORS.cream,
              color:
                COLORS.roseDark,
            }}
          >
            RSVP Coming Soon
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="text-white text-center py-16 px-5"
        style={{
          backgroundColor:
            "#542832",
        }}
      >
        <p
          className="font-display text-6xl"
          style={{
            color:
              COLORS.champagne,
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