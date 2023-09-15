import { expect } from "chai";
import { describe, it } from "vitest";
import { generateChristmasTree } from "./tree.js";

describe("generateChristmasTree", () => {
  it("should generate a tree with the correct height", () => {
    // expect(generateChristmasTree(1)).to.equal("*\n");
    expect(generateChristmasTree(2)).to.equal("*\n***\n*\n");
    expect(generateChristmasTree(3)).to.equal("*\n***\n*****\n*\n");
    expect(generateChristmasTree(4)).to.equal("*\n***\n*****\n*******\n*\n");
  });
});
