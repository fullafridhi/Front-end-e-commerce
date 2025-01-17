"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
describe("calculateRgba", function () {
    it("is a function", function () {
        expect(typeof colors_1.calculateRgba).toEqual("function");
    });
    it("returns the same passed in rgb value with custom opacity in old syntax", function () {
        expect((0, colors_1.calculateRgba)("rgb(255, 255, 255, 0.5)", 1)).toEqual("rgba(255, 255, 255, 0.5)");
        expect((0, colors_1.calculateRgba)("rgba(255, 255, 255, 0.5)", 1)).toEqual("rgba(255, 255, 255, 0.5)");
    });
    it("returns the same passed in rgb value with custom opacity in new syntax", function () {
        expect((0, colors_1.calculateRgba)("rgb(255 255 255 / 0.5)", 1)).toEqual("rgba(255 255 255 / 0.5)");
        expect((0, colors_1.calculateRgba)("rgba(255 255 255 / 0.5)", 1)).toEqual("rgba(255 255 255 / 0.5)");
    });
    it("adds passed in opacity to the rgb values in old syntax", function () {
        expect((0, colors_1.calculateRgba)("rgb(255, 255, 255)", 0.5)).toEqual("rgba(255, 255, 255, 0.5)");
        expect((0, colors_1.calculateRgba)("rgba(255, 255, 255)", 0.5)).toEqual("rgba(255, 255, 255, 0.5)");
    });
    it("adds passed in opacity to the rgb values in new syntax", function () {
        expect((0, colors_1.calculateRgba)("rgb(255 255 255)", 0.5)).toEqual("rgba(255 255 255 / 0.5)");
        expect((0, colors_1.calculateRgba)("rgba(255 255 255)", 0.5)).toEqual("rgba(255 255 255 / 0.5)");
    });
    it("converts hash values to rgb", function () {
        expect((0, colors_1.calculateRgba)("#ffffff", 1)).toEqual("rgba(255, 255, 255, 1)");
    });
    it("calculates 3 character hash value to the correct rgba", function () {
        expect((0, colors_1.calculateRgba)("#fff", 1)).toEqual("rgba(255, 255, 255, 1)");
    });
    it("returns the passed in opacity as the part of the rgba value", function () {
        expect((0, colors_1.calculateRgba)("#fff", 0.5)).toEqual("rgba(255, 255, 255, 0.5)");
    });
    it("calculated the correct rgba value without the starting # passed in", function () {
        expect((0, colors_1.calculateRgba)("fff", 1)).toEqual("rgba(255, 255, 255, 1)");
    });
    it("calculates the correct rgba using basic color names", function () {
        expect((0, colors_1.calculateRgba)("maroon", 0.7)).toEqual("rgba(128, 0, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("red", 0.7)).toEqual("rgba(255, 0, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("orange", 0.7)).toEqual("rgba(255, 165, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("yellow", 0.7)).toEqual("rgba(255, 255, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("olive", 0.7)).toEqual("rgba(128, 128, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("green", 0.7)).toEqual("rgba(0, 128, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("purple", 0.7)).toEqual("rgba(128, 0, 128, 0.7)");
        expect((0, colors_1.calculateRgba)("fuchsia", 0.7)).toEqual("rgba(255, 0, 255, 0.7)");
        expect((0, colors_1.calculateRgba)("lime", 0.7)).toEqual("rgba(0, 255, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("teal", 0.7)).toEqual("rgba(0, 128, 128, 0.7)");
        expect((0, colors_1.calculateRgba)("aqua", 0.7)).toEqual("rgba(0, 255, 255, 0.7)");
        expect((0, colors_1.calculateRgba)("blue", 0.7)).toEqual("rgba(0, 0, 255, 0.7)");
        expect((0, colors_1.calculateRgba)("navy", 0.7)).toEqual("rgba(0, 0, 128, 0.7)");
        expect((0, colors_1.calculateRgba)("black", 0.7)).toEqual("rgba(0, 0, 0, 0.7)");
        expect((0, colors_1.calculateRgba)("gray", 0.7)).toEqual("rgba(128, 128, 128, 0.7)");
        expect((0, colors_1.calculateRgba)("silver", 0.7)).toEqual("rgba(192, 192, 192, 0.7)");
        expect((0, colors_1.calculateRgba)("white", 0.7)).toEqual("rgba(255, 255, 255, 0.7)");
    });
});
