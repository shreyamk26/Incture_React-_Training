function EmployeeCard({ name, city }) {
  return (
    <div style={{ border: "1px solid blue", margin: "5px", padding: "5px" }}>
      Name: {name}, City: {city}
    </div>
  );
}

export default EmployeeCard;