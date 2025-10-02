
import UserInfo from './UserInfo'
import AdminInfo from './AdminInfo'
import type { Info , AdminInfoList } from './Types'
const App = () => {
      const user1:Info={
            id:1,
            name:"abc",
            email:"abc@email.com"
    }
      const user2:AdminInfoList={
        id:2,
        name:"xyz",
        email:"xyz@ElementInternals.com",
        isAdmin:true
    }

  return (
    <div>
      <UserInfo user1={user1}/>
      <hr />
      <AdminInfo user2={user2}/>
    </div>
  )
}

export default App