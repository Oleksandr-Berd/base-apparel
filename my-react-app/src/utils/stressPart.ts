type IsMatchFunction = (sample: string, arr: string[] | string) => {leftArr: string | undefined};

export const stressPart:IsMatchFunction = (sample = "", arr= []) => {
    let leftArr: string | undefined
    
if (typeof arr === "string") {
const greetArr = arr.split(" ") 

leftArr = [...greetArr].filter(el => el !== sample).join(" ")
    }

    if (typeof arr === "object"){
        leftArr = [...arr].filter(el => el !== sample).join(" ")
    }
  
    return {leftArr}
};

