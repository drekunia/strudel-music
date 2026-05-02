// @title GTR
// @by Andre Kurniawan
// @license CC BY-NC-SA

await initHydra()

setCps(140/60/4)

const energy = slider(200, 200, 10000)

shape(20,0.1,0.01)
  .scale(() => Math.sin(time)*1.5)
  .repeat(() => Math.sin(time)*getCps)
  .modulateRotate(o0)
  .scale(() => Math.sin(time))
  .modulate(noise(4,0,0))
  .rotate(0.1, 0.9)
  .colorama(() => Math.tan(time)*.2)
  .saturate(0.8)
.out(o0)

src(o0)
.modulate(osc(energy/100,0,0))
.out(o1)

src(o1)
.modulateKaleid(voronoi(() => Math.sin(time)*getCps,0.1,0.01),() => Math.sin(time)*getCps)
.scale(() => Math.sin(time)*getCps)
.out(o2)

render(o2)

// drums
$: stack(
    s("bd bd sd [~ sd] [~ sd] [bd <bd ~>] <sd ~> [~ sd]")
    .bank("dmx").dist("4:.2"),
    s("hh hh hh hh hh <hh oh> hh hh")
    .bank("dmx").dist("3:.1")
  )

$: n("[5 2 9 4]/4").scale("c:chromatic").transpose(-14)
  .s("triangle")

$: n("[1 3 <[4,5] [4,7] <[4,[9 8]] [5,[10 12]]>>]*6")
  .scale("c:dorian")
  .s("supersaw")
  .lpf(energy)
  .transpose(5)
  .gain(0.7)
  .pan(sine.slow(8))

$: chord("[Cm7  FM7]  Gm7")
  .voicing()
  .slow(4)
  .s("supersaw")
  .lpf(slider(500, 500, 2000))
  .room(0.5)
  .gain(0.35)
  .pan(sine.slow(2))

// 6/4 bd sd
_$: s("[bd ~ ~ [sd sd [~ ~ [sd sd]]]]/4")
  .bank("dmx").dist("4:.2")

// 6/4 hh
_$: s("hh").euclid(5, 8).fast(3)
  .bank("sds5").dist("3:.1").gain(0.1)