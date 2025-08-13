function getEmployees() {

    fetch('employees.json')
      .then(response => response.json())
      .then(data => {
        //const employee = data.employees.foreach(item => item.name.toLowerCase() === input);
        const employees = data.employees.map(emp => {return {
            id: emp.id,
            name: emp.name,
            role: emp.role
        }
    });
    
    listEmployees(employees);
        if (employees) {
          console.log("we have employees to list");
        } else {
          resultDiv.innerHTML = 'No employees found.';
          console.log("we have NO employees to list");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching employee data.';
      });
  }

var emps = getEmployees();
listEmployees(emps);

function listEmployees(employees) {
    var employeeList = employees;
    const numEmployees = employeeList.length;
    employeeList.innerHTML='';

    for (const employee of employees) {

        employeeList.innerHTML = `Name: ${employee.name}<br>`;
        employeeList.innerHTML += `Title: ${employee.role}<br><br>`;

  }
}