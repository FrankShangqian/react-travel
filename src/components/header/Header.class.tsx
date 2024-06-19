import React from "react";
import logo from '../../assets/logo.svg';
import Styles from './Header.module.css';
import {Layout, Typography,Input,Menu,Button,Dropdown} from 'antd';
import {GlobalOutlined} from "@ant-design/icons";
import { withRouter,RouteComponentProps } from "../../helpers/withRouter";
import store from "../../redux/store";
import { languageState } from "../../redux/languageReducer";

interface State extends languageState{}//组件继承

class HeaderComponnent extends React.Component<RouteComponentProps,State>{
  constructor(props:RouteComponentProps){//constructor(props){
    super(props);
    const storeState=store.getState();
    this.state={
      language: storeState.language,
      languageList: storeState.languageList,
    }
  }

  menuClickHandler=(e)=>{
    const action={
      type:"change_language",
      payload: e.key,
    };
    store.dispatch(action);
    //console.log(e);
  };

  render():React.ReactNode{
      const {navigate}=this.props;
      return (
        <div className={Styles.App}>
          <div className={Styles['app-header']}>
            {/* top-header */}
            <div className={Styles['top-header']}>
              <div className={Styles.inner}>
                <Typography.Text>have a nice travelling</Typography.Text>
                <Dropdown.Button
                  style={{marginLeft:15}}
                  overlay={
                  <Menu onClick={this.menuClickHandler}
                    items={this.state.languageList.map((l)=>{
                      return {key:l.code, label:l.name};
                    })}
                  />
                }
                icon={<GlobalOutlined/>}
                >
                {this.state.language === "zh"?"中文":"English"}
                </Dropdown.Button>
                <Button.Group className={Styles['button-group']}>
                  <Button onClick={()=>navigate("/register")}>signup</Button>
                  <Button onClick={()=>navigate("/signin")}>login</Button>
                </Button.Group>
              </div>
            </div>
            <Layout.Header className={Styles['main-header']}>
              <span onClick={()=>navigate("/")}>
                <img src={logo} alt="logo" className={Styles['App-logo']}/>
                <Typography.Title level={3} className={Styles.title}>tourism website</Typography.Title>
              </span>
              <Input.Search
                placeholder={'Please enter your travel destination'}
                className={Styles["search-input"]}
                />
            </Layout.Header>
            <Menu mode={"horizontal"} className={Styles["main-menu"]}
            items={[
              { key: "1", label: "Travel home" },
              { key: "2", label: "Weekend tour" },
              { key: "3", label: "Package tour" },
              { key: "4", label: "independent travel" },
              { key: "5", label: "Private travel agency" },
              { key: "6", label: "cruise" },
              { key: "7", label: "Hotel + Attractions" },
              { key: "8", label: "Local fun" },
              { key: "9", label: "Theme tour" },
              { key: "10", label: "tailored travel" },
              { key: "11", label: "study tour" },
              { key: "12", label: "visa" },
              { key: "13", label: "Corporate tourism" },
              { key: "14", label: "High-level tourism" },
              { key: "15", label: "travelling outdoors" },
              { key: "16", label: "insurance" },
            ]}> 
            </Menu>
          </div>
        </div>
      );
    }
  }

export const Header =withRouter(HeaderComponnent)