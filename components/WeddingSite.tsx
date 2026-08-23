"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

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
  "2026-11-12T18:00:00+05:30"
).getTime();

const MUSIC_START = 8;

/* =========================================================
   THEME
========================================================= */

const COLORS = {
  cream: "#FFF8F3",
  creamDark: "#F8EDE7",
  blush: "#F3D7D0",
  blushLight: "#FBEAE5",
  rose: "#B76E79",
  roseDark: "#965563",
  roseGold: "#C98F8F",
  champagne: "#D8B4A0",
  gold: "#C7A27C",
  brown: "#5C4642",
  text: "#493936",
};

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
    title:
      "Haldi · Mehndi · DJ · Ladies Sangeet",
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
    title:
      "Haldi · Mehndi · Ladies Sangeet",
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
          difference /
            (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference /
            (1000 * 60 * 60)) %
            24
        ),
        minutes: Math.floor(
          (difference /
            (1000 * 60)) %
            60
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
            className="border border-[#c98f8f]/50 bg-white/10 backdrop-blur px-2 py-4 sm:px-6 sm:py-6 rounded-sm"
          >
            <div className="font-display text-3xl sm:text-5xl text-[#f3d7d0]">
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
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#b76e79] mb-4">
        {eyebrow}
      </p>

      <h2 className="font-display text-5xl sm:text-6xl text-[#493936]">
        {title}
      </h2>

      <div className="w-16 h-px bg-[#c98f8f] mx-auto mt-5" />
    </div>
  );
}

/* =========================================================
   CELEBRATION EMOJIS
========================================================= */

