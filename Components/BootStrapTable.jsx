import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function BootStrapTable(){
    const students = [
    { id: 111, name: "Shreya", city: "Kundapura" },
    { id: 222, name: "Mike", city: "Adyar" },
    { id: 333, name: "Alice", city: "Mysore" },
    { id: 444, name: "Will", city: "Mangaluru" },
  ];
  const handleDeleteButton=(id)=>
  {
alert(`Delete student with id ${id}`)
  }
   const handleSuccessButton=(id)=>
  {
alert(`successfully added student with id ${name}`)
  }
  return(
    <div className='container mt-4'>
    <h2 className='head3'>Student Table: </h2>
 <Table striped bordered hover responsive>
  {/* <Table striped bordered hover variant="dark"> */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th> 
            <th>City</th> 
             <th>Delete</th> 
               <th>Success</th> 
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.city}</td>
              <td><Button variant="danger" size="em"  onClick={()=>handleDeleteButton(s.id)}>Delete</Button></td>
              <td><Button variant="success" size="em"  onClick={()=>handleSuccessButton(s.name)}>Success</Button>
        

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
  );
}
export default BootStrapTable;