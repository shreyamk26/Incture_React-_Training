// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// import {render,screen} from  '@testing-library/react';
// import App from './App';

// test('render App Component ',()=>{
//   render(<App/>);
//   //to check element string or not (that text is availabe on screen or not)
//   const headingElement = screen.getByText(/React Test App : /i);
//   expect(headingElement).toBeInTheDocument(); //elemeent inside the document or not

// })

import { render, screen } from '@testing-library/react';
import App from './App';

test('render App Component', () => {
  render(<App />);
  const headingElement = screen.getByText(/React Test App/i);
  expect(headingElement).toBeInTheDocument();
});


