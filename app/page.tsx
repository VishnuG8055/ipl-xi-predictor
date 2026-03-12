// app/page.tsx — Main landing page with hero, stats, team grid, upcoming match, and how it works

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ParticleBackground from '@/components/shared/ParticleBackground';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import GlowCard from '@/components/shared/GlowCard';
import { IPL_TEAMS } from '@/lib/utils/constants';
import { useCountdown } from '@/lib/hooks/useCountdown';
import { useState, useRef } from 'react';
import { formatDate } from '@/lib/utils/format';

function TeamCard({ team }: { team: typeof IPL_TEAMS[0] }) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => router.push(`/team/${team.id}`)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="cursor-pointer"
      style={{
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.1s ease',
      }}
    >
      <div
        className="glass-card p-4 h-full relative overflow-hidden group"
        style={{
          borderTop: `3px solid ${team.primaryColor}`,
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          style={{ boxShadow: `inset 0 0 30px ${team.glowColor}` }}
        />

        <div className="relative z-10 text-center">
          <div
            className="text-3xl font-bold font-rajdhani mb-1"
            style={{ color: team.primaryColor }}
          >
            {team.shortName}
          </div>
          <div className="text-xs text-white font-medium leading-tight mb-1">
            {team.name}
          </div>
          <div className="text-xs text-[#a0a0b8]">{team.city}</div>
        </div>
      </div>
    </motion.div>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) return <p className="text-[#00f5d4] font-bold">Match is Live! 🔴</p>;

  const units = [
    { label: 'Days', value: days },
    { label: 'Hrs', value: hours },
    { label: 'Min', value: minutes },
    { label: 'Sec', value: seconds },
  ];

  return (
    <div className="flex gap-3">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center glass-card px-3 py-2 min-w-[56px]">
          <div className="text-2xl font-bold font-rajdhani text-[#00f5d4]">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#a0a0b8]">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const nextMatch = {
    team1: IPL_TEAMS.find(t => t.id === 'csk')!,
    team2: IPL_TEAMS.find(t => t.id === 'mi')!,
    venue: 'Wankhede Stadium',
    date: '2025-03-22T19:30:00+05:30',
  };

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,245,212,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 text-sm text-[#00f5d4] border border-[#00f5d4]/30">
              <span className="animate-pulse w-2 h-2 rounded-full bg-[#00f5d4]" />
              IPL 2025 Season is here 🏏
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold font-rajdhani leading-tight mb-6">
              <span className="gradient-text">Pick. Predict.</span>
              <br />
              <span className="text-white">Prove.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto mb-10">
              Build your dream IPL XI, predict match winners, and compete with fans worldwide
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/auth/login"
                className="inline-block neon-button px-8 py-4 rounded-xl text-lg font-semibold font-rajdhani"
              >
                Start Predicting 🏏
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#a0a0b8] rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-[#00f5d4] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlowCard glowColor="rgba(0, 245, 212, 0.15)" className="p-8">
              <div className="grid grid-cols-3 divide-x divide-[#2a2a4a] text-center">
                <div className="px-4">
                  <div className="text-4xl font-bold font-rajdhani text-[#00f5d4]">
                    <AnimatedCounter target={12847} />
                  </div>
                  <div className="text-sm text-[#a0a0b8] mt-1">Predictions</div>
                </div>
                <div className="px-4">
                  <div className="text-4xl font-bold font-rajdhani text-[#00f5d4]">
                    <AnimatedCounter target={3421} />
                  </div>
                  <div className="text-sm text-[#a0a0b8] mt-1">Fans</div>
                </div>
                <div className="px-4">
                  <div className="text-4xl font-bold font-rajdhani text-[#00f5d4]">
                    <AnimatedCounter target={10} duration={1} />
                  </div>
                  <div className="text-sm text-[#a0a0b8] mt-1">Teams</div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold font-rajdhani text-white mb-3">
              Choose Your Team
            </h2>
            <p className="text-[#a0a0b8]">Pick your side and build the perfect XI</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {IPL_TEAMS.map((team, i) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <TeamCard team={team} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING MATCH SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold font-rajdhani text-white mb-2">Next Match</h2>
          </motion.div>

          <GlowCard glowColor="rgba(0, 245, 212, 0.2)" className="text-center">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div>
                <div
                  className="text-4xl font-bold font-rajdhani"
                  style={{ color: nextMatch.team1.primaryColor }}
                >
                  {nextMatch.team1.shortName}
                </div>
                <div className="text-xs text-[#a0a0b8]">{nextMatch.team1.city}</div>
              </div>

              <div className="text-2xl font-bold pulse-glow text-[#00f5d4]">⚡ VS ⚡</div>

              <div>
                <div
                  className="text-4xl font-bold font-rajdhani"
                  style={{ color: nextMatch.team2.primaryColor }}
                >
                  {nextMatch.team2.shortName}
                </div>
                <div className="text-xs text-[#a0a0b8]">{nextMatch.team2.city}</div>
              </div>
            </div>

            <p className="text-[#a0a0b8] text-sm mb-6">
              📍 {nextMatch.venue} · {formatDate(nextMatch.date)}
            </p>

            <div className="flex justify-center mb-6">
              <CountdownTimer targetDate={nextMatch.date} />
            </div>

            <Link
              href="/predict"
              className="inline-block neon-button px-6 py-2 rounded-lg font-medium"
            >
              Predict Now →
            </Link>
          </GlowCard>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold font-rajdhani text-white mb-3">How It Works</h2>
            <p className="text-[#a0a0b8]">Three simple steps to become the ultimate IPL predictor</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: '🏏', title: 'Pick Your Team', desc: 'Choose from all 10 IPL teams and pick your favourite squad to support.' },
              { step: '02', icon: '✅', title: 'Select Your XI', desc: 'Build your playing XI from the squad. Who would you pick to win?' },
              { step: '03', icon: '📊', title: 'Compare with Fans', desc: 'See how your XI compares with thousands of other cricket fans worldwide.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <GlowCard className="text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-[#00f5d4] text-sm font-mono mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold font-rajdhani text-white mb-3">{item.title}</h3>
                  <p className="text-[#a0a0b8] text-sm leading-relaxed">{item.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
