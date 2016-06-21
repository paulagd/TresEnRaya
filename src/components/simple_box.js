import React from 'react';

const SimpleBox = ({compId, clikFather, classBox, avaliable}) => {
    const changeClass = ()=>{
        clikFather(compId);
        console.log("onclick!");
    };
    //console.log(compId);
    if(avaliable){

      return ( <div id={compId} className={`box ${classBox||''}`} onClick={changeClass} ></div>);

    }

      return ( <div id={compId} className={`box ${classBox||''}`} ></div>);

};

export default SimpleBox;
