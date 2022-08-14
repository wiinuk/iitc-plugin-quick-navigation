export interface UndoList<T> {
    readonly items: readonly T[];
    readonly index: number;
}
export function create<T>({
    undoList,
    redoList,
}: {
    undoList?: T[];
    redoList?: T[];
} = {}): UndoList<T> {
    return {
        items: [...(undoList ?? []), ...(redoList ?? [])],
        index: undoList?.length ?? 0,
    };
}
export function add<T>({ items, index }: UndoList<T>, item: T): UndoList<T> {
    return {
        items: [...items.slice(0, index + 1), item],
        index: Math.min(index + 1, items.length),
    };
}
export function undo<T>({ items, index }: UndoList<T>): UndoList<T> {
    return {
        items,
        index: Math.max(index - 1, 0),
    };
}
export function redo<T>({ items, index }: UndoList<T>): UndoList<T> {
    return {
        items,
        index: Math.min(index + 1, items.length - 1),
    };
}
export function currentItem<T>({ items, index }: UndoList<T>) {
    return items[index];
}
export function find<T>(
    { items }: UndoList<T>,
    predicate: (item: T) => boolean
) {
    for (const x of items) {
        if (predicate(x)) {
            return true;
        }
    }
    return false;
}
export function allItems<T>({ items }: UndoList<T>): Iterable<T> {
    return items;
}
export function* previousItems<T>({ items, index }: UndoList<T>) {
    for (let i = 0; i < index; i++) {
        yield items[i] as T;
    }
}
export function* nextItems<T>({ items, index }: UndoList<T>) {
    for (let i = index + 1; i < items.length; i++) {
        yield items[i] as T;
    }
}
