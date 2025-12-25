function sum(a, b) {
    return a + b;
}

// eslint-disable-next-line no-undef
test("sums two numbers", () => {
    expect(sum(1, 2)).toBe(3);
});
