import React from "react";
import Styles from './HomePage.module.css';
import {Header,Footer,Carousel,SideMenu,ProductCollection, BusinessPartners} from "../../components";
import {Row,Col, Typography} from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";


export class HomePage extends React.Component{
    render(): React.ReactNode {
        return<>
            <Header/>
            {/* content */}
            <div className={Styles['page-content']}>
                <Row style={{marginTop: 20}}>
                <Col span={6}>
                    <SideMenu />
                </Col>
                <Col span={18}>
                    <Carousel />
                </Col>
                </Row>
                <ProductCollection
                title={<Typography.Title level={3} type="warning">Recommend</Typography.Title>}
                sideImage={sideImage}
                products={productList1}
                />
                <ProductCollection
                title={<Typography.Title level={3} type="danger">New</Typography.Title>}
                sideImage={sideImage2}
                products={productList2}
                />
                <ProductCollection
                title={<Typography.Title level={3} type="success">Domestic travel recommendation</Typography.Title>}
                sideImage={sideImage3}
                products={productList3}
                />
            </div>
            <BusinessPartners/>
            <Footer/>
        </>
    }
}
