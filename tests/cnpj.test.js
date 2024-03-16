import { expect, describe, it } from "vitest";

import { cnpj } from "../src";

describe("cnpj", () => {
  it("should not validate invalid values", () => {
    expect(cnpj.isValid("")).toBeFalsy();
    expect(cnpj.isValid(null)).toBeFalsy();
    expect(cnpj.isValid(undefined)).toBeFalsy();
    expect(cnpj.isValid()).toBeFalsy();
    expect(cnpj.isValid("18856024000112")).toBeFalsy();
  });

  it("should return punctuated cnpj", () => {
    expect(cnpj.punctuated("11444777000161")).toBe("11.444.777/0001-61");
  });

  it("should return a empty string", () => {
    expect(cnpj.punctuated("")).toBe("");
  });

  it("should validate unformatted strings", () => {
    expect(cnpj.isValid("11444777000161")).toBeTruthy();
    expect(cnpj.isValid("18856024000102")).toBeTruthy();
  });

  it("should validate formated strings", () => {
    expect(cnpj.isValid("54.550.752/0001-55")).toBeTruthy();
  });

  it("should not validate blacklist cnpj", () => {
    expect(cnpj.isValid("00000000000000")).toBeFalsy();
    expect(cnpj.isValid("11111111111111")).toBeFalsy();
    expect(cnpj.isValid("22222222222222")).toBeFalsy();
    expect(cnpj.isValid("33333333333333")).toBeFalsy();
    expect(cnpj.isValid("44444444444444")).toBeFalsy();
    expect(cnpj.isValid("55555555555555")).toBeFalsy();
    expect(cnpj.isValid("66666666666666")).toBeFalsy();
    expect(cnpj.isValid("77777777777777")).toBeFalsy();
    expect(cnpj.isValid("88888888888888")).toBeFalsy();
    expect(cnpj.isValid("99999999999999")).toBeFalsy();
  });
});
