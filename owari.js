// @title Owari @by drekunia

setcpm(135/4)

d1: note("[e3 c4 g4 a5 b5 <e5 [f@2 d6]>]@3 < ~ e6> [c3 b3 d4 e5 a5 <b6 d5 c4>]@3 ~")
  .s("piano")
  .slow(8)
  .pan("<.35 .65>")
  .delay("<.5 .75>")
  .room(.8, 4)
  ._punchcard()


d2: note("<[e2 c3 g3 a4 b4] [f2 e3 a3 c4 d4] [d2 f3 a3 c4 e4] [g2 f4 a4 c5 e5]>")
  .s("piano")
  .room(.8, 4)
  .pianoroll()


d3: note("<[c6 e6 g6 b6] [a6 c7 e7 g7]>")
  .struct("t*16")
  .chunk(4, rev)
  .s("piano")
  .velocity("<0.4 0.8>")
  .coarse(3)
  .gain(.7)
  .pan(cosine.range(.25, .75))
  .room(.2)
  ._punchcard()


d4: 
  note("c6*16") 
  .s("piano")
  .gain(.4)
  .degradeBy(.8)
  .jux(rev)
  .room(.6, 8)
  ._punchcard()


d5:
  chord("CM7 FM13 Dm9 G13").slow("4")
  .voicing().s("gm_choir_aahs").gain(.2).attack(rand.range(.3, .7))
  .chorus(.5)
  .room(.4, 8)
  ._punchcard()
