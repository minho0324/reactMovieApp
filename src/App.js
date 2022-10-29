import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  useEffect(() => {               //useEffect()는 한번만 실행하고 싶은 함수를 실행한다.
    console.log('I run only once');
  }, []);
  
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);                  //value값인 keyword가 변화할때마다 작동한다.


  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);      
  
  
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);         //keyword, counter 두가지 모두 변화가 있을때마다 작동한다.
  

  return (
    <div>
      <input value={keyword} type="text" placeholder="Search here..." onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
