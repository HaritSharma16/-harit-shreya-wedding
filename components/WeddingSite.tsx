"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    date: "25 OCTOBER 2026",
    title: "Kirtan",
    location: "Ambala",
    detail: "An evening of blessings, prayers and togetherness."
  },
  {
    date: "31 OCTOBER 2026",
    title: "Engagement & Sangeet",
    location: "Ambala",
    detail: "A celebration of music, laughter and the beginning of forever."
  },
  {
    date: "10 NOVEMBER 2026",
    title: "Haldi • Mehndi • Ladies Sangeet • DJ",
    location: "Ambala",
    detail: "A day-to-night celebration filled with colour, dance and family."
  },
  {
    date: "11 NOVEMBER 2026",
    title: "The Journey",
    location: "Ambala → Pathankot",
    detail: "We make our way to Pathankot for the big day."
  },
  {
    date: "12 NOVEMBER 2026",
    title: "The Wedding",
    location: "Pathankot",
    detail: "The day our forever begins."
  }
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85",
    alt: "Wedding celebration"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
    alt: "Couple celebration"
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    alt: "Wedding flowers"
  },
  {
    src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85",
    alt: "Wedding venue"
  }
];

function Countdown() {
  const target = new Date(
    "2026-11-12T18:00:00+05:30"
  ).getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };

    tick();

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-5 max-w-xl mx-auto">
      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="border border-gold/40 bg-white/40 backdrop-blur px-2 py-4 sm:px-5 sm:py-5"
        >
          <div className="font-display text-3xl sm:text-5xl text-wine">
            {String(value).padStart(2, "0")}
          </div>

          <div className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-ink/60 mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3">
        {eyebrow}
      </p>

      <h2 className="font-display text-5xl sm:text-6xl text-wine">
        {title}
      </h2>

      <div className="gold-rule mx-auto mt-5" />
    </div>
  );
}

