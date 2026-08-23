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
            className="border border-[#d5b56a]/40 bg-black/10 px-2 py-4 sm:px-6 sm:py-6"
          >
            <div className="font-display text-3xl sm:text-5xl text-[#d5b56a]">
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

      <div className="w-16 h-px bg-[#b9975b] mx-auto mt-5" />
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

  const [opening, setOpening] =
    useState(false);

  const handleReveal = () => {
  if (opening || !selectedSide) return;

  const side = selectedSide;

  setOpening(true);

  window.setTimeout(() => {
    onOpen(side);
  }, 1700);
};

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#f5eee2]">

      {/* =====================================================
          CENTER BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-[#f5eee2]" />

      {/* =====================================================
          CENTER INVITATION
      ===================================================== */}

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
            className="text-[#b9975b] text-3xl mb-6"
          >
            ✦
          </motion.div>
        <p className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase text-black/70 font-semibold mt-16 sm:mt-20">
  With the blessings of our families
</p>

<h1 className="font-display text-[65px] sm:text-[105px] leading-[0.75] text-black mt-8">
  Harit

  <span className="block text-4xl sm:text-6xl text-black my-6">
    &
  </span>

  Shreya
</h1>

<p className="font-display text-xl sm:text-2xl text-black/70 mt-9 font-semibold">
  A celebration of two families
