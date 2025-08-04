import EmployeeCard from "./EmployeeCard"
function EmployeeList(){
    const employees=[
        {id:111, name:"Shreya", city:"Kundapura"},
        {id:222, name:"Mike", city:"Adyar"},
        {id:333, name:"Alice", city:"Mysore"},
        {id:444, name:"Will", city:"Mangaluru"},
    ];

    return(
        <div>
            <h2>Employee List:</h2>
            {
                employees.map((employee) => (
                    <EmployeeCard
                        key={employee.id}
                        name={employee.name}
                        city={employee.city}
                    />
                ))
            }
        </div>
    );
}
export default EmployeeList;
