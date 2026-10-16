'use client'

import { useState } from 'react'
import { SCENES, TelmaConversationFlow } from './TelmaConversationFlow'

/**
 * The reference's segmented tabs over one stage: each tab is the same scene
 * mechanism with different material. Changing tab fades the stage out, swaps
 * the scene (a fresh mount, so its loops start clean) and fades it back in.
 * pt-PT only, like the rest of this experiment.
 */
const TABS = [
  { id: 'booking', label: 'Marca e organiza' },
  { id: 'summary', label: 'Resume cada chamada' },
  { id: 'whatsapp', label: 'Também no WhatsApp' },
] as const

type TabId = (typeof TABS)[number]['id']

export function ConversationFlowTabs() {
  const [active, setActive] = useState<TabId>('booking')
  const [shown, setShown] = useState<TabId>('booking')
  const [fading, setFading] = useState(false)

  const choose = (id: TabId) => {
    if (id === active) return
    setActive(id)
    setFading(true)
    window.setTimeout(() => {
      setShown(id)
      setFading(false)
    }, 280)
  }

  return (
    <>
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Exemplos"
          className="inline-flex max-w-full gap-1 overflow-x-auto rounded-pill border border-ink/25 p-1.5"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={active === t.id}
              onClick={() => choose(t.id)}
              className={`min-h-[2.75rem] shrink-0 whitespace-nowrap rounded-pill px-5 text-[0.9375rem] transition-colors duration-fast ease-calm sm:px-7 sm:text-base ${
                active === t.id ? 'bg-ink text-white' : 'text-ink hover:bg-ink/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        className="mt-10 transition-[opacity,filter] duration-300 ease-calm"
        style={{ opacity: fading ? 0 : 1, filter: fading ? 'blur(6px)' : 'blur(0px)' }}
      >
        <TelmaConversationFlow key={shown} scene={SCENES[shown]} />
      </div>
    </>
  )
}
