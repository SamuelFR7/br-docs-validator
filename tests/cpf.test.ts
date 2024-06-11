import { expect, it, describe } from "vitest";

import { cpf } from "../src";

describe("cpf", () => {
  it("should not validate invalid values", () => {
    expect(cpf.isValid("000000000000")).toBeFalsy();
    expect(cpf.isValid("05541739054")).toBeFalsy();
  });

  it("should return punctuated cpf", () => {
    expect(cpf.punctuated("05541739055")).toBe("055.417.390-55");
  });

  it("should return nothing", () => {
    expect(cpf.punctuated("")).toBe("");
  });

  it("should validate unformatted strings", () => {
    expect(cpf.isValid("05541739055")).toBeTruthy();
  });

  it("should validate formatted strings", () => {
    expect(cpf.isValid("179.116.990-20")).toBeTruthy();
  });

  it("should invalidate a blacklist cpf", () => {
    expect(cpf.isValid("00000000000")).toBeFalsy();
    expect(cpf.isValid("11111111111")).toBeFalsy();
    expect(cpf.isValid("22222222222")).toBeFalsy();
    expect(cpf.isValid("33333333333")).toBeFalsy();
    expect(cpf.isValid("44444444444")).toBeFalsy();
    expect(cpf.isValid("55555555555")).toBeFalsy();
    expect(cpf.isValid("66666666666")).toBeFalsy();
    expect(cpf.isValid("77777777777")).toBeFalsy();
    expect(cpf.isValid("88888888888")).toBeFalsy();
    expect(cpf.isValid("99999999999")).toBeFalsy();
    expect(cpf.isValid("12345678909")).toBeFalsy();
  });
});
