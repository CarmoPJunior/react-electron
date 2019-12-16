import {useState} from 'react';


export const useData = () => {

    const [isShowModal, setIsShowModal] = useState(false); 
    const [originalData, setOriginalData] = useState('');
    // const [transformedData, setTransformedData] = useState('');
    const [transFormType, setTransFormType] = useState('upper');
    
    return {isShowModal, setIsShowModal, originalData, setOriginalData, transFormType, setTransFormType}
}


export const transformText = (text, type) =>{

    if(type === "upper"){
        return text.toUpperCase();
    }else if(type === "lower"){
        return text.toUpperCase();
    }else if(type === "firstLetterUpper"){

        return text.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');
    }

    
}

export const transformText2 = (text) =>{

 text = "foo bar loo zoo moo";
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text;
}