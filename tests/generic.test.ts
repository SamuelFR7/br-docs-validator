import { describe, expect, it } from "vitest";

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
    expect(generic.isValid("")).toBeFalsy();
    expect(generic.isValid("00000000000"));
    expect(generic.isValid("00000000000000")).toBeFalsy();
    expect(generic.isValid("000000000000")).toBeFalsy();
    expect(generic.isValid("000000000000000")).toBeFalsy();
  });

  it("should return punctuated cnpj", () => {
    expect(generic.punctuated("11444777000161")).toBe("11.444.777/0001-61");
  });

  it("should return punctuated cpf", () => {
    expect(generic.punctuated("05541739055")).toBe("055.417.390-55");
  });

  it("should return nothing", () => {
    expect(generic.punctuated("")).toBe("");
  });
});
