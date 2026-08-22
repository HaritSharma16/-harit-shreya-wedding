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
   MUSIC SETTINGS

   Put your MP3 here:

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
   CINEMATIC OPENING
========================================================= */

function OpeningInvitation({
  onOpen,
}: {
  onOpen: () => void;
}) {
  const [opening, setOpening] =
    useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          delay: 0.25,
        },
      }}
      className="fixed inset-0 z-[100] bg-[#10281f] overflow-hidden"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 wedding-pattern opacity-[0.08]" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-[#c9a86a]/20 blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

      </div>


      {/* =====================================================
          OUTER BORDER
      ===================================================== */}

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
          duration: 1.5,
        }}
        className="absolute inset-8 sm:inset-12 border border-[#c9a86a]/30 pointer-events-none"
      />


      {/* =====================================================
          TOP ORNAMENT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[#c9a86a] text-xl"
      >
        ✦
      </motion.div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <motion.div
        animate={
          opening
            ? {
                scale: 1.08,
                opacity: 0,
              }
            : {
                scale: 1,
                opacity: 1,
              }
        }
        transition={{
          duration: 1,
        }}
        className="relative z-10 h-full flex items-center justify-center text-center px-6"
      >

        <div className="max-w-xl w-full">

          {/* FAMILY */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-[#c9a86a] text-[9px] sm:text-[10px] tracking-[0.5em] uppercase mb-10"
          >
            Together with their families
          </motion.p>


          {/* =================================================
              NAMES
          ================================================= */}

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
              delay: 0.8,
              duration: 1.2,
              ease: "easeOut",
            }}
          >

            <h1 className="font-display text-[72px] sm:text-[110px] leading-[0.75] text-[#f8f1e3]">
              Harit
            </h1>


            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="font-display text-4xl sm:text-5xl text-[#c9a86a] my-7"
            >
              &
            </motion.div>


            <h1 className="font-display text-[72px] sm:text-[110px] leading-[0.75] text-[#f8f1e3]">
              Shreya
            </h1>

          </motion.div>


          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.7,
              duration: 1,
            }}
            className="mt-12"
          >

            <p className="font-display text-xl sm:text-2xl text-[#f8f1e3]/80">
              are getting married
            </p>


            <div className="flex items-center justify-center gap-4 mt-5">

              <span className="w-10 h-px bg-[#c9a86a]/60" />

              <span className="text-[9px] tracking-[0.35em] text-[#c9a86a]">
                12 · NOVEMBER · 2026
              </span>

              <span className="w-10 h-px bg-[#c9a86a]/60" />

            </div>

          </motion.div>


          {/* =================================================
              OPEN BUTTON
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.2,
              duration: 1,
            }}
            className="mt-14"
          >

            <motion.button
              onClick={handleOpen}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(201,168,106,0)",
                  "0 0 25px rgba(201,168,106,0.18)",
                  "0 0 0px rgba(201,168,106,0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                },
              }}
              className="group relative px-9 py-4 border border-[#c9a86a]/70 text-[#f8f1e3] text-[9px] tracking-[0.35em] uppercase overflow-hidden"
            >

              <span className="relative z-10 group-hover:text-[#10281f] transition-colors duration-500">
                Tap to Open
              </span>

              <span className="absolute inset-0 bg-[#c9a86a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            </motion.button>

          </motion.div>


          {/* =================================================
              SMALL TEXT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.7,
            }}
            className="mt-8 text-[8px] tracking-[0.35em] uppercase text-[#f8f1e3]/30"
          >
            A new chapter begins
          </motion.div>

        </div>

      </motion.div>


      {/* =====================================================
          LEFT CURTAIN
      ===================================================== */}

      <motion.div
        animate={
          opening
            ? {
                x: "-100%",
              }
            : {
                x: 0,
              }
        }
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#10281f] z-20 pointer-events-none"
      >

        <div className="absolute inset-y-0 right-0 w-px bg-[#c9a86a]/30" />

        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[#c9a86a]/30 text-2xl">
          ❧
        </div>

      </motion.div>


      {/* =====================================================
          RIGHT CURTAIN
      ===================================================== */}

      <motion.div
        animate={
          opening
            ? {
                x: "100%",
              }
            : {
                x: 0,
              }
        }
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#10281f] z-20 pointer-events-none"
      >

        <div className="absolute inset-y-0 left-0 w-px bg-[#c9a86a]/30" />

        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[#c9a86a]/30 text-2xl rotate-180">
          ❧
        </div>

      </motion.div>


      {/* =====================================================
          TOP GOLD LINE
      ===================================================== */}

      <motion.div
        animate={
          opening
            ? {
                scaleX: 0,
              }
            : {
                scaleX: 1,
              }
        }
        transition={{
          duration: 1,
        }}
        className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-px bg-[#c9a86a]/60 z-30"
      />


      {/* =====================================================
          BOTTOM GOLD LINE
      ===================================================== */}

      <motion.div
        animate={
          opening
            ? {
                scaleX: 0,
              }
            : {
                scaleX: 1,
              }
        }
        transition={{
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-px bg-[#c9a86a]/60 z-30"
      />


      {/* =====================================================
          GOLD PARTICLES
      ===================================================== */}

      {!opening &&
        Array.from({
          length: 14,
        }).map((_, index) => (

          <motion.span
            key={index}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [
                0,
                0.5,
                0,
              ],
              y: [
                0,
                -20,
                -40,
              ],
            }}
            transition={{
              duration:
                3 + (index % 3),
              repeat: Infinity,
              delay:
                index * 0.35,
            }}
            className="absolute w-1 h-1 rounded-full bg-[#c9a86a] z-10"
            style={{
              left:
                `${10 + ((index * 17) % 80)}%`,
              top:
                `${20 + ((index * 23) % 65)}%`,
            }}
          />

        ))}

    </motion.div>
  );
}

/* =========================================================
   MAIN WEBSITE
========================================================= */

export default function WeddingSite() {

  const [invitationOpen, setInvitationOpen] =
    useState(false);

  const [musicPlaying, setMusicPlaying] =
    useState(false);

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const stopTimerRef =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);

  const fadeTimerRef =
    useRef<ReturnType<
      typeof setInterval
    > | null>(null);


  /* =======================================================
     AUDIO FADE
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


        /* Fade music in */

        fadeAudio(
          audio,
          0,
          0.35,
          2000
        );


        /* Stop after selected section */

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
     MUSIC BUTTON
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
              It all started with two people,
              two stories, and a little bit of destiny.
            </p>


            <p className="mt-7">
              From the first conversations to
              the day we decided to spend
              forever together, every chapter
              has brought us closer to this moment.
            </p>


            <p className="mt-7">
              And now, surrounded by the people
              we love most, we are ready to begin
              our next chapter.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ===================================================
          CELEBRATIONS
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
                  key={
                    event.title
                  }
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
                Our celebrations before the wedding
                will take place in Ambala City.
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
                We head to Pathankot for our wedding
                on 12 November 2026.
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
            We'd love to celebrate with you
          </p>


          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>


          <div className="gold-rule mx-auto mt-6 mb-8" />


          <p className="text-sm leading-7 text-cream/70">
            Your presence would mean the world to us.
            Please join us as we begin this beautiful
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
          12 November 2026 · Pathankot
        </p>


        <p className="text-xs text-cream/30 mt-10">
          Made with love.
        </p>

      </footer>

    </main>
  );
}