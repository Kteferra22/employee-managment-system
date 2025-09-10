// Array of employee objects
const employees = [
    { id :1, name: "Alice Johnson", age: 30, department: "HR", salary: 60000 },
    { id :2, name: "Bob Smith", age: 28, department: "Engineering", salary: 80000},
    { id :3, name: "Charlie Brown", age: 35, department: "HR", salary: 65000},
    { id :4, name: "Diana Prince", age: 42, department: "Marketing", salary: 70000}
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map(employee =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

// Calcuate total Salaries 
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// display HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department == 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index ) => `<p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
    
}

// find Employee By ID
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeeDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID';
       }
   }