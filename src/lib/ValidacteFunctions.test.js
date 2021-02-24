import {
  isValidProductName,
  isValidEmailAdress,
  isValidPrice,
} from "./ValidateFunctions";

describe("Product name is valid", () => {
  // einzelne Tests
  it("should invalidte the product name when it is less then 2 characters", () => {
    const result = isValidProductName("A");
    expect(result).toBeFalsy();
  });
  it("should validate the product name once it has more than 2 characters", () => {
    const result = isValidProductName("Nimbus 2022");
    expect(result).toBeTruthy();
  });
});

describe("Mailing Adress is valid for the support Contact", () => {
  it("should return true wenn a '@' symbol is present in the email adress", () => {
    const result = isValidEmailAdress("emmanuellosch@jasmine.de");
    expect(result).toBeTruthy();
  });
});

describe("Price is correct with a '.'", () => {
  it("should return false when a ',' is tipped", () => {
    const result = isValidPrice("15.50");
    expect(result).toBeFalsy();
  });
});
