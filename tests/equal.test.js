test("test toBe", () => {
    const firstname = "Sony";
    const lastname = "Darmawan";
    const hello = `Hello ${firstname} ${lastname}`;

    expect(hello).toBe("Hello Sony Darmawan");
});

test("test toEqual", () => {
    const data = {
        id: "Sony"
    };
    Object.assign(data, {
        name: "Eko"
    });

    expect(data).toEqual({
        id: "Sony",
        name: "Eko"
    });
});