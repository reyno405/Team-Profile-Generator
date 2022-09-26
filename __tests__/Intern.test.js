// using Intern consructor
const Intern = require('../lib/Intern');

// create Intern object
test('creates a Intern object', () => {
    const intern = new Intern('Kevin', 49, 'kevin210@gmail.com', 'MSU');

    expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('get role of employee', () => {
    const intern = new Intern('Kevin', 49, 'kevin210@gmail.com', 'MSU');

    expect(intern.getRole()).toEqual("Intern");
})