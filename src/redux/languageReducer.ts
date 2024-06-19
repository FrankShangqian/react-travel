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
    console.log(state,action);
    if(action.type==="change_language"){//state是不可更改的
        const newState = {...state, language: action.payload};
        return newState;
    }
    return state;
}