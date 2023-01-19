function addemployee() {
    //acces value of employee form inputs
    empname = ename.value
    empid = eid.value
    empdesi = edesi.value
    empsal = esal.value
    empexp = eexp.value
    empno = eno.value

    if (empid in localStorage) {
        alert("employee aleready exist")
    } else {

        employee = { "employee_name": empname, "emp_id": empid, "desig": empdesi, "salary": empsal, "experienc": empexp, "Ph_no": empno }

        //store data in local storage
        //convert the js object into json

        localStorage.setItem(empid, JSON.stringify(employee))

        alert('employee added success')

        window.location = "homepg.html"
    }
}


function displaydata() {
    emid = fetchid.value
    if (emid in localStorage) {
        empl = JSON.parse(localStorage.getItem(emid))

        // console.log(empl);

        eresult.innerHTML = `<p>
      Name: <strong> ${empl.employee_name}</strong>
      <br>
      Id: <strong> ${empl.emp_id}</strong>
      <br>
      Designation: <strong> ${empl.desig}</strong>
      <br>
      Salary: <strong> ${empl.salary}</strong>
      <br>
      Experience: <strong> ${empl.experienc}</strong>
      <br>
      Ph no: <strong> ${empl.Ph_no}</strong>
      <br>
     
      </p>`


    } else {
        alert('employee not found in database')
        eresult.innerHTML = ``
    }

}


//bank signup

//acno
//username
//psw

//login

//acno
//psw

//home page