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
   MUSIC
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

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
      {Object.entries(time).map(
        ([label, value]) => (
          <div
            key={label}
            className="border border-[#d4b477]/40 bg-[#103c34]/60 px-2 py-4 sm:px-6 sm:py-6"
          >
            <div className="font-display text-3xl sm:text-5xl text-[#d4b477]">
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

      <div className="h-px w-16 bg-[#b9975b] mx-auto mt-5" />
    </div>
  );
}

/* =========================================================
   CURTAIN OPENING
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
    }, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onClick={handleOpen}
      className="fixed inset-0 z-[100] overflow-hidden cursor-pointer"
    >

      {/* Background */}

      <div className="absolute inset-0 bg-[#f6f0e6]" />


      {/* Invitation behind curtain */}

      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: opening ? 1 : 0,
            scale: opening ? 1 : 0.9,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
          }}
          className="text-center text-[#17463d] px-6"
        >

          <p className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase mb-8">
            With the blessings of our families
          </p>

          <h1 className="font-display text-7xl sm:text-9xl leading-none">
            Harit

            <span className="block text-4xl sm:text-6xl text-[#b9975b] my-5">
              &
            </span>

            Shreya
          </h1>

          <p className="font-display text-2xl mt-10">
            are getting married
          </p>

          <div className="flex items-center justify-center gap-4 mt-7">

            <span className="w-12 h-px bg-[#b9975b]" />

            <span className="text-[10px] tracking-[0.35em]">
              12 · NOVEMBER · 2026
            </span>

            <span className="w-12 h-px bg-[#b9975b]" />

          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase mt-4 opacity-60">
            Pathankot
          </p>

        </motion.div>

      </div>


      {/* =====================================================
          LEFT CURTAIN
      ===================================================== */}

      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: opening ? "-100%" : "0%",
        }}
        transition={{
          duration: 1.6,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#16453c] z-20 overflow-hidden"
      >

        {/* Curtain folds */}

        <div className="absolute inset-0 opacity-20">

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-24 bg-black/20"
              style={{
                left: `${i * 14}%`,
              }}
            />
          ))}

        </div>

        {/* Gold edge */}

        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#b9975b]" />

      </motion.div>


      {/* =====================================================
          RIGHT CURTAIN
      ===================================================== */}

      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: opening ? "100%" : "0%",
        }}
        transition={{
          duration: 1.6,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#16453c] z-20 overflow-hidden"
      >

        {/* Curtain folds */}

        <div className="absolute inset-0 opacity-20">

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-24 bg-black/20"
              style={{
                right: `${i * 14}%`,
              }}
            />
          ))}

        </div>

        {/* Gold edge */}

        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#b9975b]" />

      </motion.div>


      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <motion.div
        animate={{
          opacity: opening ? 0 : 1,
          scale: opening ? 0.8 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
      >

        <div className="text-center text-[#f6f0e6]">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[#d4b477] text-3xl mb-8"
          >
            ✦
          </motion.div>

          <p className="font-display text-4xl sm:text-6xl">
            Harit
          </p>

          <p className="font-display text-3xl text-[#d4b477] my-3">
            &
          </p>

          <p className="font-display text-4xl sm:text-6xl">
            Shreya
          </p>

          {/* Tap */}

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-14"
          >

            <div className="w-10 h-10 rounded-full border border-[#d4b477] flex items-center justify-center mx-auto">

              <span className="text-[#d4b477]">
                ↓
              </span>

            </div>

            <p className="text-[9px] tracking-[0.4em] uppercase mt-4">
              Tap to open
            </p>

          </motion.div>

        </div>

      </motion.div>


      {/* Border */}

      <div className="absolute top-5 left-5 right-5 bottom-5 border border-[#d4b477]/30 z-40 pointer-events-none" />

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
    useRef<NodeJS.Timeout | null>(null);

  const fadeTimerRef =
    useRef<NodeJS.Timeout | null>(null);


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

        if (currentStep >= steps) {

          if (fadeTimerRef.current) {
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

              setMusicPlaying(false);

            }, 2500);

          }, (MUSIC_END - MUSIC_START) * 1000);

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

      if (stopTimerRef.current) {
        clearTimeout(
          stopTimerRef.current
        );
      }

      if (fadeTimerRef.current) {
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
            onClick={toggleMusic}
            aria-label="Toggle music"
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#17463d] text-[#f6f0e6] border border-[#b9975b] shadow-lg flex items-center justify-center"
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

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f6f0e6]/90 backdrop-blur border-b border-[#17463d]/10">

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

            <a
              href="#story"
              className="hover:text-[#b9975b] transition"
            >
              Story
            </a>

            <a
              href="#celebrations"
              className="hover:text-[#b9975b] transition"
            >
              Celebrations
            </a>

            <a
              href="#gallery"
              className="hover:text-[#b9975b] transition"
            >
              Gallery
            </a>

            <a
              href="#family"
              className="hover:text-[#b9975b] transition"
            >
              Family
            </a>

            <a
              href="#travel"
              className="hover:text-[#b9975b] transition"
            >
              Travel
            </a>

            <a
              href="#rsvp"
              className="hover:text-[#b9975b] transition"
            >
              RSVP
            </a>

          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.2em] uppercase border border-[#17463d] px-5 py-2 text-[#17463d] hover:bg-[#17463d] hover:text-[#f6f0e6] transition"
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
        className="min-h-screen relative flex items-center justify-center pt-16 bg-[#f6f0e6]"
      >

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e7dcc8]/50" />

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

          <p className="font-display text-2xl sm:text-3xl mt-12 text-[#16453c]">
            are getting married
          </p>

          <div className="flex items-center justify-center gap-4 mt-7">

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

      </section>


      {/* ===================================================
          COUNTDOWN
      =================================================== */}

      <section className="py-20 bg-[#17463d] text-[#f6f0e6]">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4b477] mb-6">
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
        className="py-24 bg-[#f6f0e6]"
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
            className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-[#16453c]/80"
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
          EVENTS
      =================================================== */}

      <section
        id="celebrations"
        className="py-24 bg-[#e9dfcf]/50"
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative bg-[#f6f0e6] border border-[#b9975b]/35 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500"
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

                  <p className="mt-5 text-sm leading-7 text-[#16453c]/70">
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
        className="py-24 bg-[#f6f0e6]"
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
        className="py-24 bg-[#e9dfcf]/45"
      >

        <div className="max-w-5xl mx-auto px-5 text-center">

          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-[#b9975b]/35 bg-[#f6f0e6] p-10">

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

            <div className="border border-[#b9975b]/35 bg-[#f6f0e6] p-10">

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


      {/* ===================================================
          TRAVEL
      =================================================== */}

      <section
        id="travel"
        className="py-24 bg-[#f6f0e6]"
      >

        <div className="max-w-5xl mx-auto px-5">

          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-[#b9975b]/35 p-9 bg-[#e9dfcf]/30">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                Pre-Wedding
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-4">
                Ambala
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                Our celebrations before the wedding
                will take place in Ambala City.
              </p>

            </div>

            <div className="border border-[#b9975b]/35 p-9 bg-[#e9dfcf]/30">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                Wedding
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-4">
                Pathankot
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                We head to Pathankot for our wedding
                on 12 November 2026.
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
        className="py-24 bg-[#17463d] text-[#f6f0e6]"
      >

        <div className="max-w-2xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4b477]">
            We'd love to celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div className="h-px w-16 bg-[#d4b477] mx-auto mt-6 mb-8" />

          <p className="text-sm leading-7 text-white/70">
            Your presence would mean the world to us.
            Please join us as we begin this beautiful
            new chapter.
          </p>

          <button className="mt-9 bg-[#f6f0e6] text-[#17463d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase">
            RSVP Coming Soon
          </button>

        </div>

      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-[#103c34] text-[#f6f0e6] text-center py-16 px-5">

        <p className="font-display text-6xl text-[#d4b477]">
          H{" "}
          <span className="text-[#f6f0e6]">
            &
          </span>{" "}
          S
        </p>

        <p className="font-display text-3xl mt-4">
          Harit & Shreya
        </p>

        <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mt-5">
          12 November 2026 · Pathankot
        </p>

        <p className="text-xs text-white/30 mt-10">
          Made with love.
        </p>

      </footer>

    </main>
  );
}