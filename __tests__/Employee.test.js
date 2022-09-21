const Employee = require("../lib/Employee");

// name,email,id,role validation


describe("Employee", () => {
    describe("has a name", () => {
        it("has a name", () => {
            const employee = new Employee("John Doe", 3);

            expect(employee.name).toEqual("John Doe");
            expect(employee.name.length).toBeGreaterThan(2);
    });

        it("has an Email", () => {
            expect()
        })







    });
});
