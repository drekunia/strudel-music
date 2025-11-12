// @title Contemplate
// @by Andre Kurniawan
// @license CC BY-NC-SA

setcpm(180/60)

stack(
  chord("CM7 D7 Em7 GM7")
  .voicing().vowel("o").s("supersaw")
  .tremolosync("4").tremoloskew(".85")
  .lpf(2000).room(.5)
  ._punchcard(), 
  
  stack(
    s("{bd [sd ~ ~ bd] [bd ~ ~ ~] sd}*4")
    .bank("tr909"),
    s("{[~ hh ~ <hh <hh <oh cp>>>]*4}*4")
    .bank("tr808"),
  )
  ._scope(),

  n(`
  [12 ~ 15 [~ 14]] [13 10] 11
  <[[6, 9] ~ 8 3] [[11, 13] ~ [10, 12] [11, 13]]>
  `)
  .scale("C:lydian").sound("piano").hpf(1000).room(.8)
  .pianoroll()
)
