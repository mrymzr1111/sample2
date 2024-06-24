

import { useState } from 'react';
import Question from './question';
import questions from './data';


function App() {
const[question,setQuestion]=useState(questions);

  return (
    <div className='container1' >
    <h3 > do you have any question ?</h3>
    <div className="scroll-container">
  
{
 question.map((question ,index)=>{
  return <Question {...question} key={index}   />
 }
 )
}

 
    </div>
    </div>
   
  );
}

export default App;
