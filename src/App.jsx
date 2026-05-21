import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const workflowSteps = [
  {
    title: "Codex Agent",
    kicker: "Generate",
    icon: "codex",
    number: "01",
    description:
      "Turn a design intent into working React, motion, and interaction patterns while the designer keeps the creative brief sharp.",
    meta: "Vibe coding in VSCode",
  },
  {
    title: "Figma",
    kicker: "Refine",
    icon: "figma",
    number: "02",
    description:
      "Move the generated interface into a familiar design space to tune composition, tokens, hierarchy, and edge cases.",
    meta: "Design system thinking",
  },
  {
    title: "Vercel",
    kicker: "Share",
    icon: "vercel",
    number: "03",
    description:
      "Deploy the prototype as a live artifact that colleagues, clients, and teams can experience immediately.",
    meta: "Rapid live prototypes",
  },
];

const principles = [
  {
    label: "Creative direction stays human",
    text: "The designer frames the problem, chooses the taste level, judges the tradeoffs, and keeps the work aligned with the audience.",
  },
  {
    label: "AI compresses implementation time",
    text: "Codex handles scaffolding, layout, states, and code iteration so ideas can move from spoken intent to testable surface quickly.",
  },
  {
    label: "Figma sharpens the design layer",
    text: "Generated UI becomes material for critique: spacing, variables, components, responsive details, and presentation polish.",
  },
  {
    label: "Vercel turns prototypes into meetings",
    text: "A live URL makes the work tangible, shareable, and easier to react to than a static mockup or a long explanation.",
  },
];

const previewCards = [
  "AI concept intake",
  "Design system draft",
  "Interaction notes",
  "Responsive prototype",
  "Stakeholder link",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950 text-frost-100">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-nord-cyan via-nord-blue to-nord-violet"
        style={{ scaleX }}
      />
      <AmbientField mouseX={mouseX} mouseY={mouseY} />
      <Header />
      <Hero />
      <Workflow />
      <HowIWork />
      <Showcase />
      <Closing />
    </main>
  );
}

