import { add, create, undo, redo, currentItem } from "./undo-list";
import { describe, it, expect } from "@jest/globals";

describe("undo-list", () => {
    it("add はやり直しリストを削除する", () => {
        let xs = create();
        xs = add(xs, "a");
        xs = add(xs, "b");
        xs = undo(xs);
        expect(currentItem(xs)).toBe("a");
        xs = add(xs, "c");
        expect(currentItem(xs)).toBe("c");
        xs = redo(xs);
        expect(currentItem(xs)).toBe("c");
    });
    it("範囲外へのundoとredo", () => {
        let xs = create();
        xs = add(xs, "a");
        xs = add(xs, "b");
        xs = undo(xs);
        xs = undo(xs);
        expect(currentItem(xs)).toBe("a");
        xs = undo(xs);
        expect(currentItem(xs)).toBe("a");
        xs = redo(xs);
        expect(currentItem(xs)).toBe("b");
    });
    it("範囲外へのredoとundo", () => {
        let xs = create();
        xs = add(xs, "a");
        xs = add(xs, "b");
        xs = undo(xs);
        xs = redo(xs);
        xs = redo(xs);
        expect(currentItem(xs)).toBe("b");
        xs = redo(xs);
        expect(currentItem(xs)).toBe("b");
        xs = undo(xs);
        expect(currentItem(xs)).toBe("a");
    });
});
