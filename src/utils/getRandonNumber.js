export const getRandonNumber = (min, max) => {
  const amplitud = max - min;
  const amplitudRandon = Math.random() * amplitud;

  return min + Math.round(amplitudRandon);
};
