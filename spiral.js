// @title Spiral
// @by Andre Kurniawan
// @license CC BY-NC-SA

setcpm(110/4)

$: note("b3 d3 c3").fast(4).s("gm_epiano1").gain(.6).hpf(500).pan(sine.slow(4)).phaser(sine).phaserdepth(sine)._punchcard()

$: chord("CM13 <Em9 GM7>").voicing().slow(8).gain(.8).s("gm_pad_choir").tremsync(4).tremolodepth(1.5).pan(sine.fast(4)).room(.8).rsize(4)._spectrum()

_$: note("e2 g2 a3 c3").s("sine").gain(.6).lpf(1000).juxBy(.35, press)._punchcard()

_$: note("f#5 [g5 e5 d5@2] [a4 <<b4 [b4 <d5 f#4>]> g4>] ~ ").s("gm_violin").tremsync(12).tremoloshape("cosine").pan(sine).hpf(2000).room(.8).roomsize(4).slow(4)._punchcard()

_$: note("<c2!3 [c2@7 [b1 e2]]> <e1 <g1 [g1@7 [f#2 b2]] [g1@7 [a2 b1]]>>").slow(8).s("supersaw").lpf(2000).spiral()._scope()

_$:
  s("bd? bd? ~ [~ bd?] [~ ~] [bd? <bd? ~>] <~ ~> [~ [bd? <~!3 bd?>]]").gain(.7)
  
  // stack(
  //   s("bd bd sd [~ sd] [~ sd] [bd <bd ~>] <sd ~> [~ [sd <sd!3 rim>]]").gain(.7).rarely(palindrome),
  //   s("hh hh hh hh hh <hh oh> hh hh").gain(.4).degrade()
  // ).coarse(3)

  .speed(1.5)
  .bank("dmx")
  .slow(2)
  .sometimesBy(.125, x=>x.fast(2))
  .legato(rand)
  .lpf(slider(1000, 1000, 5000, 500))
  .lfo({ depth: 2 }, 'lpf_mod')
  ._scope()

_$: n(irand("8 16").seg(16)).scale("c:lydian").s("sawtooth")
  .room(.4).roomsize(4)
  .sometimesBy(slider(0), x=>x.s("white").lpf(3500))
  .gain(.5)
  .rarely(fast(2))
  .slow(4)
  .pan("<.35 .65 .5 0 1>")
  // .sometimes(x=>x.fast(4))
  ._punchcard()