function CelebrationEmojis() {
  const emojis = [
    "🎉",
    "🥂",
    "✨",
    "💕",
    "🌸",
    "💍",
    "🥳",
    "🎊",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {emojis.map((emoji, index) => (
        <motion.div
          key={`${emoji}-${index}`}
          initial={{
            opacity: 0,
            y: 30,
            x: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [
              40,
              -80 - index * 8,
              -180,
            ],
            x:
              (index % 2 === 0 ? -1 : 1) *
              (30 + index * 18),
            scale: [0.5, 1.2, 1, 0.8],
            rotate: [
              0,
              index % 2 === 0
                ? -15
                : 15,
              index % 2 === 0
                ? 15
                : -15,
            ],
          }}
          transition={{
            duration: 2.2,
            delay: index * 0.08,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 text-3xl sm:text-4xl"
        >
          {emoji}
        </motion.div>
      ))}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1.1, 1],
        }}
        transition={{
          duration: 1.8,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-white/90 backdrop-blur px-8 py-5 rounded-full shadow-xl border border-[#c98f8f]/50">
          <p className="font-display text-2xl sm:text-3xl text-[#965563]">
            Let the celebrations begin! ✨
          </p>
        </div>
      </motion.div>
    </div>
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

  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const isDrawing =
    useRef(false);

  const [progress, setProgress] =
    useState(0);

  const [revealed, setRevealed] =
    useState(false);

  const [celebrate, setCelebrate] =
    useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    const container =
      containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const setupCanvas = () => {
      const rect =
        container.getBoundingClientRect();

      const dpr =
        window.devicePixelRatio || 1;

      canvas.width =
        rect.width * dpr;

      canvas.height =
        rect.height * dpr;

      canvas.style.width =
        `${rect.width}px`;

      canvas.style.height =
        `${rect.height}px`;

      const ctx =
        canvas.getContext("2d");

      if (!ctx) {
        return;
      }

      ctx.scale(dpr, dpr);

      const gradient =
        ctx.createLinearGradient(
          0,
          0,
          rect.width,
          rect.height
        );

      gradient.addColorStop(
        0,
        "#c98f8f"
      );

      gradient.addColorStop(
        0.5,
        "#e4b7aa"
      );

      gradient.addColorStop(
        1,
        "#b76e79"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
      );

      ctx.fillStyle =
        "rgba(255,255,255,0.12)";

      for (let i = 0; i < 120; i++) {
        const x =
          Math.random() * rect.width;

        const y =
          Math.random() * rect.height;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          1.2,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalCompositeOperation =
        "source-over";

      setProgress(0);
    };

    setupCanvas();

    window.addEventListener(
      "resize",
      setupCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        setupCanvas
      );
    };
  }, []);

  const getPosition = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas =
      canvasRef.current;

    if (!canvas) {
      return {
        x: 0,
        y: 0,
      };
    }

    const rect =
      canvas.getBoundingClientRect();

    if (
      "touches" in event
    ) {
      const touch =
        event.touches[0];

      return {
        x:
          touch.clientX -
          rect.left,
        y:
          touch.clientY -
          rect.top,
      };
    }

    return {
      x:
        event.clientX -
        rect.left,
      y:
        event.clientY -
        rect.top,
    };
  };

  const scratch = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (revealed) {
      return;
    }

    if (!isDrawing.current) {
      return;
    }

    const canvas =
      canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx =
      canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const {
      x,
      y,
    } = getPosition(event);

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      24,
      0,
      Math.PI * 2
    );

    ctx.fill();

    calculateProgress();
  };

  const calculateProgress = () => {
    const canvas =
      canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx =
      canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const imageData =
      ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

    let transparent = 0;

    const sampleStep = 12;

    for (
      let i = 3;
      i <
      imageData.data.length;
      i +=
        4 * sampleStep
    ) {
      if (
        imageData.data[i] === 0
      ) {
        transparent++;
      }
    }

    const total =
      imageData.data.length /
      (4 * sampleStep);

    const percentage =
      Math.min(
        Math.round(
          (transparent / total) *
            100
        ),
        100
      );

    setProgress(percentage);

    if (
      percentage >= 42 &&
      !revealed
    ) {
      reveal();
    }
  };

  const reveal = () => {
    if (revealed) {
      return;
    }

    setRevealed(true);
    setCelebrate(true);

    const canvas =
      canvasRef.current;

    if (canvas) {
      const ctx =
        canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    }

    window.setTimeout(() => {
      onReveal();
    }, 1200);
  };

  const startDrawing = () => {
    if (!revealed) {
      isDrawing.current = true;
    }
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-64 sm:h-72 max-w-lg mx-auto overflow-hidden rounded-sm border border-[#c98f8f]/60 shadow-xl select-none touch-none"
    >
      {/* DATE UNDER SCRATCH */}

      <div className="absolute inset-0 flex items-center justify-center bg-[#fff8f3]">
        <div className="text-center px-5">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#b76e79]">
            Save the date
          </p>

          <p className="font-display text-4xl sm:text-6xl text-[#493936] mt-5">
            12 November
          </p>

          <p className="tracking-[0.4em] text-xs text-[#493936]/60 mt-3">
            2026
          </p>

          <p className="text-xs text-[#b76e79] mt-5">
            Our forever begins
          </p>
        </div>
      </div>

      {/* SCRATCH CANVAS */}

      <canvas
        ref={canvasRef}
        onMouseDown={
          startDrawing
        }
        onMouseMove={scratch}
        onMouseUp={
          stopDrawing
        }
        onMouseLeave={
          stopDrawing
        }
        onTouchStart={
          startDrawing
        }
        onTouchMove={scratch}
        onTouchEnd={
          stopDrawing
        }
        className={`absolute inset-0 w-full h-full ${
          revealed
            ? "pointer-events-none"
            : "cursor-crosshair"
        }`}
      />

      {/* SCRATCH INSTRUCTIONS */}

      {!revealed && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="text-center text-white px-5 drop-shadow-md">
            <div className="text-4xl mb-4">
              ✨
            </div>

            <p className="text-[10px] tracking-[0.35em] uppercase font-semibold">
              Scratch to reveal
            </p>

            <p className="text-xs mt-3 text-white/80">
              Use your finger or mouse
            </p>
          </div>
        </div>
      )}

      {/* PROGRESS */}

      {!revealed &&
        progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 pointer-events-none">
            <motion.div
              className="h-full bg-white"
              animate={{
                width: `${progress}%`,
              }}
            />
          </div>
        )}

      {/* CELEBRATION */}

      {celebrate && (
        <CelebrationEmojis />
      )}
    </div>
  );
}

/* =========================================================
   DATE REVEAL
========================================================= */

