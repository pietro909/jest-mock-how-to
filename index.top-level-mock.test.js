// this import will remain the original one
import * as index from "./index"

/**
 * Won't work because mockObject is not initialized.
 * ReferenceError: Cannot access 'mockObject' before initialization

const mockObject = {
  plus10: _ => -1,
  MAX: 0
}
jest.mock("./mod", () => mockObject)

*/


/**
 * Won't work because plus10 and MAX are undefined.
 * TypeError: (0 , _mod.sum) is not a function
const plus10 = _ => 42
const MAX = 12
jest.mock("./mod", () => ({
  plus10,
  MAX
}))

*/


// This one works because doMock is not hoisted
const plus10 = _ => 42
const MAX = 12
jest.doMock("./mod", () => ({
  plus10,
  MAX
}))


describe("the index module", () => {

  /**
   * Use the actual module
   */
  it("works without mocks", () => {
    expect(index.plus10(10)).toBe(20)
    expect(index.isInRange(10)).toBe(true)
  })
})
