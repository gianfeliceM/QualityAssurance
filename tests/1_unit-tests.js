const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("number", function () {
    assert.equal(convertHandler.getNum("45kg"), 45);
  });

  test("decimal", function () {
    assert.equal(convertHandler.getNum("4.5kg"), 4.5);
  });

  test("fractional", function () {
    assert.equal(convertHandler.getNum("45/2kg"), 45 / 2);
  });

  test("fractional decimal", function () {
    assert.equal(convertHandler.getNum("45.5/2kg"), 45.5 / 2);
  });

  test("double fraction", function () {
    assert.equal(convertHandler.getNum("45/5/5kg"), "invalid number");
  });

  test("default value", function () {
    assert.equal(convertHandler.getNum("kg"), 1);
  });

  test("unit value", function () {
    assert.equal(convertHandler.getUnit("1km"), "km");
  });

  test("invalid unit", function () {
    assert.equal(convertHandler.getUnit("5kgl"), "invalid unit");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("valid unit", function () {
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("For Each Valid Unit Inputs", function (done) {
    const input = ["gal", "mi", "km", "lbs", "kg"];
    const expect = ["L", "km", "mi", "kg", "lbs"];
    input.forEach(function (el, i) {
      assert.equal(convertHandler.getReturnUnit(el), expect[i]);
    });
    done();
  });
});
