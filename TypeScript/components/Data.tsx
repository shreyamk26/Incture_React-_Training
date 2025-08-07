function Data() {
  let userName: string = "Shreya";
  // userName = 123; // Error
  let age: number = 20;
  let isActive: boolean = true;
  // isActive = "Hello";
  // This is main use of TS

  // Create an array
  const course: string[] = ["React", "Java", "JS", "TS"];

  //Creating Object:
// Decalre object structure or type of Object
type Employee={
    id: number;
    name: string;
city : string;
}

  const emp1 : Employee={
    id : 111,
    name :"Shreya",
    city: "Udupi"
  }

  return (
    <div>
      <h1>Data Componnet :</h1>
      <h2>User Profile : </h2>
      <p>Name: {userName}</p>
      <p>Age : {age} </p>
      <p>IS active : {isActive === true ? "YES" : "NO"}</p>
      {/* <ul>
        {course.map((c, index) => {
          return <li key={index}>{c}</li>;
        })}
      </ul> */}

    <p>Employee ID : {emp1.id}</p>
    <p>Employee Name : {emp1.name}</p>
    <p>Employee City : {emp1.city}</p>

    </div>
  );
}

export default Data;