function DateReveal({
  onReveal,
}: {
  onReveal: () => void;
}) {
  const [revealed, setRevealed] =
    useState(false);

  return (
    <section className="py-24 bg-[#f8ede7]">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#b76e79]">
          A little secret
        </p>

        <h2 className="font-display text-5xl sm:text-6xl text-[#493936] mt-4">
          When is the big day?
        </h2>

        <div className="w-16 h-px bg-[#c98f8f] mx-auto mt-6" />

        <p className="text-sm text-[#493936]/60 mt-7">
          Scratch away the blush to
          discover our special date.
        </p>

        <div className="mt-10">
          <ScratchCard
            onReveal={() => {
              setRevealed(true);
              onReveal();
            }}
          />
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
            className="mt-7 text-[10px] tracking-[0.3em] uppercase text-[#965563]"
          >
            The countdown has begun ✨
          </motion.p>
        )}
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
  const [
    selectedSide,
    setSelectedSide,
  ] = useState<Side | null>(
    null
  );

  const [opening, setOpening] =
    useState(false);

  const handleReveal = () => {
    if (
      opening ||
      !selectedSide
    ) {
      return;
    }

    const side: Side =
      selectedSide;

    setOpening(true);

    window.setTimeout(() => {
      onOpen(side);
    }, 1700);
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#fff8f3]">
      {/* CENTER BACKGROUND */}

      <div className="absolute inset-0 bg-[#fff8f3]" />

      {/* CENTER INVITATION */}

      <motion.div
        initial={{
          opacity: 1,
        }}
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
              opacity: [
                0.5,
                1,
                0.5,
              ],
              scale: [
                1,
                1.08,
                1,
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="text-[#c98f8f] text-3xl mb-5"
          >
            ✦
          </motion.div>

          <p className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase text-[#493936]/70 font-semibold mt-12">
            With the blessings of our
            families
          </p>

          <h1 className="font-display text-[65px] sm:text-[105px] leading-[0.75] text-[#493936] mt-7">
            Harit

            <span className="block text-4xl sm:text-6xl text-[#b76e79] my-6">
              &
            </span>

            Shreya
          </h1>

          <p className="font-display text-xl sm:text-2xl text-[#493936]/70 mt-8 font-semibold">
            A celebration of two
            families
          </p>

          {/* SIDE SELECTION */}

          <div className="mt-10">
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#493936] mb-5 font-bold">
              Choose your side
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() =>
                  setSelectedSide(
                    "groom"
                  )
                }
                className={`px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all ${
                  selectedSide ===
                  "groom"
                    ? "bg-[#b76e79] text-white border-[#b76e79]"
                    : "bg-[#493936] border-[#493936] text-white"
                }`}
              >
                Groom&apos;s Side
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedSide(
                    "bride"
                  )
                }
                className={`px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all ${
                  selectedSide ===
                  "bride"
                    ? "bg-[#b76e79] text-white border-[#b76e79]"
                    : "bg-[#493936] border-[#493936] text-white"
                }`}
              >
                Bride&apos;s Side
              </button>
            </div>
          </div>

          {/* REVEAL BUTTON */}

          <motion.button
            type="button"
            onClick={
              handleReveal
            }
            disabled={
              opening ||
              !selectedSide
            }
            whileHover={{
              scale:
                opening ? 1 : 1.04,
            }}
            whileTap={{
              scale:
                opening ? 1 : 0.96,
            }}
            className={`mt-9 px-10 py-4 border text-[10px] tracking-[0.35em] uppercase shadow-lg transition-all ${
              selectedSide
                ? "bg-[#c98f8f] text-white border-[#c98f8f]"
                : "bg-[#e7d6d0] text-[#493936]/40 border-[#e7d6d0]"
            } disabled:cursor-default`}
          >
            {opening
              ? "Opening..."
              : "Tap to Reveal"}
          </motion.button>

          <p className="text-[8px] tracking-[0.3em] uppercase text-[#b76e79]/50 mt-4">
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
          x: opening
            ? "-102%"
            : "0%",
        }}
        transition={{
          duration: 1.7,
          ease: [
            0.76,
            0,
            0.24,
            1,
          ],
        }}
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,#6e3e47 0%,#965563 25%,#b76e79 50%,#965563 75%,#6e3e47 100%)",
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
                  "linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.12),rgba(0,0,0,.18))",
                filter:
                  "blur(0.5px)",
              }}
            />
          )
        )}

        <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#d8b4a0]" />

        <div className="absolute right-[4px] top-0 bottom-0 w-px bg-[#f8ede7]/60" />
      </motion.div>

      {/* RIGHT CURTAIN */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: opening
            ? "102%"
            : "0%",
        }}
        transition={{
          duration: 1.7,
          ease: [
            0.76,
            0,
            0.24,
            1,
          ],
        }}
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg,#6e3e47 0%,#965563 25%,#b76e79 50%,#965563 75%,#6e3e47 100%)",
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
                  "linear-gradient(90deg,rgba(0,0,0,.18),rgba(255,255,255,.12),rgba(0,0,0,.18))",
                filter:
                  "blur(0.5px)",
              }}
            />
          )
        )}

        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#d8b4a0]" />

        <div className="absolute left-[4px] top-0 bottom-0 w-px bg-[#f8ede7]/60" />
      </motion.div>

      {/* TOP ROD */}

      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="h-[5px] bg-[#c98f8f]" />
        <div className="h-[2px] bg-[#f3d7d0]" />
        <div className="h-[4px] bg-[#965563]" />
      </div>

      {/* FRAME */}

      <div className="absolute inset-5 sm:inset-8 border border-[#c98f8f]/40 z-40 pointer-events-none" />

      <div className="absolute top-7 left-7 z-40 text-[#c98f8f] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute top-7 right-7 z-40 text-[#c98f8f] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-40 text-center pointer-events-none">
        <span className="text-[#c98f8f]">
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
  const [
    invitationOpen,
    setInvitationOpen,
  ] = useState(false);

  const [
    selectedSide,
    setSelectedSide,
  ] = useState<Side | null>(
    null
  );

  const [
    dateRevealed,
    setDateRevealed,
  ] = useState(false);

  const [
    musicPlaying,
    setMusicPlaying,
  ] = useState(false);

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
    selectedSide === "groom"
      ? groomEvents
      : selectedSide ===
          "bride"
        ? brideEvents
        : [];

  return (
    <main className="overflow-hidden bg-[#fff8f3]">
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
            onOpen={
              openInvitation
            }
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
          onClick={
            toggleMusic
          }
          aria-label="Toggle music"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#b76e79] text-white border border-[#d8b4a0] shadow-xl flex items-center justify-center"
        >
          {musicPlaying
            ? "♫"
            : "🔇"}
        </motion.button>
      )}

      {/* NAVIGATION */}

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#fff8f3]/90 backdrop-blur border-b border-[#b76e79]/15">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-2xl text-[#493936]"
          >
            H{" "}
            <span className="text-[#b76e79]">
              &
            </span>{" "}
            S
          </a>

          <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase text-[#493936]">
            <a
              href="#story"
              className="hover:text-[#b76e79] transition"
            >
              Story
            </a>

            <a
              href="#celebrations"
              className="hover:text-[#b76e79] transition"
            >
              Celebrations
            </a>

            <a
              href="#gallery"
              className="hover:text-[#b76e79] transition"
            >
              Gallery
            </a>

            <a
              href="#family"
              className="hover:text-[#b76e79] transition"
            >
              Family
            </a>

            <a
              href="#travel"
              className="hover:text-[#b76e79] transition"
            >
              Travel
            </a>

            <a
              href="#rsvp"
              className="hover:text-[#b76e79] transition"
            >
              RSVP
            </a>
          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.2em] uppercase border border-[#b76e79] px-5 py-2 text-[#965563] hover:bg-[#b76e79] hover:text-white transition"
          >
            RSVP
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 bg-[#fff8f3]"
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
          <p className="text-[10px] tracking-[0.45em] uppercase text-[#b76e79] mb-10">
            With the blessings of
            our families
          </p>

          <h1 className="font-display text-[80px] sm:text-[145px] leading-[0.75] text-[#493936]">
            Harit

            <span className="block text-5xl sm:text-7xl my-7 text-[#b76e79]">
              &
            </span>

            Shreya
          </h1>

          <p className="font-display text-2xl sm:text-3xl mt-12 text-[#493936]">
            are getting married
          </p>

          <p className="tracking-[0.35em] text-[10px] uppercase text-[#493936]/60 mt-5">
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
          className="py-24 bg-[#965563] text-white"
        >
          <div className="max-w-5xl mx-auto px-5 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#f3d7d0] mb-6">
              Counting every moment
            </p>

            <h2 className="font-display text-4xl sm:text-5xl mb-10">
              Until our forever
              begins
            </h2>

            <Countdown />
          </div>
        </motion.section>
      )}

      {/* STORY */}

      <section
        id="story"
        className="py-24 bg-[#fff8f3]"
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
            className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-[#493936]/80"
          >
            <p>
              It all started with
              two people, two
              stories, and a
              little bit of
              destiny.
            </p>

            <p className="mt-7">
              From the first
              conversations to
              the day we decided
              to spend forever
              together, every
              chapter has brought
              us closer to this
              moment.
            </p>

            <p className="mt-7">
              And now, surrounded
              by the people we
              love most, we are
              ready to begin our
              next chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVENTS */}

      <section
        id="celebrations"
        className="py-24 bg-[#f8ede7]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <SectionTitle
            eyebrow={
              selectedSide ===
              "groom"
                ? "Groom's side"
                : selectedSide ===
                    "bride"
                  ? "Bride's side"
                  : "Our celebrations"
            }
            title="The Celebrations"
          />

          {currentEvents.length >
          0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {currentEvents.map(
                (
                  event,
                  index
                ) => (
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
                    className="relative bg-[#fff8f3] border border-[#c98f8f]/40 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#b76e79]" />

                    <p className="text-[10px] tracking-[0.35em] text-[#b76e79]">
                      {event.date}
                    </p>

                    <h3 className="font-display text-3xl sm:text-4xl text-[#493936] mt-4">
                      {event.title}
                    </h3>

                    {event.time && (
                      <p className="text-sm text-[#b76e79] mt-3">
                        {event.time}
                      </p>
                    )}

                    <p className="text-xs tracking-[0.16em] uppercase text-[#493936]/60 mt-4">
                      {event.location}
                    </p>

                    {event.address && (
                      <p className="text-sm leading-6 text-[#493936]/60 mt-3">
                        {event.address}
                      </p>
                    )}

                    <p className="mt-5 text-sm leading-7 text-[#493936]/70">
                      {
                        event.description
                      }
                    </p>

                    <a
                      href={
                        event.map
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase text-[#965563] border-b border-[#c98f8f] pb-1"
                    >
                      View location
                      →
                    </a>
                  </motion.article>
                )
              )}
            </div>
          ) : (
            <div className="text-center border border-[#c98f8f]/30 bg-[#fff8f3] py-12 px-5">
              <p className="font-display text-2xl text-[#493936]">
                Choose your side
                to view the
                celebrations.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="py-24 bg-[#fff8f3]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <SectionTitle
            eyebrow="Our moments"
            title="Gallery"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map(
              (
                photo,
                index
              ) => (
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

      {/* FAMILY */}

      <section
        id="family"
        className="py-24 bg-[#f8ede7]"
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">
            <div className="border border-[#c98f8f]/40 bg-[#fff8f3] p-10">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b76e79]">
                The Groom
              </p>

              <h3 className="font-display text-4xl text-[#493936] mt-5">
                Harit Sharma
              </h3>

              <p className="font-display text-xl text-[#493936]/60 mt-5">
                Son of
              </p>

              <p className="text-sm mt-2 text-[#493936]">
                Yogesh Sharma &
                Manju
              </p>
            </div>

            <div className="border border-[#c98f8f]/40 bg-[#fff8f3] p-10">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b76e79]">
                The Bride
              </p>

              <h3 className="font-display text-4xl text-[#493936] mt-5">
                Shreya
              </h3>

              <p className="font-display text-xl text-[#493936]/60 mt-5">
                Daughter of
              </p>

              <p className="text-sm mt-2 text-[#493936]">
                Satish Kumar &
                Davina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL */}

      <section
        id="travel"
        className="py-24 bg-[#fff8f3]"
      >
        <div className="max-w-5xl mx-auto px-5">
          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">
            <div className="border border-[#c98f8f]/40 p-9 bg-[#f8ede7]/50">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b76e79]">
                Pre-Wedding
              </p>

              <h3 className="font-display text-4xl text-[#493936] mt-4">
                Ambala
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#493936]/65">
                Our celebrations
                before the wedding
                will take place in
                Ambala City.
              </p>
            </div>

            <div className="border border-[#c98f8f]/40 p-9 bg-[#f8ede7]/50">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b76e79]">
                Wedding
              </p>

              <h3 className="font-display text-4xl text-[#493936] mt-4">
                Pathankot
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#493936]/65">
                We head to
                Pathankot for our
                wedding
                celebrations.
              </p>

              <a
                href="https://share.google/dW1Nnjn30UPZdNYky"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase border-b border-[#c98f8f] pb-1 text-[#965563]"
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
        className="py-24 bg-[#965563] text-white"
      >
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#f3d7d0]">
            We&apos;d love to
            celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div className="w-16 h-px bg-[#d8b4a0] mx-auto mt-6 mb-8" />

          <p className="text-sm leading-7 text-white/75">
            Your presence would
            mean the world to us.
            Please join us as we
            begin this beautiful
            new chapter.
          </p>

          <button
            type="button"
            className="mt-9 bg-[#fff8f3] text-[#965563] px-8 py-3 text-[10px] tracking-[0.3em] uppercase"
          >
            RSVP Coming Soon
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#493936] text-white text-center py-16 px-5">
        <p className="font-display text-6xl text-[#d8b4a0]">
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
          Our Wedding ·
          Pathankot
        </p>

        <p className="text-xs text-white/30 mt-10">
          Made with love.
        </p>
      </footer>
    </main>
  );
}