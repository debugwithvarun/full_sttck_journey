import type { AdminInfoList } from "./Types"
// type AdminInfoprops={
//     user2:AdminInfoList
// }
const AdminInfo = ({user2}:{user2:AdminInfoList}) => {

  return (
    <div>
        
        <ul>
            <li>{user2.id}
                <ul>
                    <li>{user2.email}</li>
                    <li>{user2.name}</li>
                    <li>{user2.isAdmin.toString()}</li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default AdminInfo