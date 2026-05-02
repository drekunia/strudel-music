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
  .gain(.5)
  // .pan("<-.1 .1>") // lead effect
  // rythm effect
  .tremsync(12).tremoloshape("cosine")
  .pan(sine)
  .hpf(2000)
  .room(.8)
  .roomsize(4)
  .slow(4)
  .room(.2)

$: chord("CM13 <Em9 GM7>").voicing().slow(8).gain(.8).s("gm_pad_choir").tremsync(4).tremolodepth(1.5).pan(sine.fast(4)).room(.8).rsize(4)._spectrum()

$: note("<c2!3 [c2@7 [b1 e2]]> <e1 <g1 [g1@7 [f#2 b2]] [g1@7 [a2 b1]]>>").slow(8).s("supersaw").lpf(2000)._scope().spiral()