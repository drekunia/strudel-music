// @title we're all disoriented
// @by Andre Kurniawan
// @license CC BY-NC-SA

setcpm(110/4)

$: note("b3 d3 c3").fast(4).s("gm_epiano1").hpf(500)._punchcard()
  .pan(sine.slow(4)).phaser(sine).phaserdepth(sine)

$: note("e2 g2 a3 c3").s("sine").lpf(1000)._punchcard()
  .jux(press)

$: note("f#5 [g5 e5 d5@2] [a4 <<b4 [b4 <d5 f#4>]> g4>] ~ ").s("gm_violin")
  ._punchcard()
  .gain(.8)
  // .pan("<.35 .65>") // lead effect
  // rhythm effect
  .tremsync(12).tremoloshape("cosine")
  .pan(sine)
  .hpf(2000)
  // base
  .room(.8)
  .roomsize(4)
  .slow(4)

$: chord("CM13 <Em9 GM7>").voicing().slow(8).gain(.8).s("gm_pad_choir")
  .tremsync(4).tremolodepth(1.5).pan(sine.fast(4)).room(.8).rsize(4)._spectrum()

$: note("<c2!3 [c2@7 [b1 e2]]> <e1 <g1 [g1@7 [f#2 b2]] [g1@7 [a2 b1]]>>").slow(8).s("supersaw").lpf(2000)
  ._scope()
  .spiral()

$: stack(
    s("bd bd sd [~ sd] [~ sd] [bd <bd ~>] <sd ~> [~ [sd <sd!3 rim>]]").bank("dmx").dist("4:.2"),
    s("hh hh hh hh hh <hh oh> hh hh").bank("dmx").dist("3:.1")
  ).slow(2)
  .sometimesBy(.125, x=>x.fast(2))
  .lpf(5000)
  .lfo({ depth: 2 }, 'lpf_mod')
  ._scope()

$: n(irand(16).seg(16)).scale("c:lydian").s("sawtooth")
  .room(.4).roomsize(4)
  .sometimesBy(.125, x=>x.s("pink"))
  .gain(.6)
  .sometimesBy(.25, x=>x.fast(2))
  .slow(4)
  .pan("<.35 .65 .5 0 1>")
  ._punchcard()
  // .sometimes(x=>x.fast(4)) // late
