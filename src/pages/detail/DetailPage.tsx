import React from "react"
import { useParams } from 'react-router-dom'

export const Detail:React.FC=()=>{
    var params = useParams<"touristRouteId">();
    return <h1>旅游路线详情页,路线ID:{params.touristRouteId}</h1>;
};


