

import React, { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
//import { fetchUsers } from "../store/action-creators/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UseActions } from "../hooks/useAction";


const TodoList: React.FC = () => {
   const { todos, error, loading, page, limit } = useTypedSelector(state => state.todo)
   const { fetchTodos, setTodoPage } = UseActions()
   const pages = [1, 2, 3, 4, 5]

   useEffect(() => {
      fetchTodos(page, limit)
   }, [page])

   if (loading) {
      return <h1>Идет загрузка</h1>
   }
   if (error) {
      return <h1>{error}</h1>
   }

   return (
      <div>
         {todos.map(todo =>
            <div key={todo.id}>{todo.id} - {todo.title}</div>
         )}
         <div style={{ display: 'flex' }}>
            {pages.map(p =>
               <div
                  onClick={() => setTodoPage(p)}
                  style={{ border: p === page ? '2px solid green' : '1px solid grey', padding: 10 }}>
                  {p}
               </div>
            )}
         </div>
      </div>
   );
};

export default TodoList;