test("test truthiness", () => {
    const isNull = null;
    expect(isNull).toBeNull();
    expect(isNull).toBeDefined();
    expect(isNull).toBeFalsy();

    const isUndefined = undefined;
    expect(isUndefined).toBeUndefined();
    expect(isUndefined).toBeFalsy();

    const name = "Sony";
    expect(name).toBeDefined();
    expect(name).toBeTruthy();
});