
import React, { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
//import { fetchUsers } from "../store/action-creators/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UseActions } from "../hooks/useAction";


const UserList: React.FC = () => {
   const { users, error, loading } = useTypedSelector(state => state.user)
   const { fetchUsers } = UseActions()

   useEffect(() => {
      fetchUsers()
   }, [])

   if (loading) {
      return <h1>Идет загрузка</h1>
   }
   if (error) {
      return <h1>{error}</h1>
   }

   return (
      <div>
         {users.map(user =>
            <div key={user.id}>{user.name}</div>
         )}
      </div>
   );
};

export default UserList;