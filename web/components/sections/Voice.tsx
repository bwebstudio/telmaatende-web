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
    <Section id="voz" tone="bg" rule>
      <SectionHeader
        eyebrow={c.voice.label}
        title={c.voice.title}
        lead={c.voice.lead}
        align="center"
      />

      <Reveal delay={120} className="mx-auto mt-24 max-w-3xl">
        <div className="flex items-center gap-7 border-y border-line py-10">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? c.voice.pause : c.voice.play}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-all duration-fast ease-calm hover:bg-brand-hover hover:scale-[1.04]"
          >
            {playing ? (
              <Pause size={20} strokeWidth={ICON_STROKE} aria-hidden />
            ) : (
              // Nudged right so the triangle looks centred, which it is not.
              <Play
                size={20}
                strokeWidth={ICON_STROKE}
                aria-hidden
                className="translate-x-[1px]"
              />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <p className="text-[1.0625rem] font-mid tracking-tight text-ink">
              {playing ? c.voice.pause : c.voice.play}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span
                className="h-px flex-1 bg-line-strong"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                aria-label={c.voice.play}
              >
                <span
                  className="block h-px bg-brand-accent transition-[width] duration-fast ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </span>
              <span className="shrink-0 text-sm tabular-nums text-ink-mute">
                {formatTime(current)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-[0.9375rem] leading-relaxed text-ink-mute">
          {c.voice.note}
        </p>

        <audio ref={audioRef} src={src} preload="none" />
      </Reveal>
    </Section>
  )
}
