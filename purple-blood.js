// @title Purple Blood by drekunia

setcpm(160/4)

await initHydra({detectAudio: true})

noise(40)
  .colorama(() => 0.95 - (a.fft[3] * 30))
  .modulate(voronoi(2, 1.5), 0.4)
  .modulateScale(osc(3, 0.125, 0.05).kaleid(50))
  .posterize(5, 0.4)
  .out()

d1: stack(
  note("<[a2 e3 b4 c4 g5]!2 [f#2 c#3 g#3 a3 e4] [b2 f#3 c#4 d4 a5]>").pan(.30),
  note("<[a2 e3 b4 c4 g5]!2 [e2 b3 f#3 g3 d4] [g2 d3 a4 b4 f#5]>").pan(.70)
) 
  .s("sine").lpf(5000).room(.8, 4).gain(.5)


d2: n(irand(8).seg("<1!3 <2!2 3>>")).scale("<c:lydian!3 c:dorian>".slow(4)).trans(12).s("sine")
  .attack(.5)
  .release(.1)
  .fm(1)
  .fmh(1.5)
  .fmattack(.2)
  .gain(.35)


d3: s("pink").euclid(3,8).lpf(sine.range(1000, 3500)).degradeBy(.7).slow(4).sometimes(fast(8)).juxBy(.25, rev)
