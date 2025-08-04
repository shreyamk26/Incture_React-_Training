function FirstList() {
  const city = ["Adyar", "Kundapura", "New York", "Chennai", "Delhi"];

  return (
    <div>
      <h2>City List :</h2>
      {
        city.map((c_name, index) =>
          <p key={index}>{c_name}</p>
        )
      }
    </div>
  );
}

export default FirstList;
