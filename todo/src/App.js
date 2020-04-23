import React, {useState, useReducer} from "react";
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
{todos.map((t, idx) => (
  <div
  key={t.text}
  onClick={() => dispatch({ type: "toggle-todo", payload: idx})}
  style={{
    textDecoration: t.completed ? "line-through" : ""
  }}
  >
    {t.item}
    </div>
))}
<button onClick={() => dispatch ({ type: "delete-todo" })}>
  Delete All
</button>
<button onClick = {() => dispatch({ type: "delete-strikes" })}>
  Delete Striked todos
</button>
  </div>
  )
}

export default App;
