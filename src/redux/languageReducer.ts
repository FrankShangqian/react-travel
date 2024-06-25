import i18n from "i18next"

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
export default (state = defaultState, action) => {
    switch(action.type){
        case "change_language":
            i18n.changeLanguage(action.payload);//处理不标准，有副作用
            return {...state, language: action.payload}
        case "add_language":
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