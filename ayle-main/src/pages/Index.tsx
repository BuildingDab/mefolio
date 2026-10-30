import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import Constellation from "@/components/Constellation";
import Typewriter from "@/components/Typewriter";
import DiscordProfile from "@/components/DiscordProfile";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Github,
  Send,
  Monitor,
  Laptop,
  Gamepad2,
  Headphones,
  Mouse,
  HardDrive,
  MousePointer2,
  FileWarningIcon,
  MessageCircle,
} from "lucide-react";

const DISCORD_ID = "483751135652479008";

const games = [
  {
    name: "Fortnite",
    image: "/games/Fortnite.png",
  },
  {
    name: "Rocket League",
    image: "/games/RocketLeague.png",
  },
  {
    name: "Brawlhalla",
    image: "/games/Brawlhalla.png",
  },
  {
    name: "Gran Turismo 7",
    image: "/games/GranTurismo7.png",
  },
  {
    name: "Microsoft Flight Simulator 2024",
    image: "/games/MicrosoftFlightSimulator2024.png",
  },
];

const stats = [
  { value: "19", label: "Years Old" },
  { value: "TIME", label: "Local Time" },
  { value: "PS5", label: "Main Platform" },
  { value: "5", label: "Favorite Games" },
];
const setup = [
  { icon: Monitor, label: "Gaming PC", note: "Windows 11" },
  { icon: Laptop, label: "MacBook Pro", note: '14" · 2023' },
  { icon: Gamepad2, label: "PlayStation 5", note: "gaming" },
  { icon: Headphones, label: "Sony WH-1000XM", note: "audio" },
  { icon: Mouse, label: "MX Master 3", note: "mouse" },
  { icon: HardDrive, label: "500GB SSD", note: "external storage" },
  { icon: FileWarningIcon, label: "And more...", note: "too many to list" },
];

const Index = () => {
  const [currentTime, setCurrentTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    setCurrentTime(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date())
    );
  };

  updateTime();

  const interval = setInterval(updateTime, 1000);
  return () => clearInterval(interval);
}, []);
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28">
        <Constellation />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-up">
          <div className="mb-8">
            <DiscordProfile userId={DISCORD_ID} />
          </div>

          <h1 className="font-feminine text-7xl tracking-[0.14em] md:text-9xl">
            <span className="text-shimmer">Dab</span>
          </h1>

          <div className="mt-6 terminal-chip">
            <Typewriter />
          </div>

         <p className="mx-auto mt-6 max-w-xl text-balance text-muted-foreground md:text-lg">
  Just a guy into gaming, tech, and whatever else catches my interest.
  Welcome to my corner of the internet.
</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
             <a href="#games">
  Favorite games <ArrowUpRight className="ml-1 h-4 w-4" />
</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-grad-border rounded-full bg-secondary/50 backdrop-blur">
              <a href="#about">
  About me
</a>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MousePointer2 className="h-3 w-3" /> scroll to descend
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="cursor-nav relative mx-auto max-w-6xl px-6 py-32">
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" /> ABOUT ME
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Bio card */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card/60 p-8 shadow-[0_0_60px_-20px_hsl(var(--accent)/0.6)] backdrop-blur md:p-10">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
  Hey, I'm <span className="text-foreground">Dab</span>.
</h2>

<p className="mt-6 text-muted-foreground">
  I'm a college student who's into gaming, computers, tech, and online
  communities. This is basically my little corner of the internet for
  the stuff I'm into.
</p>

<p className="mt-4 text-muted-foreground">
  When I'm not doing college stuff, I'm probably gaming, messing with
  something on my PC, managing a Discord server, or trying out some
  random piece of tech.
</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-accent/40 hover:shadow-[0_0_60px_-25px_hsl(var(--accent)/0.8)] md:p-8"
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    {s.value === "TIME" ? currentTime : s.value}
                  </div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* FAVORITE GAMES */}
<section id="games" className="cursor-nav relative mx-auto max-w-6xl px-6 py-32">
  <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
    <span className="h-px w-8 bg-accent" />
    FAVORITE GAMES
    <span className="rounded-full bg-secondary px-2 py-1 text-[10px] text-muted-foreground">
      {games.length}
    </span>
  </div>

  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {games.map((game) => (
      <div
        key={game.name}
        className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_35px_-10px_hsl(var(--accent)/0.7)]"
      >
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-display text-sm font-semibold text-white md:text-base">
            {game.name}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* SETUP */}
<section id="setup" className="cursor-nav relative mx-auto max-w-6xl px-6 py-24 md:py-32">
  <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
    <span className="h-px w-8 bg-accent" /> MY SETUP
  </div>

  <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
    {setup.map(({ icon: Icon, label, note }) => (
      <div
        key={label}
        className="group flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-accent/40 hover:bg-card/70"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <div className="font-medium">{label}</div>
          <div className="font-mono text-xs text-muted-foreground">
            {note}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CONTACT */}
<section
  id="contact"
  className="cursor-nav relative mx-auto max-w-4xl px-6 py-32"
>
  <div className="flex items-center gap-3 font-mono text-sm text-accent">
    <span className="h-px w-8 bg-accent" /> 04 · contact
  </div>

  <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card/60 p-10 md:p-16">
    <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
      Wanna <span className="text-gradient-brand">say hi?</span>
    </h2>

    <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
      Feel free to reach out. You can find me on GitHub, Discord, or send me an email.
    </p>

    <div className="mt-10 flex flex-wrap gap-3">
      <Button
        asChild
        size="lg"
        className="rounded-full bg-foreground text-background hover:bg-foreground/90"
      >
        <a href="mailto:hi@dabs.games">
          hi@dabs.games <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="btn-grad-border rounded-full bg-secondary/50"
      >
        <a
          href="https://github.com/BuildingDab"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="btn-grad-border rounded-full bg-secondary/50"
      >
        <a
          href="https://discord.com/users/483751135652479008"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Discord"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Discord
        </a>
      </Button>
    </div>
  </div>
</section>

<footer className="border-t border-border/60 py-10">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted-foreground md:flex-row">
    <span>© {new Date().getFullYear()} Dab · probably lurking in one of the discord servers</span>

    <span className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
      system nominal
    </span>
  </div>
</footer>
    </div>
  );
};

export default Index;
