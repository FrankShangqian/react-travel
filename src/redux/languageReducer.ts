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
    
    return state;
}