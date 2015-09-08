describe('triangle', function() {
    it("is not a triangle if the sum of the lowest two values is less than the greatest", function() {
        expect(triangle(9, 3, 2)).to.equal("not a triangle");
    });

    it("is equilateral if all sides are equal", function() {
        expect(triangle(5, 5, 5)).to.equal("is an equilateral triangle");
    });

    it("is isosceles if two sides are equal", function() {
        expect(triangle(9, 9, 12)).to.equal("is an isosceles triangle");
    });

    it("is scalene if no sides are equal", function() {
        expect(triangle(6, 9, 12)).to.equal("is a scalene triangle");
    });
});
