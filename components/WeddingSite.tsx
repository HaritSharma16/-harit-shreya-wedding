"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   WEDDING EVENTS
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
   MUSIC SETTINGS

   Put file here:

   public/music/wedding-music.mp3

========================================================= */

const MUSIC_START = 8;
const MUSIC_END = 36;

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
   OPENING INVITATION
   DATE REVEAL + FULL CURTAINS
========================================================= */

function OpeningInvitation({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const [revealing, setRevealing] =
    useState(false);

  const [dateRevealed, setDateRevealed] =
    useState(false);

  const [opening, setOpening] =
    useState(false);

  const handleReveal = () => {
    if (
      revealing ||
      dateRevealed ||
      opening
    ) {
      return;
    }

    setRevealing(true);

    /* -----------------------------------------
       STEP 1
       Small pause before date reveal
    ----------------------------------------- */

    setTimeout(() => {
      setDateRevealed(true);
      setRevealing(false);
    }, 700);

    /* -----------------------------------------
       STEP 2
       Let date remain visible
    ----------------------------------------- */

    setTimeout(() => {
      setOpening(true);
    }, 3900);

    /* -----------------------------------------
       STEP 3
       Remove opening screen
    ----------------------------------------- */

    setTimeout(() => {
      onOpen();
    }, 5700);
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

      {/* Soft central glow */}

      <motion.div
        animate={{
          scale: revealing
            ? 1.2
            : 1,
          opacity: revealing
            ? 0.9
            : 0.6,
        }}
        transition={{
          duration: 2,
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(185,154,91,0.14), transparent 55%)",
        }}
      />

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: opening
            ? 0
            : 1,
          y: 0,
          scale: revealing
            ? 1.02
            : 1,
        }}
        transition={{
          duration: 0.9,
        }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >

        <div className="text-center px-6 max-w-3xl">

          {/* =================================================
              ORNAMENT
          ================================================= */}

          <motion.div
            animate={{
              rotate: [
                0,
                5,
                -5,
                0,
              ],
              opacity: [
                0.6,
                1,
                0.6,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="text-[#b99a5b] text-3xl mb-8"
          >
            ✦
          </motion.div>

          {/* =================================================
              BLESSINGS
          ================================================= */}

          <motion.p
            animate={{
              opacity: dateRevealed
                ? 0
                : 1,
              y: dateRevealed
                ? -10
                : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-[8px] sm:text-[10px] tracking-[0.5em] uppercase text-[#17463d]/60"
          >
            With the blessings of our families
          </motion.p>

          {/* =================================================
              NAMES
          ================================================= */}

          <motion.h1
            animate={{
              scale: dateRevealed
                ? 0.82
                : 1,
              y: dateRevealed
                ? -35
                : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="font-display text-[68px] sm:text-[120px] leading-[0.72] text-[#17463d] mt-9"
          >
            Harit

            <span className="block text-4xl sm:text-6xl text-[#b99a5b] my-6">
              &
            </span>

            Shreya
          </motion.h1>

          {/* =================================================
              GETTING MARRIED
          ================================================= */}

          <motion.p
            animate={{
              opacity: dateRevealed
                ? 0
                : 1,
              y: dateRevealed
                ? -20
                : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="font-display text-xl sm:text-3xl text-[#17463d]/75 mt-10"
          >
            are getting married
          </motion.p>

          {/* =================================================
              DYNAMIC CONTENT
          ================================================= */}

          <AnimatePresence mode="wait">

            {/* ===============================================
                BEFORE REVEAL
            =============================================== */}

            {!dateRevealed &&
              !revealing && (
                <motion.div
                  key="secret"
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
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="mt-12"
                >

                  <div className="flex items-center justify-center gap-4">
                    <span className="w-10 sm:w-16 h-px bg-[#b99a5b]" />

                    <span className="text-[#b99a5b] text-sm">
                      ✦
                    </span>

                    <span className="w-10 sm:w-16 h-px bg-[#b99a5b]" />
                  </div>

                  <p className="font-display text-xl sm:text-2xl text-[#17463d] mt-7">
                    A little secret awaits...
                  </p>

                  <p className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#17463d]/50 mt-3">
                    Our wedding date is yet to be revealed
                  </p>

                  {/* Reveal button */}

                  <motion.button
                    onClick={
                      handleReveal
                    }
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="mt-9 px-8 sm:px-10 py-4 border border-[#b99a5b] text-[#17463d] text-[9px] sm:text-[10px] tracking-[0.35em] uppercase bg-transparent hover:bg-[#17463d] hover:text-[#f4eee3] transition-all duration-500"
                  >
                    Reveal the date
                  </motion.button>

                </motion.div>
              )}

            {/* ===============================================
                REVEALING
            =============================================== */}

            {revealing && (
              <motion.div
                key="revealing"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="mt-12"
              >

                <p className="text-[9px] tracking-[0.4em] uppercase text-[#17463d]/50">
                  The day we've been waiting for...
                </p>

                <motion.div
                  animate={{
                    opacity: [
                      0.3,
                      1,
                      0.3,
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="text-[#b99a5b] text-2xl mt-6"
                >
                  ✦
                </motion.div>

              </motion.div>
            )}

            {/* ===============================================
                DATE REVEALED
            =============================================== */}

            {dateRevealed && (
              <motion.div
                key="date"
                initial={{
                  opacity: 0,
                  scale: 0.65,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="mt-4 sm:mt-7"
              >

                <p className="text-[8px] sm:text-[9px] tracking-[0.45em] uppercase text-[#17463d]/50 mb-5">
                  The day we've been waiting for
                </p>

                {/* Day */}

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
                    delay: 0.25,
                  }}
                  className="font-display text-[65px] sm:text-[100px] leading-none text-[#17463d]"
                >
                  12
                </motion.div>

                {/* Month */}

                <motion.div
                  initial={{
                    opacity: 0,
                    letterSpacing:
                      "0.8em",
                  }}
                  animate={{
                    opacity: 1,
                    letterSpacing:
                      "0.35em",
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                  }}
                  className="text-[12px] sm:text-[15px] uppercase text-[#b99a5b] mt-2"
                >
                  November
                </motion.div>

                {/* Year */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.8,
                  }}
                  className="text-[10px] sm:text-[12px] tracking-[0.45em] text-[#17463d]/60 mt-3"
                >
                  2026
                </motion.div>

                {/* Divider */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.6,
                  }}
                  className="flex items-center justify-center gap-3 mt-5"
                >
                  <span className="w-10 sm:w-16 h-px bg-[#b99a5b]" />

                  <span className="text-[#b99a5b] text-xs">
                    ✦
                  </span>

                  <span className="w-10 sm:w-16 h-px bg-[#b99a5b]" />
                </motion.div>

                {/* Location */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.2,
                  }}
                  className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase text-[#17463d]/60 mt-5"
                >
                  Pathankot
                </motion.p>

                {/* Save date */}

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.5,
                  }}
                  className="font-display text-lg text-[#17463d] mt-4"
                >
                  Save the date ♡
                </motion.p>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </motion.div>

      {/* =====================================================
          LEFT FULL CURTAIN
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
            "linear-gradient(90deg, #0b3029 0%, #17463d 35%, #0e382f 70%, #092a24 100%)",
        }}
      >

        {/* Curtain folds */}

        <div className="absolute inset-0">
          {[...Array(9)].map(
            (_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${i * 11}%`,
                  width: "13%",
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.18), rgba(255,255,255,0.06), rgba(0,0,0,0.2))",
                  filter:
                    "blur(1px)",
                }}
              />
            )
          )}
        </div>

        {/* Soft highlight */}

        <div
          className="absolute top-0 bottom-0 right-0 w-[18%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.10))",
          }}
        />

        {/* Gold edge */}

        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#b99a5b]" />

        <div className="absolute right-[3px] top-0 bottom-0 w-[1px] bg-[#ead7a7]/50" />

      </motion.div>

      {/* =====================================================
          RIGHT FULL CURTAIN
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
            "linear-gradient(270deg, #0b3029 0%, #17463d 35%, #0e382f 70%, #092a24 100%)",
        }}
      >

        {/* Curtain folds */}

        <div className="absolute inset-0">
          {[...Array(9)].map(
            (_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0"
                style={{
                  right: `${i * 11}%`,
                  width: "13%",
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.18), rgba(255,255,255,0.06), rgba(0,0,0,0.2))",
                  filter:
                    "blur(1px)",
                }}
              />
            )
          )}
        </div>

        {/* Soft highlight */}

        <div
          className="absolute top-0 bottom-0 left-0 w-[18%]"
          style={{
            background:
              "linear-gradient(270deg, transparent, rgba(255,255,255,0.10))",
          }}
        />

        {/* Gold edge */}

        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#b99a5b]" />

        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-[#ead7a7]/50" />

      </motion.div>

      {/* =====================================================
          TOP GOLD ROD
      ===================================================== */}

      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="h-[5px] bg-[#b99a5b]" />
        <div className="h-[2px] bg-[#ead7a7]" />
        <div className="h-[5px] bg-[#7d6333]/60" />
      </div>

      {/* =====================================================
          CORNER ORNAMENTS
      ===================================================== */}

      <div className="absolute top-8 left-8 z-40 text-[#d6b76d] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute top-8 right-8 z-40 text-[#d6b76d] text-xl pointer-events-none">
        ✦
      </div>

      {/* =====================================================
          OUTER FRAME
      ===================================================== */}

      <div className="absolute inset-5 sm:inset-8 border border-[#d6b76d]/35 z-40 pointer-events-none" />

      {/* =====================================================
          BOTTOM ORNAMENT
      ===================================================== */}

      <motion.div
        animate={{
          opacity: opening
            ? 0
            : 1,
        }}
        transition={{
          duration: 0.5,
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
   MAIN WEDDING SITE
========================================================= */

export default function WeddingSite() {
  const [
    invitationOpen,
    setInvitationOpen,
  ] = useState(false);

  const [
    musicPlaying,
    setMusicPlaying,
  ] = useState(false);

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const stopTimerRef =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);

  const fadeTimerRef =
    useRef<ReturnType<
      typeof setInterval
    > | null>(null);

  /* =======================================================
     FADE AUDIO
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

        audio.volume = Math.max(
          0,
          Math.min(
            1,
            from +
              volumeStep *
                currentStep
          )
        );

        if (
          currentStep >= steps
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
          }, (MUSIC_END -
            MUSIC_START) *
            1000);
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

  return (
    <main className="overflow-hidden">

      {/* ===================================================
          AUDIO
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
            onOpen={
              openInvitation
            }
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
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald text-cream border border-gold shadow-lg flex items-center justify-center"
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

          <Countdown />

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
              (
                event,
                index
              ) => (
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
                    margin:
                      "-80px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay:
                      index *
                      0.1,
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
                    href={
                      event.map
                    }
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
                      index *
                      0.1,
                  }}
                  className="overflow-hidden"
                >

                  <img
                    src={
                      photo.src
                    }
                    alt={
                      photo.alt
                    }
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

            {/* Groom */}

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
                Yogesh Sharma
                & Manju
              </p>

            </div>

            {/* Bride */}

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
                Satish Kumar
                & Davina
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