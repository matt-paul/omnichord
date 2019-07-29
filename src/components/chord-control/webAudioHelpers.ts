export const createOsc = (context: any, oscType: any) => {
  const osc = context.createOscillator()
  osc.type = oscType
  return osc
}

// Use like this...this
// const osc = createOsc(ctx, "square")
// osc.frequency.value = chord.freq
// osc.connect(ctx.destination)
// osc.start()

export const createGainNode = (context: any) => {
  const gainNode = context.createGain()
  return gainNode
}
