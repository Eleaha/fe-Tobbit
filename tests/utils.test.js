import { expect, test, describe } from "vitest";
import { timestampToDate } from "../src/utils/utils";
import { formatPreviewText } from "../src/utils/utils";

describe("timestampToDate", () => {
    test("function returns a string", () => {
        expect(typeof timestampToDate("2020-11-22T11:13:00.000Z")).toBe("string");
    });
    test("function returns date correctly formatted", () => {
        expect(timestampToDate("2020-11-22T11:13:00.000Z")).toBe("Sun Nov 22 2020 11:13");
        expect(timestampToDate("2020-09-16T17:26:00.000Z")).toBe("Wed Sep 16 2020 17:26");
    });
});

describe("generatePreviewText", () => {
    test("returns a string", () => {
        expect(typeof formatPreviewText("some preview text I'd like to preview.", 3)).toBe(
            "string"
        );
    });
    test("returns the desired number of preview words", () => {
        expect(formatPreviewText("some preview text I'd like to preview.", 2)).toBe(
            "some preview..."
        );
    });
    test("the returned string ends with an elipses if words havs been cut", () => {
        expect(formatPreviewText("some preview text I'd like to preview.", 2).endsWith("...")).toBe(
            true
        );
    });
    test("returns the whole string with no elipses if the number of preview words excedes the length of the initial text", () => {
        expect(formatPreviewText("some preview text I'd like to preview.", 20)).toBe(
            "some preview text I'd like to preview."
        );
    });
    test("returns an empty string if passed an empty string", () => {
        expect(formatPreviewText("", 3)).toBe("");
    });
    test("returns an empty string if the number of words is 0", () => {
        expect(formatPreviewText("some preview text I'd like to preview.", 0)).toBe("");
    });
});
