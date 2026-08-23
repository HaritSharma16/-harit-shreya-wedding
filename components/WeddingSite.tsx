"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   EVENTS
========================================================= */

const commonEvents = [
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

const MUSIC_START = 8;
const MUSIC_END = 36;

/* =========================================================
   TYPES
========================================================= */

type Side = "groom" | "bride" | null;

/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown() {
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
  }, [weddingDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
      {Object.entries(time).map(
        ([label, value]) => (
          <div
            key={label}
            className="border border-[#d6b76d]/40 bg-black/10 px-2 py-4 sm:px-6 sm:py-6"
          >
            <div className="font-display text-3xl sm:text-5xl text-[#d6b76d]">
              {String(value).padStart(
                2,
                "0"
              )}
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

      <div className="w-16 h-px bg-[#b9975b] mx-auto mt-5" />
    </div>
  );
}

/* =========================================================
   SIDE SELECTION
========================================================= */

function SideSelection({
  onSelect,
}: {
  onSelect: (side: "groom" | "bride") => void;
}) {
  return (
    <motion.section
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
      className="fixed inset-0 z-[90] bg-[#f4eee3] flex items-center justify-center overflow-hidden"
    >
      {/* Background texture */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#b9975b]/20 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#17463d]/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 text-center">

        {/* Ornament */}

        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="text-[#b9975b] text-3xl mb-8"
        >
          ✦
        </motion.div>

        <p className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-[#17463d]/60">
          Welcome to our wedding
        </p>

        <h1 className="font-display text-5xl sm:text-7xl text-[#17463d] mt-5">
          Whose side are you on?
        </h1>

        <p className="font-display text-xl sm:text-2xl text-[#17463d]/60 mt-5">
          Choose your side to continue
        </p>

        {/* Side cards */}

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">

          {/* Groom */}

          <motion.button
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              onSelect("groom")
            }
            className="group relative overflow-hidden border border-[#b9975b]/50 bg-[#17463d] text-white px-8 py-12 sm:py-16"
          >

            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/20 via-transparent to-black/30" />

            <div className="relative z-10">

              <p className="text-[9px] tracking-[0.4em] uppercase text-[#d6b76d]">
                Groom's Side
              </p>

              <h2 className="font-display text-5xl sm:text-6xl mt-5">
                Harit
              </h2>

              <div className="w-12 h-px bg-[#d6b76d] mx-auto my-5" />

              <p className="text-[9px] tracking-[0.3em] uppercase text-white/60">
                Enter the celebration
              </p>

              <span className="block mt-8 text-[#d6b76d] text-xl group-hover:translate-x-2 transition-transform">
                →
              </span>

            </div>
          </motion.button>

          {/* Bride */}

          <motion.button
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              onSelect("bride")
            }
            className="group relative overflow-hidden border border-[#b9975b]/50 bg-[#f8f1e5] text-[#17463d] px-8 py-12 sm:py-16"
          >

            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#b9975b]/20 via-transparent to-[#17463d]/10" />

            <div className="relative z-10">

              <p className="text-[9px] tracking-[0.4em] uppercase text-[#b9975b]">
                Bride's Side
              </p>

              <h2 className="font-display text-5xl sm:text-6xl mt-5">
                Shreya
              </h2>

              <div className="w-12 h-px bg-[#b9975b] mx-auto my-5" />

              <p className="text-[9px] tracking-[0.3em] uppercase text-[#17463d]/50">
                Enter the celebration
              </p>

              <span className="block mt-8 text-[#b9975b] text-xl group-hover:translate-x-2 transition-transform">
                →
              </span>

            </div>
          </motion.button>

        </div>

        <p className="text-[8px] tracking-[0.35em] uppercase text-[#17463d]/40 mt-10">
          Your celebration awaits
        </p>

      </div>
    </motion.section>
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
  const [opening, setOpening] =
    useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
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
        duration: 0.6,
      }}
      onClick={handleOpen}
      className="fixed inset-0 z-[100] overflow-hidden cursor-pointer"
    >

      {/* Center */}

      <div className="absolute inset-0 bg-[#f4eee3]" />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: opening ? 1.04 : 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >

        <div className="text-center px-6">

          <motion.div
            animate={{
              opacity: [
                0.6,
                1,
                0.6,
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
            className="text-[#b99a5b] text-3xl mb-7"
          >
            ✦
          </motion.div>

          <p className="text-[8px] sm:text-[10px] tracking-[0.5em] uppercase text-[#17463d]/60">
            With the blessings of our families
          </p>

          <h1 className="font-display text-[70px] sm:text-[120px] leading-[0.72] text-[#17463d] mt-9">

            Harit

            <span className="block text-4xl sm:text-6xl text-[#b99a5b] my-6">
              &
            </span>

            Shreya

          </h1>

          <p className="font-display text-xl sm:text-3xl text-[#17463d]/75 mt-10">
            are getting married
          </p>

          {/* Date intentionally hidden */}

          <div className="flex items-center justify-center gap-4 mt-8">

            <span className="w-10 sm:w-16 h-px bg-[#b99a5b]" />

            <span className="font-display text-xl sm:text-2xl text-[#17463d]">
              A new chapter begins
            </span>

            <span className="w-10 sm:w-16 h-px bg-[#b99a5b]" />

          </div>

          <p className="text-[8px] sm:text-[9px] tracking-[0.45em] uppercase text-[#17463d]/50 mt-4">
            Pathankot
          </p>

          <motion.div
            animate={{
              opacity: [
                0.35,
                1,
                0.35,
              ],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-12"
          >

            <div className="w-10 h-10 rounded-full border border-[#b99a5b] flex items-center justify-center mx-auto">

              <span className="text-[#b99a5b] text-sm">
                ↓
              </span>

            </div>

            <p className="text-[8px] tracking-[0.4em] uppercase text-[#17463d]/60 mt-3">
              Tap to open
            </p>

          </motion.div>

        </div>

      </motion.div>

      {/* LEFT CURTAIN */}

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
            "linear-gradient(90deg, #0b3029 0%, #17463d 35%, #0e382f 70%, #092a24 100%)",
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
                  width: "12%",
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.22), rgba(255,255,255,0.06), rgba(0,0,0,0.22))",
                  filter: "blur(1px)",
                }}
              />
            )
          )}

        </div>

        <div
          className="absolute top-0 bottom-0 right-0 w-[20%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.12))",
          }}
        />

        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#b99a5b]" />

      </motion.div>

      {/* RIGHT CURTAIN */}

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
            "linear-gradient(270deg, #0b3029 0%, #17463d 35%, #0e382f 70%, #092a24 100%)",
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
                  width: "12%",
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.22), rgba(255,255,255,0.06), rgba(0,0,0,0.22))",
                  filter: "blur(1px)",
                }}
              />
            )
          )}

        </div>

        <div
          className="absolute top-0 bottom-0 left-0 w-[20%]"
          style={{
            background:
              "linear-gradient(270deg, transparent, rgba(255,255,255,0.12))",
          }}
        />

        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#b99a5b]" />

      </motion.div>

      {/* TOP ROD */}

      <div className="absolute top-0 left-0 right-0 z-30">

        <div className="h-[5px] bg-[#b99a5b]" />

        <div className="h-[2px] bg-[#ead7a7]" />

        <div className="h-[5px] bg-[#7d6333]/60" />

      </div>

      {/* FRAME */}

      <div className="absolute inset-5 sm:inset-8 border border-[#d6b76d]/35 z-40 pointer-events-none" />

      {/* Bottom */}

      <motion.div
        animate={{
          opacity: opening
            ? 0
            : 1,
        }}
        className="absolute bottom-7 left-0 right-0 z-40 text-center pointer-events-none"
      >
        <span className="text-[#b99a5b] text-sm">
          ✦
        </span>
      </motion.div>

    </motion.div>
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
  ] = useState<Side>(null);

  const [
    musicPlaying,
    setMusicPlaying,
  ] = useState(false);

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const stopTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const fadeTimerRef =
    useRef<ReturnType<typeof setInterval> | null>(
      null
    );

  /* =======================================================
     MUSIC FADE
  ======================================================= */

  const fadeAudio = (
    audio: HTMLAudioElement,
    from: number,
    to: number,
    duration: number
  ) => {

    const steps = 30;

    const stepTime =
      duration / steps;

    const volumeStep =
      (to - from) / steps;

    let currentStep = 0;

    audio.volume = from;

    if (fadeTimerRef.current) {
      clearInterval(
        fadeTimerRef.current
      );
    }

    fadeTimerRef.current =
      setInterval(() => {

        currentStep++;

        audio.volume =
          Math.max(
            0,
            Math.min(
              1,
              from +
                volumeStep *
                  currentStep
            )
          );

        if (
          currentStep >=
          steps
        ) {

          if (
            fadeTimerRef.current
          ) {
            clearInterval(
              fadeTimerRef.current
            );

            fadeTimerRef.current =
              null;
          }

        }

      }, stepTime);
  };

  /* =======================================================
     OPEN INVITATION
  ======================================================= */

  const openInvitation = () => {

    setInvitationOpen(true);

    const audio =
      audioRef.current;

    if (!audio) return;

    if (stopTimerRef.current) {
      clearTimeout(
        stopTimerRef.current
      );
    }

    audio.currentTime =
      MUSIC_START;

    audio.volume = 0;

    audio
      .play()
      .then(() => {

        setMusicPlaying(true);

        fadeAudio(
          audio,
          0,
          0.35,
          2000
        );

        stopTimerRef.current =
          setTimeout(() => {

            const currentVolume =
              audio.volume;

            fadeAudio(
              audio,
              currentVolume,
              0,
              2500
            );

            setTimeout(() => {

              audio.pause();

              audio.currentTime =
                MUSIC_START;

              setMusicPlaying(
                false
              );

            }, 2500);

          }, (MUSIC_END - MUSIC_START) * 1000);

      })
      .catch(() => {
        setMusicPlaying(false);
      });
  };

  /* =======================================================
     SIDE SELECT
  ======================================================= */

  const handleSideSelect = (
    side: "groom" | "bride"
  ) => {

    setSelectedSide(side);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

    if (
      audio.currentTime >=
      MUSIC_END
    ) {
      audio.currentTime =
        MUSIC_START;
    }

    audio
      .play()
      .then(() => {
        setMusicPlaying(true);
      })
      .catch(() => {});
  };

  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {

    return () => {

      if (
        stopTimerRef.current
      ) {
        clearTimeout(
          stopTimerRef.current
        );
      }

      if (
        fadeTimerRef.current
      ) {
        clearInterval(
          fadeTimerRef.current
        );
      }

    };

  }, []);

  /* =======================================================
     CURRENT SIDE
  ======================================================= */

  const sideName =
    selectedSide === "groom"
      ? "Harit's Side"
      : "Shreya's Side";

  const personName =
    selectedSide === "groom"
      ? "Harit"
      : "Shreya";

  return (
    <main className="overflow-hidden">

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* ===================================================
          OPENING CURTAIN
      =================================================== */}

      <AnimatePresence>
        {!invitationOpen && (
          <OpeningInvitation
            onOpen={
              openInvitation
            }
          />
        )}
      </AnimatePresence>

      {/* ===================================================
          SIDE SELECTION
      =================================================== */}

      <AnimatePresence>
        {invitationOpen &&
          !selectedSide && (
            <SideSelection
              onSelect={
                handleSideSelect
              }
            />
          )}
      </AnimatePresence>

      {/* ===================================================
          MUSIC BUTTON
      =================================================== */}

      <AnimatePresence>
        {selectedSide && (
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
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#17463d] text-white border border-[#b9975b] shadow-lg flex items-center justify-center"
          >
            {musicPlaying
              ? "♫"
              : "🔇"}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ===================================================
          WEBSITE
      =================================================== */}

      {selectedSide && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >

          {/* =================================================
              NAVIGATION
          ================================================= */}

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

              <button
                onClick={() =>
                  setSelectedSide(null)
                }
                className="text-[9px] tracking-[0.2em] uppercase border border-[#17463d] px-4 py-2 text-[#17463d]"
              >
                Change Side
              </button>

            </nav>

          </header>

          {/* =================================================
              HERO
          ================================================= */}

          <section
            id="home"
            className="min-h-screen relative flex items-center justify-center pt-16 bg-[#f4eee3]"
          >

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e8dcc8]/50" />

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

              <p className="text-[10px] tracking-[0.45em] uppercase text-[#b9975b] mb-8">
                {sideName}
              </p>

              <h1 className="font-display text-[80px] sm:text-[145px] leading-[0.75] text-[#17463d]">

                Harit

                <span className="block text-5xl sm:text-7xl my-7 text-[#b9975b]">
                  &
                </span>

                Shreya

              </h1>

              <p className="font-display text-2xl sm:text-3xl mt-12 text-[#17463d]/80">
                are getting married
              </p>

              {/* DATE STILL HIDDEN */}

              <div className="flex items-center justify-center gap-4 mt-8">

                <span className="h-px w-10 bg-[#b9975b]" />

                <p className="font-display text-xl text-[#17463d]">
                  Our forever begins soon
                </p>

                <span className="h-px w-10 bg-[#b9975b]" />

              </div>

              <p className="tracking-[0.35em] text-[10px] uppercase text-[#17463d]/50 mt-4">
                Pathankot
              </p>

            </motion.div>

          </section>

          {/* =================================================
              COUNTDOWN
          ================================================= */}

          <section className="py-24 bg-[#17463d] text-white">

            <div className="max-w-5xl mx-auto px-5 text-center">

              <p className="text-[10px] tracking-[0.4em] uppercase text-[#d6b76d] mb-6">
                Counting every moment
              </p>

              <h2 className="font-display text-4xl sm:text-5xl mb-10">
                Until our forever begins
              </h2>

              <Countdown />

            </div>

          </section>

          {/* =================================================
              STORY
          ================================================= */}

          <section
            id="story"
            className="py-28 bg-[#f4eee3]"
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
                className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-[#17463d]/80"
              >

                <p>
                  It all started with two
                  people, two stories,
                  and a little bit of
                  destiny.
                </p>

                <p className="mt-7">
                  From the first
                  conversations to the
                  day we decided to spend
                  forever together, every
                  chapter has brought us
                  closer to this moment.
                </p>

                <p className="mt-7">
                  And now, surrounded by
                  the people we love most,
                  we are ready to begin
                  our next chapter.
                </p>

              </motion.div>

            </div>

          </section>

          {/* =================================================
              EVENTS
          ================================================= */}

          <section
            id="celebrations"
            className="py-28 bg-[#e8dcc8]/40"
          >

            <div className="max-w-6xl mx-auto px-5">

              <SectionTitle
                eyebrow={`${personName}'s celebrations`}
                title="The Celebrations"
              />

              <div className="grid md:grid-cols-2 gap-6">

                {commonEvents.map(
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
                      className="relative bg-[#f4eee3] border border-[#b9975b]/35 p-8 sm:p-10 shadow-sm"
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

          {/* =================================================
              GALLERY
          ================================================= */}

          <section
            id="gallery"
            className="py-28 bg-[#f4eee3]"
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

          {/* =================================================
              FAMILY
          ================================================= */}

          <section
            id="family"
            className="py-28 bg-[#e8dcc8]/40"
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
                    Yogesh Sharma & Manju
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
                    Satish Kumar & Davina
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              TRAVEL
          ================================================= */}

          <section
            id="travel"
            className="py-28 bg-[#f4eee3]"
          >

            <div className="max-w-5xl mx-auto px-5">

              <SectionTitle
                eyebrow="For our guests"
                title="Travel & Stay"
              />

              <div className="grid md:grid-cols-2 gap-7">

                <div className="border border-[#b9975b]/35 p-9 bg-[#e8dcc8]/30">

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

                <div className="border border-[#b9975b]/35 p-9 bg-[#e8dcc8]/30">

                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                    Wedding
                  </p>

                  <h3 className="font-display text-4xl text-[#17463d] mt-4">
                    Pathankot
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                    We head to Pathankot for
                    our wedding.
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

          {/* =================================================
              RSVP
          ================================================= */}

          <section
            id="rsvp"
            className="py-28 bg-[#17463d] text-white"
          >

            <div className="max-w-2xl mx-auto px-5 text-center">

              <p className="text-[10px] tracking-[0.4em] uppercase text-[#d6b76d]">
                We'd love to celebrate
                with you
              </p>

              <h2 className="font-display text-5xl sm:text-6xl mt-4">
                RSVP
              </h2>

              <div className="w-16 h-px bg-[#d6b76d] mx-auto mt-6 mb-8" />

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

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="bg-[#0b3029] text-white text-center py-16 px-5">

            <p className="font-display text-6xl text-[#d6b76d]">
              H{" "}
              <span className="text-white">
                &
              </span>{" "}
              S
            </p>

            <p className="font-display text-3xl mt-4">
              Harit & Shreya
            </p>

            <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mt-5">
              A new chapter begins ·
              Pathankot
            </p>

            <p className="text-xs text-white/30 mt-10">
              Made with love.
            </p>

          </footer>

        </motion.div>
      )}

    </main>
  );
}