async function getEmployees() {
    var employees;
    fetch('employees.json')
      .then(response => response.json())
      .then(data => {
        //const employee = data.employees.foreach(item => item.name.toLowerCase() === input);
        employees = data.employees.map(emp => {return {
            id: emp.id,
            name: emp.name,
            title: emp.title
            };
        })
      /*.catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });*/
    
      console.log("we have " + employees.length + " employees");
      const employeeListDiv = document.getElementById('employeeList');
      employeeListDiv.innerHTML='';
  
      for (const employee of employees) {
          employeeListDiv.innerHTML += `Name: ${employee.name}<br>`;
          employeeListDiv.innerHTML += `Title: ${employee.title}<br><br>`;
        }
    });
    //console.log("we still have " + employees.length + " employees");
    return employees;
    //listEmployees(employees);
    /*    if (employees) {
          console.log("we have employees to list");
        } else {
          resultDiv.innerHTML = 'No employees found.';
          console.log("we have NO employees to list");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching employee data.';
      });*/
  }

function listEmployees(employees) {
      const employeeList = employees;
      const numEmployees = employeeList.length;
      console.log("made it to listEmployees and have " + numEmployees + " employees");
      employeeList.innerHTML='';
  
      for (const employee of employees) {
  
          employeeList.innerHTML = `Name: ${employee.name}<br>`;
          employeeList.innerHTML += `Title: ${employee.role}<br><br>`;
  
    }
  }

const emps = getEmployees();
