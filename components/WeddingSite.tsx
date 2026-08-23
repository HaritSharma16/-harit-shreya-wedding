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
    map:
      "https://www.google.com/maps/search/?api=1&query=Ambala%20City%20Haryana",
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

function Countdown({
  revealed,
}: {
  revealed: boolean;
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
    if (!revealed) return;

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

    return () => clearInterval(timer);
  }, [revealed, weddingDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
      {Object.entries(time).map(
        ([label, value]) => (
          <div
            key={label}
            className="border border-[#d6b76d]/40 bg-black/10 px-2 py-4 sm:px-6 sm:py-6"
          >
            <div className="font-display text-3xl sm:text-5xl text-[#d6b76d]">
              {String(value).padStart(2, "0")}
            </div>

            <div className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/50 mt-2">
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
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#b9975b] mb-4">
        {eyebrow}
      </p>

      <h2 className="font-display text-5xl sm:text-6xl text-[#17463d]">
        {title}
      </h2>

      <div className="mx-auto mt-5 w-16 h-px bg-[#b9975b]" />
    </div>
  );
}

/* =========================================================
   SCRATCH DATE REVEAL
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

  const [scratched, setScratched] =
    useState(0);

  const drawingRef =
    useRef(false);

  const revealedRef =
    useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const rect =
      canvas.getBoundingClientRect();

    const dpr =
      window.devicePixelRatio || 1;

    canvas.width =
      rect.width * dpr;

    canvas.height =
      rect.height * dpr;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    ctx.scale(dpr, dpr);

    /* Gold scratch surface */

    const gradient =
      ctx.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

    gradient.addColorStop(
      0,
      "#c8a45c"
    );

    gradient.addColorStop(
      0.5,
      "#e2c985"
    );

    gradient.addColorStop(
      1,
      "#b38b42"
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(
      0,
      0,
      rect.width,
      rect.height
    );

    /* Decorative text */

    ctx.fillStyle =
      "rgba(255,255,255,0.85)";

    ctx.textAlign = "center";

    ctx.font =
      "600 11px Arial";

    ctx.letterSpacing = "3px";

    ctx.fillText(
      "SCRATCH TO REVEAL",
      rect.width / 2,
      rect.height / 2 - 5
    );

    ctx.font =
      "10px Arial";

    ctx.fillStyle =
      "rgba(60,45,20,0.65)";

    ctx.fillText(
      "OUR WEDDING DATE",
      rect.width / 2,
      rect.height / 2 + 17
    );
  }, []);

  const scratch = (
    event:
      | React.PointerEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const rect =
      canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ("touches" in event) {
      if (!event.touches[0]) return;

      clientX =
        event.touches[0].clientX;

      clientY =
        event.touches[0].clientY;
    } else {
      clientX =
        event.clientX;

      clientY =
        event.clientY;
    }

    const x =
      clientX - rect.left;

    const y =
      clientY - rect.top;

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
      24,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.restore();

    setScratched((value) => {
      const next =
        value + 1;

      if (
        next > 45 &&
        !revealedRef.current
      ) {
        revealedRef.current =
          true;

        setTimeout(() => {
          onReveal();
        }, 300);
      }

      return next;
    });
  };

  return (
    <div className="relative w-[290px] sm:w-[360px] h-[120px] mx-auto">
      {/* Actual date underneath */}

      <div className="absolute inset-0 border border-[#b9975b]/60 bg-white flex flex-col items-center justify-center">
        <p className="text-[8px] tracking-[0.35em] uppercase text-[#17463d]/50">
          Save the Date
        </p>

        <p className="font-display text-3xl sm:text-4xl text-[#17463d] mt-2">
          12 · NOVEMBER · 2026
        </p>

        <p className="text-[8px] tracking-[0.35em] uppercase text-[#17463d]/50 mt-2">
          Pathankot
        </p>
      </div>

      {/* Scratch layer */}

      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          drawingRef.current = true;
          e.currentTarget.setPointerCapture(
            e.pointerId
          );
          scratch(e);
        }}
        onPointerMove={(e) => {
          if (
            drawingRef.current
          ) {
            scratch(e);
          }
        }}
        onPointerUp={() => {
          drawingRef.current = false;
        }}
        onPointerCancel={() => {
          drawingRef.current = false;
        }}
        onTouchStart={(e) => {
          scratch(e);
        }}
        className="absolute inset-0 w-full h-full cursor-pointer touch-none"
      />
    </div>
  );
}

