// this import will remain the original one
import * as index from "./index"


describe("the index module", () => {
  // we need to clear the module's cache to force Jest to use our mocks
  beforeEach(() => jest.resetModules())

  /**
   * Use the actual module
   */
  it("works without mocks", () => {
    expect(index.plus10(10)).toBe(20)
    expect(index.isInRange(10)).toBe(true)
  })

  /**
   * Mock for a specific test within a suite.
   * Note how we need to use dynamic imports to reload the dependency from
   * the file we are testing.
   */
  describe("when local mocks are defined", () => {
    it("works with `subtract` local mock", async () => {
      // first mock, changing both a function and a value
      jest.mock("./mod", () => ({
        sum: (a,b) => a - b,
        MAX: 10
      }))
      const index = await import("./index")
      expect(index.plus10(10)).toBe(0)
      expect(index.isInRange(10)).toBe(false)
    })

    it("works with `multiply` local mock", async () => {
      // second mock, changing again both a function and a value
      jest.mock("./mod", () => ({
        sum: (a,b) => a * b,
        MAX: 1
      }))
      const index = await import("./index")
      expect(index.plus10(10)).toBe(100)
      expect(index.isInRange(1)).toBe(false)
    })
  })

})
