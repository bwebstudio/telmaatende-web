'use client'

import { useState } from 'react'
import { TelmaConversationFlow } from './TelmaConversationFlow'
import type { FlowContent } from '@/content'

/**
 * The reference's segmented tabs over one stage: each tab is the same scene
 * mechanism with different material. Changing tab fades the stage out, swaps
 * the scene (a fresh mount, so its loops start clean) and fades it back in.
 * The labels and the scenes come from the dictionary now. They were written
 * here in Portuguese, under a comment saying this experiment was pt-PT only,
 * on a section that renders on all three homepages.
 */
// No WhatsApp tab: its scene showed Telma booking on WhatsApp, which she does
// not do yet. The scene stays in content/ for when she does.
const TAB_IDS = ['booking', 'summary'] as const

type TabId = (typeof TAB_IDS)[number]

export function ConversationFlowTabs({ flow }: { flow: FlowContent }) {
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
          aria-label={flow.tabsLabel}
          className="inline-flex max-w-full gap-1 overflow-x-auto rounded-pill border border-ink/25 p-1.5"
        >
          {TAB_IDS.map((id) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={active === id}
              onClick={() => choose(id)}
              className={`min-h-[2.75rem] shrink-0 whitespace-nowrap rounded-pill px-5 text-[0.9375rem] transition-colors duration-fast ease-calm sm:px-7 sm:text-base ${
                active === id ? 'bg-ink text-white' : 'text-ink hover:bg-ink/5'
              }`}
            >
              {flow.tabs[id]}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        className="mt-10 transition-[opacity,filter] duration-300 ease-calm"
        style={{ opacity: fading ? 0 : 1, filter: fading ? 'blur(6px)' : 'blur(0px)' }}
      >
        <TelmaConversationFlow key={shown} scene={flow.scenes[shown]} />
      </div>
    </>
  )
}
