export const calcScore = score => {
  if (score <= 0) return 0
  const int = parseInt(score)
  const decimal = score % 1
  if (decimal === 0.5) {
    return int + decimal
  } else if (decimal > 0.5) {
    return int + 1
  } else {
    return int
  }
}