</p>

          {/* SIDE SELECTION */}

          <div className="mt-10">

            <p className="text-[9px] tracking-[0.35em] uppercase text-black/80 mb-5 font-bold">
              Choose your side
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">

              <button
                type="button"
                onClick={() =>
                  setSelectedSide("groom")
                }
                className={`px-7 py-3 border text-[10px] tracking-[0.25em] uppercase transition-all ${
                  selectedSide === "groom"
                    ? "bg-[#b9975b] text-white border-[#17463d]"
                    : "bg-[#17463d] border-[#b9975b] text-black"
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
                    ? "bg-[#b9975b] text-white border-[#17463d]"
                    : "bg-[#17463d] border-[#b9975b] text-black"
                }`}
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
              scale: opening ? 1 : 1.04,
            }}
            whileTap={{
              scale: opening ? 1 : 0.96,
            }}
            className="mt-9 px-10 py-4 bg-[#b9975b] text-white border border-[#b9975b] text-[10px] tracking-[0.35em] uppercase shadow-lg cursor-pointer disabled:cursor-default"
          >
            {opening
              ? "Opening..."
              : "Tap to Reveal"}
          </motion.button>

          <p className="text-[8px] tracking-[0.3em] uppercase text-[#17463d]/35 mt-4">
            Your celebration awaits
          </p>

        </div>
      </motion.div>

      {/* =====================================================
          LEFT CURTAIN
          IMPORTANT: pointer-events-none
          so it doesn't block the reveal button
      ===================================================== */}

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
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,#061f1a 0%,#0c332b 20%,#17463d 48%,#0d362e 72%,#061f1a 100%)",
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
                  "linear-gradient(90deg,rgba(0,0,0,.25),rgba(255,255,255,.07),rgba(0,0,0,.25))",
                filter: "blur(0.5px)",
              }}
            />
          )
        )}

        <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#b9975b]" />

        <div className="absolute right-[4px] top-0 bottom-0 w-px bg-[#ead7a7]/50" />

      </motion.div>

      {/* =====================================================
          RIGHT CURTAIN
          IMPORTANT: pointer-events-none
      ===================================================== */}

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
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg,#061f1a 0%,#0c332b 20%,#17463d 48%,#0d362e 72%,#061f1a 100%)",
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
                  "linear-gradient(90deg,rgba(0,0,0,.25),rgba(255,255,255,.07),rgba(0,0,0,.25))",
                filter: "blur(0.5px)",
              }}
            />
          )
        )}

        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#b9975b]" />

        <div className="absolute left-[4px] top-0 bottom-0 w-px bg-[#ead7a7]/50" />

      </motion.div>

      {/* =====================================================
          GOLD TOP ROD
      ===================================================== */}

      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">

        <div className="h-[5px] bg-[#b9975b]" />

        <div className="h-[2px] bg-[#ead7a7]" />

        <div className="h-[4px] bg-[#765d31]" />

      </div>

      {/* =====================================================
          FRAME
      ===================================================== */}

      <div className="absolute inset-5 sm:inset-8 border border-[#d5b56a]/40 z-40 pointer-events-none" />

      <div className="absolute top-7 left-7 z-40 text-[#d5b56a] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute top-7 right-7 z-40 text-[#d5b56a] text-xl pointer-events-none">
        ✦
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-40 text-center pointer-events-none">
        <span className="text-[#b9975b]">
          ✦
        </span>
      </div>

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

  const [scratched, setScratched] =
    useState(0);

  const revealDate = () => {
    if (revealed) return;

    setScratched(100);

    window.setTimeout(() => {
      setRevealed(true);
      onReveal();
    }, 500);
  };

  return (
    <section className="py-24 bg-[#eee3d2]">

      <div className="max-w-3xl mx-auto px-5 text-center">

        <p className="text-[10px] tracking-[0.4em] uppercase text-[#b9975b]">
          A little secret
        </p>

        <h2 className="font-display text-5xl sm:text-6xl text-[#17463d] mt-4">
          When is the big day?
        </h2>

        <div className="w-16 h-px bg-[#b9975b] mx-auto mt-6" />

        <p className="text-sm text-[#17463d]/60 mt-7">
          Some dates are meant to be discovered.
        </p>

        <div className="mt-10 mx-auto max-w-md">

          <div
            className="relative h-52 sm:h-60 border border-[#b9975b]/50 bg-[#f5eee2] overflow-hidden cursor-pointer shadow-lg"
            onClick={revealDate}
          >

            {/* ACTUAL DATE */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div>

                <p className="text-[9px] tracking-[0.4em] uppercase text-[#b9975b]">
                  Save the date
                </p>

                <p className="font-display text-5xl sm:text-6xl text-[#17463d] mt-5">
                  12 November
                </p>

                <p className="tracking-[0.4em] text-xs text-[#17463d]/60 mt-3">
                  2026
                </p>

              </div>

            </div>

            {/* SCRATCH LAYER */}

            <motion.div
              animate={{
                opacity: revealed ? 0 : 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg,#b9975b,#d4b979,#9d7c42,#c6a85f)",
              }}
            >

              <div className="absolute inset-0 opacity-20">

                {[...Array(80)].map(
                  (_, index) => (
                    <span
                      key={index}
                      className="absolute w-1 h-1 rounded-full bg-white"
                      style={{
                        left: `${(index * 37) % 100}%`,
                        top: `${(index * 61) % 100}%`,
                      }}
                    />
                  )
                )}

              </div>

              <div className="relative text-center text-white px-5">

                <div className="text-4xl mb-4">
                  ✦
                </div>

                <p className="text-[10px] tracking-[0.35em] uppercase">
                  Scratch to reveal
                </p>

                <p className="text-xs mt-3 text-white/70">
                  Tap the card to reveal
                </p>

                <div className="mt-6 mx-auto w-20 h-px bg-white/50" />

              </div>

            </motion.div>

            {/* SCRATCH PROGRESS */}

            {!revealed &&
              scratched > 0 && (
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: scratched / 100,
                  }}
                  className="absolute bottom-0 left-0 h-1 bg-[#17463d] origin-left w-full"
                />
              )}

          </div>

          {!revealed && (
            <motion.button
              type="button"
              onClick={revealDate}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-7 px-8 py-3 bg-[#17463d] text-white text-[10px] tracking-[0.3em] uppercase"
            >
              Reveal the Date
            </motion.button>
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
              className="mt-7 text-[10px] tracking-[0.3em] uppercase text-[#17463d]"
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
    <main className="overflow-hidden">

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
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#17463d] text-white border border-[#b9975b] shadow-xl flex items-center justify-center"
        >
          {musicPlaying ? "♫" : "🔇"}
        </motion.button>
      )}

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#f5eee2]/90 backdrop-blur border-b border-[#17463d]/10">

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
            className="text-[10px] tracking-[0.2em] uppercase border border-[#17463d] px-5 py-2 text-[#17463d] hover:bg-[#17463d] hover:text-white transition"
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
        className="min-h-screen flex items-center justify-center pt-16 bg-[#f5eee2]"
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

          <p className="tracking-[0.35em] text-[10px] uppercase text-[#17463d]/60 mt-5">
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
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="py-24 bg-[#17463d] text-white"
        >

          <div className="max-w-5xl mx-auto px-5 text-center">

            <p className="text-[10px] tracking-[0.4em] uppercase text-[#d5b56a] mb-6">
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
        className="py-24 bg-[#f5eee2]"
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

      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section
        id="celebrations"
        className="py-24 bg-[#eee3d2]"
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
                  className="relative bg-[#f5eee2] border border-[#b9975b]/40 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow"
                >

                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#17463d]" />

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

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="gallery"
        className="py-24 bg-[#f5eee2]"
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

      {/* =====================================================
          FAMILY
      ===================================================== */}

      <section
        id="family"
        className="py-24 bg-[#eee3d2]"
      >

        <div className="max-w-5xl mx-auto px-5 text-center">

          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-[#b9975b]/40 bg-[#f5eee2] p-10">

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
                Yogesh Sharma &amp; Manju
              </p>

            </div>

            <div className="border border-[#b9975b]/40 bg-[#f5eee2] p-10">

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
        className="py-24 bg-[#f5eee2]"
      >

        <div className="max-w-5xl mx-auto px-5">

          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-7">

            <div className="border border-[#b9975b]/40 p-9 bg-[#eee3d2]/40">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                Pre-Wedding
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-4">
                Ambala
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                Our celebrations before the
                wedding will take place in
                Ambala City.
              </p>

            </div>

            <div className="border border-[#b9975b]/40 p-9 bg-[#eee3d2]/40">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#b9975b]">
                Wedding
              </p>

              <h3 className="font-display text-4xl text-[#17463d] mt-4">
                Pathankot
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#17463d]/65">
                We head to Pathankot for our
                wedding celebrations.
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

      {/* =====================================================
          RSVP
      ===================================================== */}

      <section
        id="rsvp"
        className="py-24 bg-[#17463d] text-white"
      >

        <div className="max-w-2xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d5b56a]">
            We'd love to celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-4">
            RSVP
          </h2>

          <div className="w-16 h-px bg-[#b9975b] mx-auto mt-6 mb-8" />

          <p className="text-sm leading-7 text-white/70">
            Your presence would mean the
            world to us. Please join us as we
            begin this beautiful new chapter.
          </p>

          <button
            type="button"
            className="mt-9 bg-[#f5eee2] text-[#17463d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase"
          >
            RSVP Coming Soon
          </button>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#092a24] text-white text-center py-16 px-5">

        <p className="font-display text-6xl text-[#d5b56a]">
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