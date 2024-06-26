import React from "react";
import logo from '../../assets/logo.svg';
import Styles from './Header.module.css';
import {Layout, Typography,Input,Menu,Button,Dropdown} from 'antd';
import {GlobalOutlined} from "@ant-design/icons";
import { withRouter,RouteComponentProps } from "../../helpers/withRouter";
import store from "../../redux/store";
import { languageState } from "../../redux/language/languageReducer";
import { withTranslation,WithTranslation} from "react-i18next";
import { addLanguageActionCreator, changeLanguageActionCreator } from "../../redux/language/languageActions"

interface State extends languageState{}//组件继承

class HeaderComponnent extends React.Component<RouteComponentProps & WithTranslation, State>{
  constructor(props){//constructor(props){
    super(props);
    const storeState=store.getState();
    this.state={
      language: storeState.language,
      languageList: storeState.languageList,
    };
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange=()=>{
      const storeState= store.getState();
      this.setState({
        language:storeState.language,
        languageList:storeState.languageList,
      });
    }

  menuClickHandler=(e)=>{
    if(e.key==="new"){
      //处理新语言添加action
      const action= addLanguageActionCreator("new language","new_language");
      store.dispatch(action);
    }else{
        const action= changeLanguageActionCreator(e.key);
      store.dispatch(action);
    }
    console.log(e);
  };

  render():React.ReactNode{
      const {navigate, t}=this.props;
      return (
        <div className={Styles.App}>
          <div className={Styles['app-header']}>
            {/* top-header */}
            <div className={Styles['top-header']}>
              <div className={Styles.inner}>
                <Typography.Text>{t("header.slogan")}</Typography.Text>
                <Dropdown.Button
                  style={{marginLeft:15}}
                  overlay={
                  <Menu onClick={this.menuClickHandler}
                    items={[...this.state.languageList.map((l)=>{
                      return {key:l.code, label:l.name};
                    }),{key:"new",label:t("header.add_new_language")}]}
                  />
                }
                icon={<GlobalOutlined/>}
                >
                {this.state.language === "zh"?"中文":"English"}
                </Dropdown.Button>
                <Button.Group className={Styles['button-group']}>
                  <Button onClick={()=>navigate("/register")}>{t("header.register")}</Button>
                  <Button onClick={()=>navigate("/signin")}>{t("header.signin")}</Button>
                </Button.Group>
              </div>
            </div>
            <Layout.Header className={Styles['main-header']}>
              <span onClick={()=>navigate("/")}>
                <img src={logo} alt="logo" className={Styles['App-logo']}/>
                <Typography.Title level={3} className={Styles.title}>{t("header.title")}</Typography.Title>
              </span>
              <Input.Search
                placeholder={'Please enter your travel destination'}
                className={Styles["search-input"]}
                />
            </Layout.Header>
            <Menu mode={"horizontal"} className={Styles["main-menu"]}
            items={[
              { key: "1", label: t("header.home_page") },
              { key: "2", label: t("header.weekend") },
              { key: "3", label: t("header.group") },
              { key: "4", label: t("header.backpack") },
              { key: "5", label: t("header.private") },
              { key: "6", label: t("header.cruise") },
              { key: "7", label: t("header.hotel") },
              { key: "8", label: t("header.local") },
              { key: "9", label: t("header.theme") },
              { key: "10", label: t("header.custom") },
              { key: "11", label: t("header.study") },
              { key: "12", label: t("header.visa") },
              { key: "13", label: t("header.enterprise") },
              { key: "14", label: t("header.high_end") },
              { key: "15", label: t("header.outdoor") },
              { key: "16", label: t("header.insurance") },
            ]}> 
            </Menu>
          </div>
        </div>
      );
    }
  }

export const Header =withTranslation()(withRouter(HeaderComponnent))