/* =========================================================
   OPENING CURTAIN
========================================================= */

function OpeningInvitation({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const [selectedSide, setSelectedSide] =
    useState<
      "groom" | "bride" | null
    >(null);

  const [opening, setOpening] =
    useState(false);

  const handleSideSelect = (
    side: "groom" | "bride"
  ) => {
    if (opening) return;

    setSelectedSide(side);
  };

  const openCurtain = () => {
    if (!selectedSide || opening)
      return;

    setOpening(true);

    /*
      Curtain gets time to visually
      open before removing overlay.
    */

    setTimeout(() => {
      onOpen();
    }, 1900);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
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
          opacity: opening ? 0 : 1,
          scale: opening ? 1.04 : 1,
        }}
        transition={{
          duration: 0.7,
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
              rotate: [
                0,
                10,
                -10,
                0,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-[#b9975b] text-3xl mb-7"
          >
            ✦
          </motion.div>

          <p className="text-[8px] sm:text-[10px] tracking-[0.5em] uppercase text-[#17463d]/60">
            With the blessings of our families
          </p>

          <h1 className="font-display text-[65px] sm:text-[115px] leading-[0.72] text-[#17463d] mt-9">
            Harit

            <span className="block text-4xl sm:text-6xl text-[#b9975b] my-6">
              &
            </span>

            Shreya
          </h1>

          <p className="font-display text-xl sm:text-2xl text-[#17463d]/70 mt-9">
            are getting married
          </p>

          {/* =================================================
              SIDE SELECTION
          ================================================= */}

          <AnimatePresence mode="wait">
            {!selectedSide && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="mt-10"
              >
                <p className="text-[8px] tracking-[0.4em] uppercase text-[#17463d]/55 mb-5">
                  You are invited from
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      handleSideSelect(
                        "groom"
                      )
                    }
                    className="min-w-[170px] px-7 py-3 border border-[#17463d]/50 text-[#17463d] text-[9px] tracking-[0.25em] uppercase hover:bg-[#17463d] hover:text-[#f4eee3] transition"
                  >
                    Groom's Side
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSideSelect(
                        "bride"
                      )
                    }
                    className="min-w-[170px] px-7 py-3 border border-[#17463d]/50 text-[#17463d] text-[9px] tracking-[0.25em] uppercase hover:bg-[#17463d] hover:text-[#f4eee3] transition"
                  >
                    Bride's Side
                  </button>
                </div>
              </motion.div>
            )}

            {selectedSide && (
              <motion.div
                key="selected"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-10"
              >
                <p className="text-[8px] tracking-[0.35em] uppercase text-[#17463d]/50">
                  {selectedSide ===
                  "groom"
                    ? "Groom's Side"
                    : "Bride's Side"}
                </p>

                <button
                  type="button"
                  onClick={openCurtain}
                  className="mt-4 px-10 py-3 bg-[#17463d] text-[#f4eee3] text-[9px] tracking-[0.3em] uppercase hover:bg-[#0d332c] transition shadow-lg"
                >
                  Open Invitation
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedSide(null)
                  }
                  className="block mx-auto mt-3 text-[8px] tracking-[0.2em] uppercase text-[#17463d]/45 hover:text-[#17463d]"
                >
                  Change side
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
          duration: 1.8,
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
            "linear-gradient(90deg,#092a24 0%,#17463d 30%,#0d382f 55%,#123f35 78%,#082720 100%)",
        }}
      >
        {/* Folds */}

        <div className="absolute inset-0">
          {Array.from({
            length: 14,
          }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${i * 7.5}%`,
                width: "8%",
                background:
                  i % 2 === 0
                    ? "rgba(0,0,0,0.18)"
                    : "rgba(255,255,255,0.045)",
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-y-0 right-0 w-[20%]"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.12))",
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
          duration: 1.8,
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
            "linear-gradient(270deg,#092a24 0%,#17463d 30%,#0d382f 55%,#123f35 78%,#082720 100%)",
        }}
      >
        {/* Folds */}

        <div className="absolute inset-0">
          {Array.from({
            length: 14,
          }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                right: `${i * 7.5}%`,
                width: "8%",
                background:
                  i % 2 === 0
                    ? "rgba(0,0,0,0.18)"
                    : "rgba(255,255,255,0.045)",
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-y-0 left-0 w-[20%]"
          style={{
            background:
              "linear-gradient(270deg,transparent,rgba(255,255,255,0.12))",
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
        <div className="h-[5px] bg-[#725a30]" />
      </div>

      {/* =====================================================
          FRAME
      ===================================================== */}

      <div className="absolute inset-5 sm:inset-8 border border-[#d6b76d]/35 z-40 pointer-events-none" />

      {/* Corner ornaments */}

      <div className="absolute top-8 left-8 z-40 text-[#d6b76d] text-xl">
        ✦
      </div>

      <div className="absolute top-8 right-8 z-40 text-[#d6b76d] text-xl">
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
     OPEN INVITATION
  ======================================================= */

  const openInvitation = () => {
    setInvitationOpen(true);

    const audio =
      audioRef.current;

    if (!audio) return;

    /*
      Music starts when curtain opens.

      IMPORTANT:
      No ending timer.
      No fade out.
      It keeps playing continuously.
    */

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

  /* =======================================================
     DATE REVEAL
  ======================================================= */

  const revealDate = () => {
    setDateRevealed(true);
  };

  return (
    <main className="overflow-hidden">

      {/* ===================================================
          MUSIC
      =================================================== */}

      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* ===================================================
          CURTAIN
      =================================================== */}

      <AnimatePresence>
        {!invitationOpen && (
          <OpeningInvitation
            onOpen={openInvitation}
          />
        )}
      </AnimatePresence>

      {/* ===================================================
          MUSIC BUTTON
      =================================================== */}

      <AnimatePresence>
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
            onClick={
              toggleMusic
            }
            aria-label="Toggle music"
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#17463d] text-[#f4eee3] border border-[#b9975b] shadow-lg flex items-center justify-center"
          >
            {musicPlaying
              ? "♫"
              : "🔇"}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ===================================================
          NAVIGATION
      =================================================== */}

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f4eee3]/90 backdrop-blur border-b border-[#17463d]/10">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          <a
            href="#home"
            className="font-display text-2xl text-[#17463d]"
          >
            H{" "}
            <span className="text-[#b9975b]">
              &
            </span>{" "}
            S
          </a>

          <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase text-[#17463d]">

            <a href="#story">
              Story
            </a>

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
            className="text-[10px] tracking-[0.2em] uppercase border border-[#17463d] px-5 py-2 text-[#17463d] hover:bg-[#17463d] hover:text-[#f4eee3] transition"
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
        className="min-h-screen relative flex items-center justify-center pt-16 bg-[#f4eee3]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#eadfcf]/60" />

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
          <p className="text-[10px] tracking-[0.45em] uppercase text-[#b9975b] mb-10">
            With the blessings of our families
          </p>

          <h1 className="font-display text-[80px] sm:text-[145px] leading-[0.75] text-[#17463d]">

            Harit

            <span className="block text-5xl sm:text-7xl my-7 text-[#b9975b]">
              &
            </span>

            Shreya

          </h1>

          <p className="font-display text-2xl sm:text-3xl mt-12 text-[#17463d]">
            are getting married
          </p>

          {/* =================================================
              DATE REVEAL
          ================================================= */}

          {!dateRevealed ? (
            <div className="mt-9">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#17463d]/50 mb-5">
                A little surprise awaits
              </p>

              <ScratchDate
                onReveal={revealDate}
              />

              <p className="text-[8px] tracking-[0.3em] uppercase text-[#17463d]/40 mt-4">
                Scratch the card to reveal
              </p>
            </div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mt-9"
            >
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#b9975b]" />

                <p className="tracking-[0.3em] text-[10px] text-[#17463d]">
                  12 · NOVEMBER · 2026
                </p>

                <span className="h-px w-10 bg-[#b9975b]" />
              </div>

              <p className="tracking-[0.35em] text-[10px] uppercase text-[#17463d]/60 mt-3">
                Pathankot
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* ===================================================
          COUNTDOWN
      =================================================== */}

      <section className="py-24 bg-[#17463d] text-[#f4eee3]">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d6b76d] mb-6">
            Counting every moment
          </p>

          <h2 className="font-display text-4xl sm:text-5xl mb-10">
            Until our forever begins
          </h2>

          {!dateRevealed ? (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="font-display text-xl text-white/60"
            >
              Reveal the date above to
              start the countdown
            </motion.p>
          ) : (
            <Countdown
              revealed={dateRevealed}
            />
          )}

        </div>

      </section>

      {/* ===================================================
          STORY
      =================================================== */}

      <section
        id="story"
        className="py-24 sm:py-32 bg-[#f4eee3]"
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
            className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-[#17463d]/80"
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
        className="py-24 sm:py-32 bg-[#eadfcf]/50"
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
                  }}
                  transition={{
                    duration: 0.7,
                    delay:
                      index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative bg-[#f4eee3] border border-[#b9975b]/35 p-8 sm:p-10 shadow-sm hover:shadow-xl transition"
                >

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#17463d] via-[#b9975b] to-[#17463d]" />

                  <p className="text-[10px] tracking-[0.35em] text-[#b9975b]">
                    {event.date}
                  </p>

                  <h3 className="font-display text-3xl sm:text-4xl text-[#17463d] mt-4">
                    {event.title}
                  </h3>

                  {event.time && (
                    <p className="text-sm text-[#b9975b] mt-3">
                      {event.time}
                    </p>
                  )}

                  <p className="text-xs tracking-[0.16em] uppercase text-[#17463d]/60 mt-4">
                    {event.location}
                  </p>

                  {event.address && (
                    <p className="text-sm leading-6 text-[#17463d]/60 mt-3">
                      {event.address}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-7 text-[#17463d]/70">
                    {event.description}
                  </p>

                  <a
                    href={event.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase text-[#17463d] border-b border-[#b9975b] pb-1"
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
        className="py-24 sm:py-32 bg-[#f4eee3]"
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
        className="py-24 sm:py-32 bg-[#eadfcf]/45"
      >

        <div className="max-w-5xl mx-auto px-5 text-center">

          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-[#b9975b]/35 bg-[#f4eee3] p-10">

              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b9975b]">
                The Groom
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-5">
                Harit Sharma
              </h3>

              <p className="font-display text-xl text-[#17463d]/60 mt-5">
                Son of
              </p>

              <p className="text-sm mt-2 text-[#17463d]">
                Yogesh Sharma &
                Manju
              </p>

            </div>

            <div className="border border-[#b9975b]/35 bg-[#f4eee3] p-10">

              <p className="text-[10px] tracking-[0.35em] uppercase text-[#b9975b]">
                The Bride
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-5">
                Shreya
              </h3>

              <p className="font-display text-xl text-[#17463d]/60 mt-5">
                Daughter of
              </p>

              <p className="text-sm mt-2 text-[#17463d]">
                Satish Kumar &
                Davina
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
        className="py-24 sm:py-32 bg-[#f4eee3]"
      >

        <div className="max-w-5xl mx-auto px-5">

          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-[#b9975b]/35 p-9 bg-[#eadfcf]/30">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                Pre-Wedding
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-4">
                Ambala
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                Our celebrations before
                the wedding will take
                place in Ambala City.
              </p>

            </div>

            <div className="border border-[#b9975b]/35 p-9 bg-[#eadfcf]/30">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                Wedding
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-4">
                Pathankot
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                We head to Pathankot for
                our wedding on 12 November
                2026.
              </p>

              <a
                href="https://share.google/dW1Nnjn30UPZdNYky"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 text-[10px] tracking-[0.25em] uppercase border-b border-[#b9975b] pb-1 text-[#17463d]"
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
        className="py-24 sm:py-32 bg-[#17463d] text-[#f4eee3]"
      >

        <div className="max-w-2xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d6b76d]">
            We'd love to celebrate
            with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div className="mx-auto mt-6 mb-8 w-16 h-px bg-[#b9975b]" />

          <p className="text-sm leading-7 text-white/70">
            Your presence would mean
            the world to us. Please join
            us as we begin this beautiful
            new chapter.
          </p>

          <button className="mt-9 bg-[#f4eee3] text-[#17463d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase">
            RSVP Coming Soon
          </button>

        </div>

      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-[#0d332c] text-[#f4eee3] text-center py-16 px-5">

        <p className="font-display text-6xl text-[#d6b76d]">
          H{" "}
          <span className="text-[#f4eee3]">
            &
          </span>{" "}
          S
        </p>

        <p className="font-display text-3xl mt-4">
          Harit & Shreya
        </p>

        <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mt-5">
          12 November 2026 ·
          Pathankot
        </p>

        <p className="text-xs text-white/30 mt-10">
          Made with love.
        </p>

      </footer>

    </main>
  );
}