
import type { Info } from './Types'
// type Infoprops={
//     user1:Info
// }
const UserInfo = ({user1}:{user1:Info}) => {

  return (
    <div>
        <ul>
            <li>
                {user1.id}
                <ul>
                    <li>{user1.name}</li>
                    <li>{user1.email}</li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default UserInfo