export default function WeddingSite() {
  return (
    <main className="overflow-hidden">

      {/* NAVIGATION */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/85 backdrop-blur border-b border-wine/10">
        <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          <a
            href="#home"
            className="font-display text-2xl text-wine"
          >
            H & S
          </a>

          <div className="hidden md:flex gap-7 text-[10px] tracking-[0.22em] uppercase">

            <a href="#story" className="hover:text-gold transition">
              Story
            </a>

            <a href="#celebrations" className="hover:text-gold transition">
              Celebrations
            </a>

            <a href="#gallery" className="hover:text-gold transition">
              Gallery
            </a>

            <a href="#family" className="hover:text-gold transition">
              Family
            </a>

            <a href="#travel" className="hover:text-gold transition">
              Travel
            </a>

            <a href="#rsvp" className="hover:text-gold transition">
              RSVP
            </a>

          </div>

          <a
            href="#rsvp"
            className="text-[10px] tracking-[0.18em] uppercase border border-wine px-4 py-2 text-wine hover:bg-wine hover:text-ivory transition"
          >
            RSVP
          </a>

        </nav>
      </header>


      {/* HERO */}

      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center pt-16 bg-gradient-to-b from-sand/60 via-ivory to-ivory"
      >

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #B28A4A 1px, transparent 1px)",
            backgroundSize: "34px 34px"
          }}
        />

        <div className="relative text-center px-5">

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] tracking-[0.42em] uppercase text-gold mb-8"
          >
            With the blessings of our families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-[76px] leading-[.78] sm:text-[130px] sm:leading-[.7] text-wine"
          >
            Harit

            <span className="block text-4xl sm:text-6xl my-5 text-gold">
              &
            </span>

            Shreya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-2xl sm:text-3xl mt-10 text-ink"
          >
            are getting married
          </motion.p>

          <p className="tracking-[0.3em] text-xs mt-5 text-ink/70">
            12 • NOVEMBER • 2026 · PATHANKOT
          </p>

          <a
            href="#story"
            className="inline-block mt-12 text-[10px] tracking-[0.28em] uppercase border-b border-gold pb-2 text-wine"
          >
            Enter our story ↓
          </a>

        </div>

      </section>


      {/* COUNTDOWN */}

      <section className="section-pad bg-wine text-ivory">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-6">
            The countdown
          </p>

          <h2 className="font-display text-4xl sm:text-5xl mb-9">
            Until our forever begins
          </h2>

          <Countdown />

        </div>

      </section>


      {/* STORY */}

      <section id="story" className="section-pad">

        <div className="max-w-4xl mx-auto px-5">

          <SectionTitle
            eyebrow="A little bit of us"
            title="Our Story"
          />

          <div className="text-center font-display text-2xl sm:text-3xl leading-relaxed text-ink/80">

            <p>
              It all started with two people, two stories,
              and a little bit of destiny.
            </p>

            <p className="mt-6">
              From the first conversations to the day we
              decided to spend forever together, every
              chapter has brought us closer to this moment.
            </p>

            <p className="mt-6">
              And now, surrounded by the people we love
              most, we are ready to begin our next chapter.
            </p>

          </div>

        </div>

      </section>


      {/* EVENTS */}

      <section
        id="celebrations"
        className="section-pad bg-white/45"
      >

        <div className="max-w-6xl mx-auto px-5">

          <SectionTitle
            eyebrow="Save the dates"
            title="The Celebrations"
          />

          <div className="grid md:grid-cols-2 gap-5">

            {events.map((event, i) => (

              <motion.article
                key={event.date}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.06
                }}
                className={`border border-gold/30 p-7 sm:p-9 bg-ivory ${
                  i === events.length - 1
                    ? "md:col-span-2 md:max-w-2xl md:mx-auto md:w-full"
                    : ""
                }`}
              >

                <p className="text-[10px] tracking-[0.3em] text-gold">
                  {event.date}
                </p>

                <h3 className="font-display text-3xl sm:text-4xl text-wine mt-3">
                  {event.title}
                </h3>

                <p className="text-xs tracking-[0.18em] uppercase text-ink/60 mt-3">
                  📍 {event.location}
                </p>

                <p className="mt-5 text-sm leading-7 text-ink/70">
                  {event.detail}
                </p>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section id="gallery" className="section-pad">

        <div className="max-w-6xl mx-auto px-5">

          <SectionTitle
            eyebrow="Our moments"
            title="Gallery"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {gallery.map((photo, i) => (

              <motion.div
                key={photo.src}
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.08
                }}
                className={`overflow-hidden ${
                  i === 1 ? "md:translate-y-10" : ""
                }`}
              >

                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-[260px] sm:h-[390px] object-cover hover:scale-105 transition duration-700"
                />

              </motion.div>

            ))}

          </div>

          <p className="text-center text-xs text-ink/50 mt-9">
            These are temporary images. Replace them with
            your pre-wedding photographs.
          </p>

        </div>

      </section>


      {/* FAMILY */}

      <section
        id="family"
        className="section-pad bg-sand/45"
      >

        <div className="max-w-5xl mx-auto px-5 text-center">

          <SectionTitle
            eyebrow="With love and blessings"
            title="Our Families"
          />

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-gold/30 bg-ivory p-9">

              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                The Groom
              </p>

              <h3 className="font-display text-3xl text-wine mt-4">
                Harit Sharma
              </h3>

              <p className="mt-4 text-lg font-display">
                Son of
              </p>

              <p className="mt-2 text-sm tracking-wide">
                Yogesh Sharma & Manju
              </p>

            </div>


            <div className="border border-gold/30 bg-ivory p-9">

              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                The Bride
              </p>

              <h3 className="font-display text-3xl text-wine mt-4">
                Shreya
              </h3>

              <p className="mt-4 text-lg font-display">
                Daughter of
              </p>

              <p className="mt-2 text-sm tracking-wide">
                Satish Kumar & Davina
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* TRAVEL */}

      <section id="travel" className="section-pad">

        <div className="max-w-5xl mx-auto px-5">

          <SectionTitle
            eyebrow="For our guests"
            title="Travel & Stay"
          />

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-gold/30 p-8 bg-white/40">

              <h3 className="font-display text-3xl text-wine">
                Ambala
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink/70">
                The celebrations on 25, 31 October and
                10 November will take place in Ambala.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ambala%2C%20Haryana"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-[10px] tracking-[0.2em] uppercase border-b border-gold pb-1"
              >
                Open in Maps →
              </a>

            </div>


            <div className="border border-gold/30 p-8 bg-white/40">

              <h3 className="font-display text-3xl text-wine">
                Pathankot
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink/70">
                We head to Pathankot on 11 November.
                The wedding celebration is on 12 November.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Pathankot%2C%20Punjab"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-[10px] tracking-[0.2em] uppercase border-b border-gold pb-1"
              >
                Open in Maps →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* RSVP */}

      <section
        id="rsvp"
        className="section-pad bg-wine text-ivory"
      >

        <div className="max-w-2xl mx-auto px-5 text-center">

          <p className="text-[10px] tracking-[0.35em] uppercase text-gold">
            We'd love to celebrate with you
          </p>

          <h2 className="font-display text-5xl sm:text-6xl mt-3">
            RSVP
          </h2>

          <div className="gold-rule mx-auto mt-5 mb-8" />

          <p className="text-sm leading-7 text-ivory/75">
            We would be delighted to have you celebrate
            these special moments with us.
          </p>

          <a
            href="#"
            className="inline-block mt-8 bg-ivory text-wine px-7 py-3 text-[10px] tracking-[0.25em] uppercase hover:bg-sand transition"
          >
            RSVP →
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-ink text-ivory text-center py-14 px-5">

        <p className="font-display text-5xl text-gold">
          H & S
        </p>

        <p className="font-display text-2xl mt-3">
          Harit & Shreya
        </p>

        <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mt-5">
          12 November 2026 · Pathankot
        </p>

        <p className="text-xs text-ivory/40 mt-10">
          Made with love for our forever.
        </p>

      </footer>

    </main>
  );
}
