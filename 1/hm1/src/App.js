import { useState } from "react";


function App() {
 const [num, setNum] = useState(0);


 

  
  const numChange = ()=>{
    if(num >= 20){
      setNum(20)
    }else{
      setNum(num + 5)
    }
  }
  const num1Change = ()=>{
    if(num <= 0){
      setNum(0)
    }else{
      setNum(num - 1)
    }
  }
  const num2Change = ()=>{
    if(num <= 0){
      setNum(0)
    }else{
      setNum(num - 5)
    }
  }
  const num3Change = ()=>{
    if(num >= 20){
      setNum(20)
    }else{
      setNum(num + 1)
    }
  }



  return (
    <div>


      
      <p>{num}</p>

      <button onClick = {numChange}>+5</button>
      <button onClick = {num1Change}>-1</button>
      <button onClick = {num2Change}>- 5</button>
      <button onClick = {num3Change}>+1</button>
    </div>
  );

}
export default App;


