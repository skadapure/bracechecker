const bracechecker = require('../');
const strTrue = "()(()(()))";
const strEarlyFalse = ")()(()(()))";
const strFalse = "()(()(())))";
const strAnotherFalse = "()(()())()))";
describe("Check Brace", () => {
  it("Brace Checking True", () => {
      expect(bracechecker(strTrue)).toBe(true);
    }
  );
  it("Brace Checking False", () => {
      expect(bracechecker(strFalse)).toBe(false);
    }
  );
  it("Brace Checking Early False", () => {
      expect(bracechecker(strEarlyFalse)).toBe(false);
    }
  );
  it("Brace Checking Another False", () => {
      expect(bracechecker(strAnotherFalse)).toBe(false);
    }
  );
});