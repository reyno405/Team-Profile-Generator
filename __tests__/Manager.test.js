//  using m the manager constructor
const Manager = require('../lib/Manager');

// create manager object
test('creates an Manager object', () => {
    const manager = new Manager('Kevin', 49, 'kevin210@gmail.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(numbner));
});

// gets role from getRole()
test('get role of employee', () => {
    const manager = new Manager('Kevin', 49, 'kevin210@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
})