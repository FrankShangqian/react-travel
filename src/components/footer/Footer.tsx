import React from "react";
import {Layout, Typography,Input,Menu,Button,Dropdown} from 'antd';

export const Footer: React.FC=()=>{
    return(<Layout.Footer>
        <Typography.Title level={3} style={{textAlign:"center"}}>
          The copyright of this website belongs to the travel network
        </Typography.Title>
      </Layout.Footer>)
}