const Employee = require("../lib/Employee");

test("Return user inputs", () => {
    let testEmployee = new Employee("Lyman", "001", "eckzly@gmail.com");
    let str = `${testEmployee.getName}, ${testEmployee.getId}, ${testEmployee.getEmail}, ${testEmployee.getRole}`;
    expect(str).toBe("Lyman, 001, eckzly@gmail.com, Employee");
});
