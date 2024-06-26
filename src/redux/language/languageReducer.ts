import i18n from "i18next"
import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionTypes } from "./languageActions" 

export interface languageState{
    language: "en" | "zh";
    languageList: {name: string, code: string}[] ;
}
const defaultState: languageState={
    language:"en",
    languageList:[
        {name:"English", code:"en"},
        {name:"中文", code:"zh"}
    ],
};
export default (state = defaultState, action:LanguageActionTypes) => {
    switch(action.type){
        case CHANGE_LANGUAGE: //CHANGE_LANGUAGE是常量 最好使用常量
            i18n.changeLanguage(action.payload);//处理不标准，有副作用
            return {...state, language: action.payload}
        case ADD_LANGUAGE:
            return {...state,languageList:[...state.languageList,action.payload]}
        default:
            return state
    }
    // console.log(state,action);
    // if(action.type==="change_language"){//state是不可更改的
    //     const newState = {...state, language: action.payload};
    //     return newState;
    // }
    // if(action.type==="add_language"){
    //     const newState={...state,languageList:[...state.languageList,action.payload]};
    //     return newState;
    // }
    // return state;
};