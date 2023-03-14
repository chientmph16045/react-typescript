import React from "react";
import Add from "../../compenents/add";
import List from "../../compenents/list";
import "./admin.css"

type Props={
}

const Admin=(props:Props)=>{
    return(
        <div className="admin">
            <a href="/admin/add" className="add-new">Add new</a>
            <table>
                <thead>
                    <tr>
                        <td className="w-[10%]">STT</td>
                        <td className="w-[30%]">Name</td>
                        <td className="w-[10%]">Price</td>
                        <td className="w-[10%]">Ảnh</td>
                        <td className="w-[20%]">Description</td>
                        <td className="w-[10%]">Update</td>
                        <td className="w-[10%]">Delete</td>
                    </tr>
                </thead>
                <tbody>
                   <List/> 
                </tbody>
            </table>
        </div>
    )
}

export default Admin