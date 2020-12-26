import React, {FC} from 'react'

interface Props{
     props?:any
}

const buttons:FC<Props>=({props})=>{

     return(
        <h1>Hello buttons!</h1>
    );
};

export default buttons;