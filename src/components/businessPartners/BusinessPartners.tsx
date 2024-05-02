import React from "react";
import Style from "./BusinessPartners.module.css";
import { Divider,Typography,Row } from "antd";
import CarouselImage1 from "../../assets/images/facebook-807588_640.png";
import CarouselImage2 from "../../assets/images/follow-826033_640.png";
import CarouselImage3 from "../../assets/images/icon-720944_640.png";
import CarouselImage4 from "../../assets/images/microsoft-80658_640.png";

export const BusinessPartners:React.FC=()=>{
    return(
        <div className={Style.content}>
            <Divider orientation="left">
                <Typography.Title level={3}>BusinessPartners</Typography.Title>
            </Divider>
            <Row>
                <img src={CarouselImage1} alt="Facebook" className={Style.imageSize}/>
                <img src={CarouselImage2} alt="Ins"  className={Style.imageSize}/>
                <img src={CarouselImage3} alt="Youtube"  className={Style.imageSize}/>
                <img src={CarouselImage4} alt="Microsoft"  className={Style.imageSize}/>
            </Row>
        </div>
    );
}


