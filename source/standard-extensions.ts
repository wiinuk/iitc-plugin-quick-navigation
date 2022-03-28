export function error(
    template: TemplateStringsArray,
    ...substitutions: unknown[]
): never {
    const message = String.raw(
        template,
        ...substitutions.map((x) =>
            typeof x === "string" ? x : JSON.stringify(x)
        )
    );
    throw new Error(message);
}
