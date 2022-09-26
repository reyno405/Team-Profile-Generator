const Engineer = require('../lib/Engineer');

// name, email, id, role and github user name validation for engineer

describe("Engineer", () => {
    describe("has a name", () => {
        it("has a name", () => {
            
            const engineerTest = new Engineer("John Doe", "joghn@gmail.com", 2, "Engineer");

            expect(engineerTest.name).toEqual("John Doe");
            expect(engineerTest.name.length).toBeGreaterThan(2);
        });

        it("has an Email", () => {
            expect(engineerTest.email).toEqual(expect.stringContaining('@'))
        });

        it("has a id that is a num", () => {
            expect(engineerTest.id).toEqual(expect.any(Number))
        });

        it("has a role of engineer", () => {
            expect(engineerTest.role).toBe("engineerTest")
        });


        

    });
});
