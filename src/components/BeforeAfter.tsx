import React, { useEffect, useRef, useState } from 'react'
import baseSrc from '../assets/images/po.webp'
import overlaySrc from '../assets/images/przed.webp'

type Props = {
  className?: string
  initialPercent?: number // 0..100
}

export default function BeforeAfter({ className = '', initialPercent = 50 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const [percent, setPercent] = useState<number>(Math.max(0, Math.min(100, initialPercent)))
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const draggingRef = useRef(false)

  // Keep container dimensions in state so we can set overlay width/height in px (prevents scaling artifacts)
  useEffect(() => {
    const sync = () => {
      const c = containerRef.current
      if (!c) return
      setContainerSize({ width: c.offsetWidth, height: c.offsetHeight })
    }
    sync()
    const ro = new ResizeObserver(sync)
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('load', sync)
    return () => {
      ro.disconnect()
      window.removeEventListener('load', sync)
    }
  }, [])

  // Update overlay clip path when percent changes
  useEffect(() => {
    const o = overlayRef.current
    if (!o) return
    // inset(top right bottom left) - to reveal percent from the left, inset the right by (100 - percent)%
    const rightInset = 100 - percent
    o.style.clipPath = `inset(0 ${rightInset}% 0 0)`
    ;(o.style as any).WebkitClipPath = `inset(0 ${rightInset}% 0 0)`
  }, [percent])

  // Pointer drag support
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      const p = clientXToPercent(e.clientX)
      setPercent(p)
    }
    const onPointerUp = () => {
      draggingRef.current = false
      document.body.style.userSelect = ''
    }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [])

  const clientXToPercent = (clientX: number) => {
    const c = containerRef.current
    if (!c) return 0
    const rect = c.getBoundingClientRect()
    const x = clientX - rect.left
    let p = (x / rect.width) * 100
    p = Math.max(0, Math.min(100, p))
    return p
  }

  const startDrag = (e: React.PointerEvent) => {
    const target = e.currentTarget as Element
    ;(target as any).setPointerCapture?.(e.pointerId)
    draggingRef.current = true
    document.body.style.userSelect = 'none'
  }

  const onBarClick = (e: React.MouseEvent) => {
    const p = clientXToPercent(e.clientX)
    setPercent(p)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPercent((s) => Math.max(0, s - 2))
    if (e.key === 'ArrowRight') setPercent((s) => Math.min(100, s + 2))
    if (e.key === 'Home') setPercent(0)
    if (e.key === 'End') setPercent(100)
  }

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div ref={containerRef} className="relative bg-gray-100 overflow-hidden rounded-lg">
        {/* Base image - fills container (swapped to 'po') */}
        <img
          src={baseSrc}
          alt="Po"
          draggable={false}
          className="w-full h-auto block object-cover"
          style={{ display: 'block' }}
        />

        {/* Overlay that will be clipped to reveal percentage. The overlay is sized in pixels equal to the container to avoid scaling with the slider. */}
        <div
          ref={overlayRef}
          className="absolute top-0 left-0 overflow-hidden"
          style={{
            width: containerSize.width ? containerSize.width + 'px' : '100%',
            height: containerSize.height ? containerSize.height + 'px' : '100%',
            pointerEvents: 'none',
            transition: 'clip-path 200ms cubic-bezier(.2,.9,.2,1)'
          }}
        >
          {/* Left label sits inside overlay so it's clipped together with the "przed" image */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="inline-block bg-white/70 backdrop-blur-sm text-xs font-semibold text-gray-800 px-3 py-1 rounded-full shadow-sm">
              PRZED CZYSZCZENIEM
            </span>
          </div>

          <img
            src={overlaySrc}
            alt="Przed"
            draggable={false}
            className="absolute top-0 left-0 block object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Draggable handle and invisible track (pointer-events on handle only) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percent)}
            onKeyDown={onKeyDown}
            onClick={onBarClick}
            onPointerDown={startDrag}
            className="pointer-events-auto w-full h-12 relative"
            style={{ touchAction: 'none' }}
          >
            {/* thicker track */}
            <div className="absolute left-6 right-6 top-1/2 transform -translate-y-1/2 h-1 bg-white/40 rounded-full shadow-inner" />

            {/* vertical divider line at current percent */}
            <div
              aria-hidden
              className="absolute top-0 bottom-0 -translate-x-1/2 pointer-events-none"
              style={{ left: `${percent}%`, width: 2, background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
            />

            {/* handle */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full flex items-center justify-center"
              style={{ left: `${percent}%`, width: 48, height: 48, boxShadow: '0 10px 30px rgba(2,6,23,0.35)', zIndex: 40 }}
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7L5 12L8 17" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 7L19 12L16 17" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right/base label (sits above overlay so it's always visible on base side) */}
        <div className="absolute top-4 right-4 z-30 pointer-events-none">
          <span className="inline-block bg-white/85 backdrop-blur-sm text-xs font-semibold text-gray-800 px-3 py-1 rounded-full shadow-sm">
            PO CZYSZCZENIU
          </span>
        </div>
      </div>

      {/* Native range input for precise control / accessibility */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(percent)}
        onChange={(e) => setPercent(Number(e.target.value))}
        className="w-full mt-3"
        aria-label="Przed i po"
      />
    </div>
  )
}
