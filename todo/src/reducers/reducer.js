export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
  todoCount: 1,
};

export const reducer = (state, action) => {
  switch(action.type){
    case "add-todo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action. payload, complete: false, id: Date.now()},
        ],
        todoCount: state.todoCount + 1,
      };
      case "toggle-todo":
        return {
          ...state,
          todos: state.todos.map((t, idx) => 
          idx === action.payload ? { ...t, completed: !t.completed} : t
          ),
        };

        
  }
}