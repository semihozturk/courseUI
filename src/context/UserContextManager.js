import React, { createContext, useState } from 'react';
import HorizontalCircles from "../components/HorizontalDiscussion";

export const UserContext = createContext();

function UserContextManager(props) {
  // if i write const {users, setUsers} then i should UserContext.Provider value={{users,setUsers}}
  const [users, setUsers] = useState([
    <HorizontalCircles
      skeleton={true}
      key={0}
      colorFirst={'rgb(' + 100 + ',' + 100 + ',' + 100 + ')'}
      colorSecond={'rgb(' + 100 + ',' + 100 + ',' + 100 + ')'}
    />,
    <HorizontalCircles
      skeleton={true}
      key={1}
      colorFirst={'rgb(' + 100 + ',' + 100 + ',' + 100 + ')'}
      colorSecond={'rgb(' + 100 + ',' + 100 + ',' + 100 + ')'}
    />,
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextManager;