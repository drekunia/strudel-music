setcps(158/60/4)

const high = note(
  "d6 [a5 c6] e6 ~ f6 [e6 c6] a5"
)
  .s("sine")
  .fast(2)
  .gain(.15)
  .room(.35)

const drums =
  stack(
    s("bd bd sd [~ sd] [~ sd] [bd <bd ~>] <sd ~> [~ [sd <sd!3 rim>]]").gain(.6).rarely(palindrome),
    s("hh hh hh hh hh <hh oh> hh hh").juxBy(.15, press).gain(.4).degrade()
  ).coarse(3)
  .speed("<1.5!3 2.5>")
  .legato(rand)
  .sometimesBy(.125, x=>x.fast(2))

const mid = note(`
<
  [d4 a4 c5 [e5 f5]]
  [f4 c5 e5 [a5 g5]]
  [e4 b4 d5 [g5 fs5]]
  [g4 d5 a5 [b5 a5]]
>
`)
  .s("triangle")
  .attack(.002)
  .decay(.09)
  .sustain(.12)
  .release(.15)
  .gain(.5)
  .room(2)
  .hpf(1500)
  .fast(2)
  .degradeBy(.35)

const accent = note(`
<
  [d5 [a5 c6] e6 [f6 e6]]
  [[c6 a5] e6 g6 [a6 g6]]
  [b5 [e6 g6] d7 [fs7 d7]]
  [[d6 a5] b5 [e6 fs6] a6]
>
`)
  .fast(2)
  .s("sine")
  .attack(.001)
  .decay(.07)
  .sustain(.08)
  .release(.1)
  .gain(.45)
  .pan(sine.range(.25,.75).slow(7))
  .room(.5)

const bass = note(`
<
  d1 ~
  f1 ~
  e1 ~
  g1 ~
>
`)
  .s("supersaw")
  .unison(5)
  .detune(.15)
  .spread(.35)

  .lpf(700)
  .lpq(8)

  .lfo({
    c: "lpf",
    rate: 2,
    depth: 2,
    shape: "sine"
  }, "wobble")

  .lfo({
    rate: 1,
    depth: 4,
    dc: 0,
    shape: "ramp"
  })
  .gain(.85)

stack(
  mid,
  accent,
  bass,
  high,
  drums
)
