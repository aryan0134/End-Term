import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

const View = ({datas,deleteData}) => {
    
    return datas.map(info=>(
        
        <tr key={info.phoneNo}>
            <td>{info.name}</td>
            <td>{info.email}</td>
            <td>{info.phoneNo}</td>
            <td>{info.message}</td>
            <td className='delete-btn' onClick={()=>deleteData(info.phoneNo)}>
                <BsFillTrashFill />
            </td>           
        </tr>            
    
))
}

export default View;