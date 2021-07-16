// This is the app we test
import { sum, MAX } from "./mod"

function plus10(n) {
  return sum(n, 10)
}

function isInRange(n) {
  return n < MAX
}

export {
  plus10,
  isInRange
}

