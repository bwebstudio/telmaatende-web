'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ICON_STROKE } from '@/components/ui/Card'

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * The proof: a recorded call, one button, nothing else.
 *
 * Centred and almost empty, on purpose. This is the quietest block on the page
 * and the one that does the most work — it answers the first objection a buyer
 * has, and it answers it by being confident enough to just play the thing.
 *
 * The player carries no panel and no card. It is two hairlines with a control
 * between them, which is the most restrained way to say "press this".
 *
 * `preload="none"` keeps the 1.5MB file off the page load until somebody asks.
 */
export function Voice({ c, src }: { c: Content; src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => setCurrent(audio.currentTime)
    const onMeta = () => setDuration(audio.duration)
    const onEnd = () => {
      setPlaying(false)
      setCurrent(0)
    }

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('ended', onEnd)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      void audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const progress = duration > 0 ? (current / duration) * 100 : 0

  return (
    <Section id="voz" tone="bg">
      {/* Light and centred, after the reference's "hear it in action": the
          recording is the evidence, so it gets the middle of the page and a
          grey well of its own, and nothing competes with it. */}
      <SectionHeader eyebrow={c.voice.label} title={c.voice.title} lead={c.voice.lead} align="center" />

      <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
        <div className="rounded-[20px] bg-surface-sunken p-3">
          <div className="flex items-center gap-5 rounded-[14px] bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:px-6">
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? c.voice.pause : c.voice.play}
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-fast ease-calm hover:scale-[1.04] ${
                playing ? 'bg-accent text-ink' : 'bg-ink text-white'
              }`}
            >
              {playing ? (
                <Pause size={18} strokeWidth={ICON_STROKE} aria-hidden />
              ) : (
                // Nudged right so the triangle looks centred, which it is not.
                <Play size={18} strokeWidth={ICON_STROKE} aria-hidden className="translate-x-[1px]" />
              )}
            </button>
            <span
              aria-hidden
              className="w-[5.5rem] shrink-0 font-mono text-[0.8125rem] tabular-nums text-ink-mute"
            >
              {formatTime(current)} / {duration > 0 ? formatTime(duration) : '–:––'}
            </span>
            {/* Decorative: the button already announces play and pause. */}
            <span aria-hidden className="h-[3px] flex-1 rounded-full bg-line">
              <span
                className="block h-[3px] rounded-full bg-accent-strong transition-[width] duration-fast ease-linear"
                style={{ width: `${progress}%` }}
              />
            </span>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[0.9375rem] leading-relaxed text-ink-mute">
          {c.voice.note}
        </p>
        <audio ref={audioRef} src={src} preload="none" />
      </Reveal>
    </Section>
  )
}
