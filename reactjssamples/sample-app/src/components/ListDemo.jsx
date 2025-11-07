import React from "react";

function ListDemo({ items}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
// function Userlist(){

//     return(
//         <ul>
//             {users.map((user)=>(
//                 <li
//             ))
//         </ul>
//     )
// }
export default ListDemo;