function Header() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 px-5 py-5 sm:px-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink-950/35 px-4 py-3 text-xs text-frost-200 shadow-panel-glow backdrop-blur-xl sm:px-5">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-semibold tracking-[0.22em] text-nord-cyan transition-colors group-hover:border-nord-cyan/60">
            AI
          </span>
          <span className="hidden font-medium tracking-[0.18em] text-frost-200 sm:inline">
            UX WORKFLOW FLYER
          </span>
        </a>
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {["Workflow", "Method", "Showcase"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-frost-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

function AmbientField({ mouseX, mouseY }) {
  const x = useTransform(mouseX, [0, 1440], [-28, 28]);
  const y = useTransform(mouseY, [0, 900], [-20, 20]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <motion.div
        className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-nord-blue/10 blur-3xl"
        style={{ x, y }}
      />
      <motion.div
        className="absolute bottom-10 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-nord-violet/12 blur-3xl"
        animate={{ y: [0, -28, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-10rem] top-[42rem] h-[26rem] w-[26rem] rounded-full bg-nord-cyan/10 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.45]);

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-end px-5 pb-10 pt-28 sm:px-8 lg:pb-14"
    >
      <motion.div
        className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.72fr)] lg:items-end"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl">
          <motion.p
            className="mb-7 inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-frost-300 backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Presentation flyer / AI-assisted UX
          </motion.p>
          <motion.h1
            className="max-w-6xl text-balance text-6xl font-semibold leading-[0.88] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-[8.8rem]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Designing at the speed of thought.
          </motion.h1>
          <motion.div
            className="mt-8 grid gap-7 md:grid-cols-[0.78fr_0.42fr]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
          >
            <p className="max-w-2xl text-lg font-light leading-8 text-frost-200 sm:text-xl">
              A modern UX workflow where Codex generates the first working
              interface, Figma refines the design language, and Vercel turns
              every iteration into a live prototype.
            </p>
            <div className="flex items-end">
              <a
                href="#workflow"
                className="group inline-flex items-center gap-4 rounded-full border border-white/15 bg-frost-100 px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition duration-300 hover:scale-[1.025] hover:bg-white"
              >
                Explore Workflow
                <span className="grid size-8 place-items-center rounded-full bg-ink-950 text-white transition group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.aside
          className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 shadow-panel-glow backdrop-blur-xl"
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between text-xs text-frost-300">
              <span>Live workflow loop</span>
              <span>00:18 / iteration</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-ink-900/85 p-4">
              <div className="mb-5 flex gap-2">
                <span className="size-2 rounded-full bg-nord-violet" />
                <span className="size-2 rounded-full bg-nord-blue" />
                <span className="size-2 rounded-full bg-nord-moss" />
              </div>
              <div className="space-y-3">
                {[
                  ["Prompt", "Premium AI-assisted UX flyer"],
                  ["Generate", "React + Tailwind + Motion"],
                  ["Refine", "Figma critique and variants"],
                  ["Ship", "Vercel live prototype"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={label}
                    className="grid grid-cols-[5rem_1fr] gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3"
                    animate={{ opacity: [0.62, 1, 0.62] }}
                    transition={{
                      duration: 4,
                      delay: index * 0.42,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.22em] text-frost-400">
                      {label}
                    </span>
                    <span className="text-sm text-frost-100">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}

function Workflow() {
  return (
    <Section id="workflow" eyebrow="Workflow timeline" title="From generated idea to shared experience.">
      <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
        <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block" />
        {workflowSteps.map((step, index) => (
          <WorkflowCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </Section>
  );
}

function WorkflowCard({ step, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel-glow backdrop-blur-xl"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.24em] text-frost-400">
            {step.number} / {step.kicker}
          </span>
          <motion.span
            className="grid size-14 place-items-center rounded-2xl border border-white/12 bg-ink-900/75 text-nord-cyan"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4.5,
              delay: index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <WorkflowIcon type={step.icon} />
          </motion.span>
        </div>
        <h3 className="text-3xl font-semibold tracking-normal text-white">
          {step.title}
        </h3>
        <p className="mt-4 min-h-28 text-base font-light leading-7 text-frost-300">
          {step.description}
        </p>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.2em] text-frost-400">
            {step.meta}
          </span>
          <span className="text-frost-300 transition group-hover:translate-x-1 group-hover:text-white">
            &rarr;
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function WorkflowIcon({ type }) {
  if (type === "figma") {
    return (
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.95" />
        <circle cx="20" cy="8" r="4" fill="currentColor" opacity="0.55" />
        <circle cx="12" cy="16" r="4" fill="currentColor" opacity="0.75" />
        <circle cx="20" cy="16" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="12" cy="24" r="4" fill="currentColor" opacity="0.95" />
      </svg>
    );
  }

  if (type === "vercel") {
    return (
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <path d="M16 6 28 26H4L16 6Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
      <rect
        x="5"
        y="7"
        width="22"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m11 14 4 3-4 3M17 21h5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function HowIWork() {
  return (
    <Section
      id="method"
      eyebrow="How I work"
      title="A collaborative loop where taste sets the direction and automation clears the runway."
      intro="The point is not to remove design craft. The point is to make more of it visible, testable, and discussable while momentum is still high."
    >
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {principles.map((principle, index) => (
          <motion.article
            key={principle.label}
            className="group rounded-[1.5rem] border border-white/10 bg-ink-900/55 p-6 transition duration-300 hover:border-white/22 hover:bg-white/[0.055]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm text-frost-400">0{index + 1}</span>
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-nord-blue/70 transition group-hover:w-24" />
            </div>
            <h3 className="text-2xl font-semibold tracking-normal text-white">
              {principle.label}
            </h3>
            <p className="mt-4 text-base font-light leading-7 text-frost-300">
              {principle.text}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Showcase() {
  const { scrollYProgress } = useScroll();
  const tilt = useTransform(scrollYProgress, [0.45, 0.8], [-4, 3]);
  const lift = useTransform(scrollYProgress, [0.45, 0.8], [70, -20]);

  return (
    <Section
      id="showcase"
      eyebrow="Interactive showcase"
      title="A prototype that feels alive before it is finished."
      intro="Generated UI previews become conversation pieces: useful enough to test a direction, loose enough to keep improving."
    >
      <motion.div
        className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-panel-glow backdrop-blur-xl sm:p-4"
        style={{ rotateX: tilt, y: lift }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-nord-blue/10 via-transparent to-nord-violet/10" />
        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-ink-950">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="size-2.5 rounded-full bg-[#ffd166]" />
              <span className="size-2.5 rounded-full bg-[#64d48b]" />
            </div>
            <div className="hidden rounded-full border border-white/10 bg-ink-900 px-4 py-1.5 text-xs text-frost-400 sm:block">
              ai-workflow-preview.vercel.app
            </div>
            <div className="text-xs text-frost-500">Live</div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.68fr_0.32fr]">
            <div className="min-h-[32rem] border-white/10 p-5 sm:p-8 lg:border-r">
              <div className="mb-10 flex flex-wrap gap-3">
                {["Brief", "Generate", "Critique", "Deploy"].map((tab, index) => (
                  <motion.button
                    key={tab}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                      index === 1
                        ? "border-nord-blue/50 bg-nord-blue/15 text-white"
                        : "border-white/10 bg-white/[0.03] text-frost-400 hover:border-white/20 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <GeneratedPanel />
                <motion.div
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.22em] text-frost-400">
                      Figma polish
                    </p>
                    <span className="rounded-full bg-nord-violet/15 px-3 py-1 text-xs text-nord-violet">
                      Variant B
                    </span>
                  </div>
                  <div className="space-y-4">
                    <DesignBar label="Hierarchy" width="92%" />
                    <DesignBar label="Spacing" width="78%" />
                    <DesignBar label="Motion" width="84%" />
                    <DesignBar label="Shareability" width="96%" />
                  </div>
                </motion.div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {previewCards.slice(0, 3).map((item, index) => (
                  <FloatingTile key={item} item={item} index={index} />
                ))}
              </div>
            </div>

            <div className="relative min-h-[32rem] overflow-hidden p-5 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-nord-blue/10 to-transparent" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.24em] text-frost-400">
                  Iteration signal
                </p>
                <div className="mt-8 space-y-6">
                  {["Prompt", "Code", "Review", "Refine", "Launch"].map(
                    (phase, index) => (
                      <motion.div
                        key={phase}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0.3 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-frost-300">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-frost-100">{phase}</span>
                            <span className="text-frost-500">
                              {index === 4 ? "Live" : "In loop"}
                            </span>
                          </div>
                          <div className="mt-2 h-1 rounded-full bg-white/10">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-nord-cyan to-nord-violet"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${55 + index * 9}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.85, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function GeneratedPanel() {
  return (
    <motion.div
      className="relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-ink-900 p-5"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(143,232,255,0.17),transparent_14rem),radial-gradient(circle_at_90%_0%,rgba(155,140,255,0.18),transparent_12rem)]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.22em] text-frost-400">
          Generated UI
        </p>
        <h3 className="mt-8 max-w-xs text-4xl font-semibold leading-none text-white">
          Concept surface for AI UX sprint.
        </h3>
        <p className="mt-5 max-w-sm text-sm leading-6 text-frost-300">
          A coded first draft with real spacing, real states, and enough polish
          to make critique concrete.
        </p>
        <div className="mt-8 flex gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-950">
            Present
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs text-frost-300">
            Iterate
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function DesignBar({ label, width }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-frost-400">
        <span>{label}</span>
        <span>{width}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-nord-blue to-nord-violet"
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function FloatingTile({ item, index }) {
  return (
    <motion.div
      className="rounded-[1.15rem] border border-white/10 bg-white/[0.035] p-4 text-sm text-frost-200"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 5,
        delay: index * 0.35,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.035, borderColor: "rgba(255,255,255,0.24)" }}
    >
      <span className="mb-8 block text-xs text-frost-500">0{index + 1}</span>
      {item}
    </motion.div>
  );
}

function Closing() {
  return (
    <section className="relative z-10 px-5 py-28 sm:px-8 lg:py-36">
      <motion.div
        className="mx-auto max-w-7xl border-t border-white/10 pt-12"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-frost-400">
          Future workflow
        </p>
        <blockquote className="max-w-6xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-8xl">
          The next design advantage is not faster output. It is faster
          understanding.
        </blockquote>
        <div className="mt-12 grid gap-8 md:grid-cols-[0.6fr_0.4fr]">
          <p className="text-lg font-light leading-8 text-frost-300">
            When designers can generate, critique, refine, and share in one
            continuous loop, the conversation moves from opinions about slides
            to decisions about experiences.
          </p>
          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            {["Codex", "Figma", "Vercel", "Human taste"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-frost-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-7 lg:grid-cols-[0.35fr_0.65fr]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-frost-400">
            {eyebrow}
          </p>
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-frost-300">
                {intro}
              </p>
            ) : null}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default App;
