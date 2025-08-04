function TableList() {
  const students = [
    { id: 111, name: "Shreya", city: "Kundapura" },
    { id: 222, name: "Mike", city: "Adyar" },
    { id: 333, name: "Alice", city: "Mysore" },
    { id: 444, name: "Will", city: "Mangaluru" },
  ];

  return (
    <div>
      <h2>Table List:</h2>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th> 
            <th>City</th> 
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
