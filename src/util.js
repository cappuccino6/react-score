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

export const getElementTarget = (e, key) => {
  if (!(e instanceof Element)) return
  if (e.dataset[key]) {
    return e
  } else {
    return getElementTarget(e.parentElement, key)
  }
}

// 节流
export const throttle = (func, delay) => {
  let run = true
  return function () {
    if (!run) {
      return
    }
    run = false
    setTimeout(() => {
      func.apply(this, arguments)
      run = true
    }, delay)
  }
}
