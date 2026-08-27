/*
Marketing Systems / Services section — removed from index.html on 2026-08-26.
To restore:
  1. Paste the SERVICES array back near the other data arrays (after FAQ_ITEMS).
  2. Paste the JSX block back into App() between <BrandWeb /> and the FAQ section
     (right after the secondary <Marquee items={MARQUEE_SECONDARY} ... /> line).
  3. Add back: const [servicesRef, servicesVisible] = useReveal(0.25);
  4. Add 'Services' back to the nav array ['Work', 'About', 'Contact'] and the
     Marketing Systems entry to SKILLS.
The CSS for the rows (".srv-*" / "Services rows") was left in index.html.
Git tag pre-remove-services-2026-08-26 has the full working version.
*/

// ---- data ----
const SERVICES = [
{
  step: '01',
  kicker: 'Attract',
  title: 'Meta Ads',
  body: 'The ads are written around the three things that stop people from signing up: price, time & "I\'ll start Monday." I put out new creative every week so the ads don\'t wear out and the cost per lead stays flat.',
  included: ['Daily ad management', 'Weekly creative drop', 'Monthly performance readout']
},
{
  step: '02',
  kicker: 'Nurture',
  title: 'Email + SMS',
  body: 'Follow-up runs on both email and text. Email carries the longer answers about pricing and what to expect, and SMS carries the short reminders people open right away. Each message covers one objection.',
  included: ['Full sequence build', 'Copywriting', 'Deliverability setup', 'Ongoing testing']
},
{
  step: '03',
  kicker: 'Capture',
  title: 'AI Phone Agent',
  body: 'The agent picks up the calls the front desk can\'t get to, books the trial, sends a confirmation text & follows up if the caller drops. It\'s trained on your intro offer, pricing and schedule so it answers like someone who works there.',
  included: ['Voice agent setup', 'Knowledge base build', 'Booking-system integration']
}];

// ---- JSX (inside App return) ----
      {/* ── SERVICES ── */}
      <section id="services" ref={servicesRef} style={{ padding: '100px 8vw', background: 'var(--bg2)', borderTop: '1px solid var(--hair)' }}>
        <div style={{ marginBottom: 72, maxWidth: 760 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 16, fontFamily: "'Google Sans',sans-serif" }}>04 · Marketing Systems</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            <Words text="Ads, follow-up & a phone agent." visible={servicesVisible} />
            <br/>
            <em style={{ color: accent }}>
              <Words text="Same person runs all three." visible={servicesVisible} base={360} />
            </em>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 20, fontFamily: "'Google Sans',sans-serif", lineHeight: 1.65, fontWeight: 'var(--body-weight)' }}></p>
        </div>

        <div style={{ position: 'relative', maxWidth: 1100 }}>
          {/* Vertical spine connecting the step numbers */}
          <div style={{ position: 'absolute', left: 27, top: 28, bottom: 28, width: 1, background: `linear-gradient(to bottom, ${accent}00 0%, ${accent}66 8%, ${accent}66 92%, ${accent}00 100%)`, zIndex: 0 }} />

          {SERVICES.map((s, i) => {
            const [ref, vis] = useReveal(0.15);
            const isLast = i === SERVICES.length - 1;
            return (
              <div key={i}>
                <div ref={ref} className="service-row" style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr 220px',
                  gap: 48,
                  alignItems: 'start',
                  padding: '36px 0',
                  position: 'relative',
                  transition: 'opacity 0.7s, transform 0.7s',
                  transitionDelay: `${i * 80}ms`,
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'translateY(0)' : 'translateY(24px)'
                }}>
                  {/* Step number disc on the spine */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '50%',
                      background: 'var(--bg2)',
                      border: `1px solid ${accent}55`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Google Sans',sans-serif",
                      fontSize: 18, fontWeight: 700, color: accent,
                      letterSpacing: '0.02em',
                      transform: vis ? 'scale(1) rotate(0deg)' : 'scale(0.35) rotate(-15deg)',
                      transition: 'transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transitionDelay: `${i * 90 + 220}ms`,
                      willChange: 'transform'
                    }}>{s.step}</div>
                  </div>

                  {/* Copy column */}
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: accent, marginBottom: 8, fontFamily: "'Google Sans',sans-serif", fontWeight: 600 }}>{s.kicker}</div>
                    <h3 style={{ fontFamily: "'Google Sans',sans-serif", fontSize: 28, fontWeight: 700, color: 'var(--ink)', marginBottom: 16, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{s.title}</h3>
                    <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, fontFamily: "'Google Sans',sans-serif", fontWeight: 'var(--body-weight)', maxWidth: 560 }}>{s.body}</p>
                  </div>

                  {/* Included column */}
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 14, fontFamily: "'Google Sans',sans-serif", fontWeight: 600 }}>Included</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {s.included.map((item, j) =>
                        <li key={j} style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6, fontFamily: "'Google Sans',sans-serif", fontWeight: 'var(--body-weight)', paddingLeft: 14, position: 'relative', marginBottom: 6 }}>
                          <span style={{ position: 'absolute', left: 0, top: 0, color: accent }}>+</span>
                          {item}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Flow arrow between rows */}
                {!isLast &&
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 27, marginLeft: -27, transform: 'translateX(15px)' }}>
                    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                      <line x1="12" y1="2" x2="12" y2="26" stroke={accent} strokeOpacity="0.5" strokeWidth="1" />
                      <polyline points="6,22 12,30 18,22" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                }
              </div>);
          })}
        </div>

        {/* Closing line that points to the next step (contact) */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--hair)', maxWidth: 760 }}>
          <p style={{ fontSize: 14, color: 'var(--ink-dim)', fontFamily: "'Google Sans',sans-serif", lineHeight: 1.7, fontStyle: 'italic' }}>
            You can start with one piece or run all three. Together they cover everything from the first ad to the booked appointment. <a href="#contact" style={{ color: accent, textDecoration: 'none', borderBottom: `1px solid ${accent}55`, fontStyle: 'normal' }}>See if it fits your business →</a>
          </p>
        </div>
      </section>
