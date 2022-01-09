import classes from './Input.module.css'
import React from 'react'
const Input =React.forwardRef( (props , ref)=>{
    // console.log("props",props)
    return(
        <div className={classes.input}>
            {props &&(<>
            <label htmlFor={props.input.id}> {props.label}</label>
            <input ref={ref} {...props.input} />
            {/* <input id={props.input.id} /> */}
            </>)}
        </div>
    );
});
export default Input;