<<<<<<< HEAD
import { useContext } from "react";
import { FormProvider, FormContext } from "./context/FormContext";
import PersonalDetails from "./steps/PersonalDetails";
import JobDetails from "./steps/JobDetails";
import BankDetails from "./steps/BankDetails";
import Emergency from "./steps/Emergency";
import Documents from "./steps/Documents";
import Review from "./steps/Review";
import "./App.css";

function AppContent() {
  const { step } = useContext(FormContext);

  return (
    <div className="container">
      <h2>Enterprise Employee Onboarding</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / 6) * 100}%` }}></div>
      </div>

      {step === 1 && <PersonalDetails />}
      {step === 2 && <JobDetails />}
      {step === 3 && <BankDetails />}
      {step === 4 && <Emergency />}
      {step === 5 && <Documents />}
      {step === 6 && <Review />}
=======
import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import First from "./First"
// import Second from "./second"
// import Third from "./Third"
// import Fourth from "./Fourth"
// import Card from "./Card"
// import Store from "./Store"
// import Counter from "./Counter"
// import NewComp from "./NewComp"
// import FirstComp from "./FirstComp"
// import SecondComp from "./SecondComp"

// import FirstComp from "./FirstComp";
// import SecondComp from "./SecondComp";
// import New from "./New";
import FirstEvent from "./FirstEvent";



 
// function App() {
//   // const [count, setCount] = useState(0)

//   // return (
//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>

//     // <div>
//     //   <h1>React App with Vite Tool:</h1>
//     //   {/* <First/>
//     //   <Second/>
//     //   <Third/>
//     //   <Fourth/> */}
//     //   <Card name="Shreya" city="Adyar"/>
//     //   <Card name="Tanjiro" city="mysore"/>
//     //    <Card name="nezuko" city="bangloor"/>
//     //    <Card name="Steev" city="New york"/>

//     //   {/* //3 times printed */}
//     // </div>
//   // )

//   // function handleClick(){
//   //   alert("Function from parent component: ")

//   // }
// //   return(
// //     <div>
// //     <h1>Rect App with Vite Tool:</h1>
// //     <Card label="Click Me" onClick={handleClick}/>
// //     </div>
// //   )
// // } to pass props as function




//   // const [isFirstVisible, setIsFirstVisible] = useState(true); 

//   // return (
//   //   <div>
//   //     {isFirstVisible ? (
//   //       <FirstComponent onSwitch={() => setIsFirstVisible(false)} />
//   //     ) : (
//   //       <SecondComponent onSwitch={() => setIsFirstVisible(true)} />
//   //     )}
//   //   </div>
//   // );
//  return (
//     <div>
//       <h1>Simple Counter App</h1>
//       <Counter initialValue={0} />
//     </div>
//   );
// }


// function App() {
//   const [showFirst, setShowFirst] = useState(true);

//   const handleToggle = () => {
//     setShowFirst(!showFirst);
//   };

//   return (
//     <div>
//       <button onClick={handleToggle}>
//         {showFirst ? "Show Second Component" : "Show First Component"}
//       </button>

//       {showFirst ? <FirstComp /> : <SecondComp />}
//     </div>
//   );
// }

// export default App;




// function App() {
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <New/>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <h1>React Event</h1>
      <FirstEvent/>
>>>>>>> 8f9605c9b6df1518781a1c878cb9dcf61d2970b2
    </div>
  );
}

<<<<<<< HEAD
function App() {
  return (
    <FormProvider>
      <AppContent />
    </FormProvider>
  );
}

=======
>>>>>>> 8f9605c9b6df1518781a1c878cb9dcf61d2970b2
export default App;
