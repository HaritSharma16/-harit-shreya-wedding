"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   EVENTS
========================================================= */

const events = [
  {
    date: "25 OCTOBER 2026",
    title: "Kirtan",
    time: "",
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
    address: "",
    map: "https://maps.app.goo.gl/sKmhU2aUPT4GBNPM7",
    description:
      "An evening of love, laughter and celebration as we officially begin this beautiful journey together.",
  },
  {
    date: "10 NOVEMBER 2026",
    title: "Haldi · Mehndi · DJ · Ladies Sangeet",
    time: "",
    location: "Our Home · Ambala City",
    address: "",
    map: "https://www.google.com/maps/search/?api=1&query=Ambala%20City%20Haryana",
    description:
      "A day filled with colour, music, dance and all the people who make our lives special.",
  },
  {
    date: "12 NOVEMBER 2026",
    title: "The Wedding",
    time: "",
    location: "Kamal White House · Pathankot",
    address: "",
    map: "https://share.google/dW1Nnjn30UPZdNYky",
    description:
      "The day our forever begins. We cannot wait to celebrate this beautiful moment with you.",
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
   MUSIC
========================================================= */

const MUSIC_START = 0;

/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown({
  active,
}: {
  active: boolean;
}) {
  const weddingDate = new Date(
    "2026-11-12T18:00:00+05:30"
  ).getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!active) return;

    const update = () => {
      const difference = Math.max(
        weddingDate - Date.now(),
        0
      );

      setTime({
        days: Math.floor(
          difference / 86400000
        ),
        hours: Math.floor(
          (difference / 3600000) % 24
        ),
        minutes: Math.floor(
          (difference / 60000) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    update();

    const timer = setInterval(
      update,
      1000
    );

    return () =>
      clearInterval(timer);
  }, [active, weddingDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
      {Object.entries(time).map(
        ([label, value]) => (
          <div
            key={label}
            className="border border-champagne/40 bg-emerald-dark/50 px-2 py-4 sm:px-6 sm:py-6"
          >
            <div className="font-display text-3xl sm:text-5xl text-champagne">
              {String(value).padStart(
                2,
                "0"
              )}
            </div>

            <div className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-cream/50 mt-2">
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
      <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
        {eyebrow}
      </p>

      <h2 className="font-display text-5xl sm:text-6xl text-emerald">
        {title}
      </h2>

      <div className="gold-rule mx-auto mt-5" />
    </div>
  );
}

/* =========================================================
   SCRATCH DATE
========================================================= */

function ScratchDate({
  onReveal,
}: {
  onReveal: () => void;
}) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );

  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const drawingRef =
    useRef(false);

  const revealedRef =
    useRef(false);

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    const container =
      containerRef.current;

    if (!canvas || !container) return;

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

    if (!ctx) return;

    ctx.scale(dpr, dpr);

    /* Base scratch layer */

    const gradient =
      ctx.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

    gradient.addColorStop(
      0,
      "#d9bd79"
    );

    gradient.addColorStop(
      0.5,
      "#b9975b"
    );

    gradient.addColorStop(
      1,
      "#8e713d"
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    /* Decorative lines */

    ctx.globalAlpha = 0.18;

    for (
      let x = -rect.height;
      x < rect.width;
      x += 20
    ) {
      ctx.beginPath();

      ctx.moveTo(x, 0);

      ctx.lineTo(
        x + rect.height,
        rect.height
      );

      ctx.strokeStyle =
        "#fff7df";

      ctx.lineWidth = 1;

      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    /* Scratch instruction */

    ctx.fillStyle =
      "rgba(255,255,255,0.75)";

    ctx.font =
      "600 11px Arial";

    ctx.textAlign =
      "center";

    ctx.textBaseline =
      "middle";

    ctx.letterSpacing = "2px";

    ctx.fillText(
      "SCRATCH TO REVEAL",
      rect.width / 2,
      rect.height / 2
    );

    return () => {
      ctx.clearRect(
        0,
        0,
        rect.width,
        rect.height
      );
    };
  }, []);

  const getPoint = (
    event:
      | React.PointerEvent<HTMLCanvasElement>
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
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    const point =
      getPoint(event);

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.beginPath();

    ctx.arc(
      point.x,
      point.y,
      22,
      0,
      Math.PI * 2
    );

    ctx.fill();

    calculateProgress();
  };

  const calculateProgress = () => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    const imageData =
      ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

    let transparent = 0;

    const data =
      imageData.data;

    /*
      Check every 16th pixel to
      keep this lightweight.
    */

    for (
      let i = 3;
      i < data.length;
      i += 64
    ) {
      if (data[i] < 50) {
        transparent++;
      }
    }

    const total =
      data.length / 64;

    const percentage =
      (transparent / total) *
      100;

    setProgress(
      Math.min(
        Math.round(percentage),
        100
      )
    );

    if (
      percentage >= 45 &&
      !revealedRef.current
    ) {
      revealedRef.current = true;

      onReveal();
    }
  };

  const startScratch = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    drawingRef.current =
      true;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    scratch(event);
  };

  const moveScratch = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!drawingRef.current)
      return;

    scratch(event);
  };

  const stopScratch = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    drawingRef.current =
      false;

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {}
  };

  return (
    <div className="mt-8">
      <div
        ref={containerRef}
        className="relative w-[290px] sm:w-[380px] h-[145px] sm:h-[165px] mx-auto overflow-hidden rounded-sm border border-[#b9975b]/50 bg-[#f7f0e4] shadow-lg"
      >
        {/* DATE UNDER SCRATCH */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#17463d]">
          <p className="text-[8px] tracking-[0.45em] uppercase text-[#17463d]/50 mb-3">
            Our Wedding Date
          </p>

          <p className="font-display text-3xl sm:text-4xl">
            12 November 2026
          </p>

          <p className="text-[8px] tracking-[0.4em] uppercase mt-3 text-[#17463d]/50">
            Pathankot
          </p>
        </div>

        {/* SCRATCH CANVAS */}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 touch-none cursor-crosshair"
          onPointerDown={
            startScratch
          }
          onPointerMove={
            moveScratch
          }
          onPointerUp={
            stopScratch
          }
          onPointerCancel={
            stopScratch
          }
          onPointerLeave={() => {
            drawingRef.current =
              false;
          }}
        />
      </div>

      <p className="text-[8px] tracking-[0.3em] uppercase text-[#17463d]/50 mt-4">
        {progress > 0
          ? `${progress}% revealed`
          : "Scratch gently to reveal"}
      </p>
    </div>
  );
}

/* =========================================================
   OPENING INVITATION
========================================================= */

function OpeningInvitation({
  onOpen,
  onDateReveal,
}: {
  onOpen: () => void;
  onDateReveal: () => void;
}) {
  const [opening, setOpening] =
    useState(false);

  const [side, setSide] =
    useState<
      "groom" | "bride" | null
    >(null);

  const [dateRevealed, setDateRevealed] =
    useState(false);

  const handleDateReveal = () => {
    if (dateRevealed) return;

    setDateRevealed(true);

    onDateReveal();

    /*
      Give the visitor a moment
      to see the revealed date.
    */

    setTimeout(() => {
      setOpening(true);

      setTimeout(() => {
        onOpen();
      }, 1700);
    }, 1400);
  };

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#f4eee3]"
    >
      {/* =====================================================
          CENTER BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-[#f4eee3]" />

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: dateRevealed
            ? 1.03
            : 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="text-center px-5">

          {/* Ornament */}

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
            className="text-[#b9975b] text-3xl mb-6"
          >
            ✦
          </motion.div>

          {/* Blessing */}

          <p className="text-[8px] sm:text-[10px] tracking-[0.45em] uppercase text-[#17463d]/60">
            With the blessings of our families
          </p>

          {/* Names */}

          <h1 className="font-display text-[62px] sm:text-[105px] leading-[0.72] text-[#17463d] mt-8">
            Harit

            <span className="block text-4xl sm:text-6xl text-[#b9975b] my-5">
              &
            </span>

            Shreya
          </h1>

          {/* SIDE SELECTION */}

          {!side && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="mt-10"
            >
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#17463d]/60 mb-5">
                You are invited from
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">

                <button
                  onClick={() =>
                    setSide("groom")
                  }
                  className="px-7 py-3 border border-[#b9975b] text-[#17463d] text-[9px] tracking-[0.25em] uppercase hover:bg-[#17463d] hover:text-[#f4eee3] transition duration-300"
                >
                  Groom's Side
                </button>

                <button
                  onClick={() =>
                    setSide("bride")
                  }
                  className="px-7 py-3 border border-[#b9975b] text-[#17463d] text-[9px] tracking-[0.25em] uppercase hover:bg-[#17463d] hover:text-[#f4eee3] transition duration-300"
                >
                  Bride's Side
                </button>

              </div>
            </motion.div>
          )}

          {/* SELECTED SIDE */}

          {side && !dateRevealed && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-7"
            >
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#b9975b]">
                {side === "groom"
                  ? "Welcome from the Groom's Side"
                  : "Welcome from the Bride's Side"}
              </p>

              <p className="font-display text-xl sm:text-2xl text-[#17463d]/75 mt-4">
                A little secret awaits...
              </p>

              <ScratchDate
                onReveal={
                  handleDateReveal
                }
              />

              <button
                onClick={() =>
                  setSide(null)
                }
                className="mt-5 text-[8px] tracking-[0.3em] uppercase text-[#17463d]/40 hover:text-[#b9975b]"
              >
                ← Change side
              </button>
            </motion.div>
          )}

          {/* REVEALED DATE */}

          {dateRevealed && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mt-8"
            >
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#b9975b]">
                The date is revealed
              </p>

              <p className="font-display text-3xl sm:text-4xl text-[#17463d] mt-3">
                12 November 2026
              </p>

              <p className="text-[8px] tracking-[0.4em] uppercase text-[#17463d]/50 mt-2">
                Pathankot
              </p>
            </motion.div>
          )}

        </div>
      </motion.div>

      {/* =====================================================
          LEFT CURTAIN
      ===================================================== */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: opening
            ? "-105%"
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
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg,#082a23 0%,#17463d 35%,#0d372f 70%,#06251f 100%)",
        }}
      >

        <div className="absolute inset-0">
          {[...Array(10)].map(
            (_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${i * 10}%`,
                  width: "14%",
                  background:
                    "linear-gradient(90deg,rgba(0,0,0,.22),rgba(255,255,255,.06),rgba(0,0,0,.22))",
                  filter:
                    "blur(1px)",
                }}
              />
            )
          )}
        </div>

        <div
          className="absolute top-0 bottom-0 right-0 w-[18%]"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,.12))",
          }}
        />

        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#b9975b]" />

      </motion.div>

      {/* =====================================================
          RIGHT CURTAIN
      ===================================================== */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: opening
            ? "105%"
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
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(270deg,#082a23 0%,#17463d 35%,#0d372f 70%,#06251f 100%)",
        }}
      >

        <div className="absolute inset-0">
          {[...Array(10)].map(
            (_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0"
                style={{
                  right: `${i * 10}%`,
                  width: "14%",
                  background:
                    "linear-gradient(90deg,rgba(0,0,0,.22),rgba(255,255,255,.06),rgba(0,0,0,.22))",
                  filter:
                    "blur(1px)",
                }}
              />
            )
          )}
        </div>

        <div
          className="absolute top-0 bottom-0 left-0 w-[18%]"
          style={{
            background:
              "linear-gradient(270deg,transparent,rgba(255,255,255,.12))",
          }}
        />

        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#b9975b]" />

      </motion.div>

      {/* =====================================================
          TOP ROD
      ===================================================== */}

      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="h-[5px] bg-[#b9975b]" />
        <div className="h-[2px] bg-[#ead7a7]" />
        <div className="h-[5px] bg-[#7d6333]/70" />
      </div>

      {/* =====================================================
          FRAME
      ===================================================== */}

      <div className="absolute inset-5 sm:inset-8 border border-[#d6b76d]/35 z-40 pointer-events-none" />

      {/* CORNER ORNAMENTS */}

      <div className="absolute top-8 left-8 z-40 text-[#d6b76d] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute top-8 right-8 z-40 text-[#d6b76d] text-xl pointer-events-none">
        ✦
      </div>

    </motion.div>
  );
}

/* =========================================================
   MAIN WEDDING SITE
========================================================= */

export default function WeddingSite() {
  const [
    invitationOpen,
    setInvitationOpen,
  ] = useState(false);

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
     DATE REVEAL + MUSIC
  ======================================================= */

  const handleDateReveal = () => {
    setDateRevealed(true);

    const audio =
      audioRef.current;

    if (!audio) return;

    audio.currentTime =
      MUSIC_START;

    audio.volume = 0.35;

    /*
      Music starts here and DOES NOT
      have an ending timer.
    */

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
     OPEN INVITATION
  ======================================================= */

  const openInvitation = () => {
    setInvitationOpen(true);
  };

  /* =======================================================
     MUSIC TOGGLE
  ======================================================= */

  const toggleMusic = () => {
    const audio =
      audioRef.current;

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

  return (
    <main className="overflow-hidden">

      {/* ===================================================
          AUDIO

          IMPORTANT:
          loop = true
          No ending timer
      =================================================== */}

      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* ===================================================
          OPENING
      =================================================== */}

      <AnimatePresence>
        {!invitationOpen && (
          <OpeningInvitation
            onOpen={openInvitation}
            onDateReveal={
              handleDateReveal
            }
          />
        )}
      </AnimatePresence>

      {/* ===================================================
          MUSIC BUTTON
      =================================================== */}

      {invitationOpen && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={toggleMusic}
          aria-label="Toggle music"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald text-cream border border-gold shadow-lg flex items-center justify-center"
        >
          {musicPlaying
            ? "♫"
            : "🔇"}
        </motion.button>
      )}

      {/* ===================================================
          NAVIGATION
      =================================================== */}

      <header className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur border-b border-emerald/10">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          <a
            href="#home"
            className="font-display text-2xl text-emerald"
          >
            H{" "}
            <span className="text-gold">
              &
            </span>{" "}
            S
          </a>

          <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase text-emerald">

            <a
              href="#story"
              className="hover:text-gold transition"
            >
              Story
            </a>

            <a
              href="#celebrations"
              className="hover:text-gold transition"
            >
              Celebrations
            </a>

            <a
              href="#gallery"
              className="hover:text-gold transition"
            >
              Gallery
            </a>

            <a
              href="#family"
              className="hover:text-gold transition"
            >
              Family
            </a>

            <a
              href="#travel"
              className="hover:text-gold transition"
            >
              Travel
            </a>

            <a
              href="#rsvp"
              className="hover:text-gold transition"
            >
              RSVP
            </a>

          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.2em] uppercase border border-emerald px-5 py-2 text-emerald hover:bg-emerald hover:text-cream transition"
          >
            RSVP
          </a>

        </nav>
      </header>

      {/* ===================================================
          HERO
      =================================================== */}

      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center pt-16 bg-cream wedding-pattern"
      >

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sand/50" />

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
            duration: 1.2,
          }}
          className="relative text-center px-5"
        >

          <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-10">
            With the blessings of our families
          </p>

          <h1 className="font-display text-[80px] sm:text-[145px] leading-[0.75] text-emerald">
            Harit

            <span className="block text-5xl sm:text-7xl my-7 text-gold">
              &
            </span>

            Shreya
          </h1>

          <p className="font-display text-2xl sm:text-3xl mt-12 text-emerald-dark">
            are getting married
          </p>

          <div className="flex items-center justify-center gap-4 mt-7">

            <span className="h-px w-10 bg-gold" />

            <p className="tracking-[0.3em] text-[10px] text-emerald">
              12 · NOVEMBER · 2026
            </p>

            <span className="h-px w-10 bg-gold" />

          </div>

          <p className="tracking-[0.35em] text-[10px] uppercase text-emerald/60 mt-3">
            Pathankot
          </p>

        </motion.div>
      </section>

      {/* ===================================================
          COUNTDOWN
      =================================================== */}

      <section className="section-pad bg-emerald text-cream">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-champagne mb-6">
            Counting every moment
          </p>

          <h2 className="font-display text-4xl sm:text-5xl mb-10">
            Until our forever begins
          </h2>

          <Countdown
            active={dateRevealed}
          />

        </div>

      </section>

      {/* ===================================================
          STORY
      =================================================== */}

      <section
        id="story"
        className="section-pad bg-cream"
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
            className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-emerald-dark/80"
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

      {/* ===================================================
          EVENTS
      =================================================== */}

      <section
        id="celebrations"
        className="section-pad bg-sand/50"
      >

        <div className="max-w-6xl mx-auto px-5">

          <SectionTitle
            eyebrow="Save the dates"
            title="The Celebrations"
          />

          <div className="grid md:grid-cols-2 gap-6">

            {events.map(
              (event, index) => (
                <motion.article
                  key={event.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay:
                      index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative bg-cream border border-gold/35 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500"
                >

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald via-gold to-emerald" />

                  <p className="text-[10px] tracking-[0.35em] text-gold">
                    {event.date}
                  </p>

                  <h3 className="font-display text-3xl sm:text-4xl text-emerald mt-4">
                    {event.title}
                  </h3>

                  {event.time && (
                    <p className="text-sm text-gold mt-3">
                      {event.time}
                    </p>
                  )}

                  <p className="text-xs tracking-[0.16em] uppercase text-emerald/60 mt-4">
                    {event.location}
                  </p>

                  {event.address && (
                    <p className="text-sm leading-6 text-emerald/60 mt-3">
                      {event.address}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-7 text-emerald-dark/70">
                    {event.description}
                  </p>

                  <a
                    href={event.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase text-emerald border-b border-gold pb-1"
                  >
                    View location →
                  </a>

                </motion.article>
              )
            )}

          </div>

        </div>

      </section>

      {/* ===================================================
          GALLERY
      =================================================== */}

      <section
        id="gallery"
        className="section-pad bg-cream"
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

      {/* ===================================================
          FAMILY
      =================================================== */}

      <section
        id="family"
        className="section-pad bg-sand/45"
      >

        <div className="max-w-5xl mx-auto px-5 text-center">

          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-gold/35 bg-cream p-10">

              <p className="text-[10px] tracking-[0.35em] uppercase text-gold">
                The Groom
              </p>

              <h3 className="font-display text-4xl text-emerald mt-5">
                Harit Sharma
              </h3>

              <p className="font-display text-xl text-emerald/60 mt-5">
                Son of
              </p>

              <p className="text-sm mt-2 text-emerald">
                Yogesh Sharma & Manju
              </p>

            </div>

            <div className="border border-gold/35 bg-cream p-10">

              <p className="text-[10px] tracking-[0.35em] uppercase text-gold">
                The Bride
              </p>

              <h3 className="font-display text-4xl text-emerald mt-5">
                Shreya
              </h3>

              <p className="font-display text-xl text-emerald/60 mt-5">
                Daughter of
              </p>

              <p className="text-sm mt-2 text-emerald">
                Satish Kumar & Davina
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          TRAVEL
      =================================================== */}

      <section
        id="travel"
        className="section-pad bg-cream"
      >

        <div className="max-w-5xl mx-auto px-5">

          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-gold/35 p-9 bg-sand/30">

              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                Pre-Wedding
              </p>

              <h3 className="font-display text-4xl text-emerald mt-4">
                Ambala
              </h3>

              <p className="mt-4 text-sm leading-7 text-emerald/65">
                Our celebrations before
                the wedding will take
                place in Ambala City.
              </p>

            </div>

            <div className="border border-gold/35 p-9 bg-sand/30">

              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                Wedding
              </p>

              <h3 className="font-display text-4xl text-emerald mt-4">
                Pathankot
              </h3>

              <p className="mt-4 text-sm leading-7 text-emerald/65">
                We head to Pathankot for
                our wedding on 12 November
                2026.
              </p>

              <a
                href="https://share.google/dW1Nnjn30UPZdNYky"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase border-b border-gold pb-1 text-emerald"
              >
                Wedding venue →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          RSVP
      =================================================== */}

      <section
        id="rsvp"
        className="section-pad bg-emerald text-cream"
      >

        <div className="max-w-2xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-champagne">
            We'd love to celebrate
            with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div className="gold-rule mx-auto mt-6 mb-8" />

          <p className="text-sm leading-7 text-cream/70">
            Your presence would mean
            the world to us. Please join
            us as we begin this beautiful
            new chapter.
          </p>

          <button className="mt-9 bg-cream text-emerald px-8 py-3 text-[10px] tracking-[0.3em] uppercase">
            RSVP Coming Soon
          </button>

        </div>

      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-emerald-dark text-cream text-center py-16 px-5">

        <p className="font-display text-6xl text-champagne">
          H{" "}
          <span className="text-cream">
            &
          </span>{" "}
          S
        </p>

        <p className="font-display text-3xl mt-4">
          Harit & Shreya
        </p>

        <p className="text-[10px] tracking-[0.35em] uppercase text-cream/50 mt-5">
          12 November 2026 ·
          Pathankot
        </p>

        <p className="text-xs text-cream/30 mt-10">
          Made with love.
        </p>

      </footer>

    </main>
  );
}