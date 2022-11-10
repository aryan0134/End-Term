import React, { useEffect, useState } from "react";

const getDatafromLS = () => {
    const data = localStorage.getItem('datas');
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  }

function Queries() {
    const [datas, setdatas] = useState(getDatafromLS());
    useEffect(() => {
        setdatas(JSON.parse(localStorage.getItem("queries")));
        console.log(JSON.parse(localStorage.getItem("queries")));
    }, []);
    useEffect(() => {
        console.log(datas);
    }, [datas]);
    return (
        <div>
            {datas &&
                datas.map((item) => (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                        <span>{item.phoneNo}</span>
                        <span>{item.message}</span>
                    </div>
                ))}
        </div>
    );
}
export default Queries;