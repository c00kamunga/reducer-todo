import React from "react";
import { initialState } from "./reducers/reducer";
import { reducer } from "./reducers/reducer";

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState();
  console.log(todos);

  return( 
  <div>
<form onSubmit={e => {
  e.preventDefault();
  dispatch({ type: "add-todo", payload: text })
  setText("");
}}>
  <input value={text} onChange={e => setText(e.target.value)}/>
</form>
  </div>
  )
}

export default App;
