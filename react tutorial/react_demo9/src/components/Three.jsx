// import { data1,data2 } from "../App"
// const Three = () => {
//     return (
//         <data2.Consumer>
//             {(x) => {
//                 return (
//                     <data1.Consumer>
//                         {(y) => {
//                             return (
//                         <div>
//                             <h1>{x}</h1>
//                             <h1>{y}</h1>
//                         </div>
//                             )
//                         }}
//                     </data1.Consumer>
//                 )
//             }}
//         </data2.Consumer>
//     )
// }

// export default Three

import React from 'react'
import {data1 ,data2} from "../App"
import { useContext } from 'react'
const Three = () => {
    const X=useContext(data1)
    const Y=useContext(data2)
  return (
    <div>
        <h1>{X}</h1>
        <h1>{Y}</h1>
    </div>
  )
}

export default Three