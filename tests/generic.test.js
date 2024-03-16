import { describe, expect, it, should } from "vitest";

import { generic } from "../src";

describe("generic validator", () => {
  it("should validate a cpf", () => {
    expect(generic.isValid("28003499054")).toBeTruthy();
  });

  it("should validate a cnpj", () => {
    expect(generic.isValid("03610241000140")).toBeTruthy();
  });

  it("should not validate a invalid cpf", () => {
    expect(generic.isValid("28003499051")).toBeFalsy();
  });

  it("should not validate a invalid cnpj", () => {
    expect(generic.isValid("03610241000141")).toBeFalsy();
  });

  it("should not validate invalid values", () => {
    expect(generic.isValid()).toBeFalsy();
    expect(generic.isValid(null)).toBeFalsy();
    expect(generic.isValid(undefined)).toBeFalsy();
    expect(generic.isValid("")).toBeFalsy();
    expect(generic.isValid("00000000000"));
    expect(generic.isValid("00000000000000")).toBeFalsy();
    expect(generic.isValid("000000000000")).toBeFalsy();
    expect(generic.isValid("000000000000000")).toBeFalsy();
  });
});
