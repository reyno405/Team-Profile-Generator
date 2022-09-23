const Employee = require("../lib/Employee");

// name, email, id, role validation


describe("Employee", () => {
    describe("has a name", () => {
        it("has a name", () => {
            const employee = new Employee("John Doe", "joghn@gmail.com", 3);

            expect(employee.name).toEqual("John Doe");
            expect(employee.name.length).toBeGreaterThan(2);
        });

        it("has an Email", () => {
            expect(employee.email).toEqual(expect.stringContaining('@'))
        });

        it("has a id that is a num", () => {
            expect(employee.id).toEqual(expect.any(Number))
        });

        it("has a role of employee", () => {
            expect(employee.role).toBe("employee")
        });

    });
});
