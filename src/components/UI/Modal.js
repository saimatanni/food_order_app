import classes from './Modal.module.css';
import React,{Fragment} from 'react';
import { ReactDOM } from 'react-dom';

const Backdrop =props =>{
    return(
        <div className={classes.Backdrop}> </div>
    )
}
const ModalOverlay =props =>{
    return(
        <>
        <div className={classes.modal}> 
           <div className={classes.content}>{props.children} </div>
        
        </div>
        
        </>
    );
};

const portalElement = document.getElementById('overlays')

const Modal =(props)=>{
    return(
        <Fragment >
             <Backdrop></Backdrop>
             <ModalOverlay>{props.children}</ModalOverlay> 

             {/* What to portal and where to portal */}

              {/* {ReactDOM.createPortal(<Backdrop/>, portalElement)}
             {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, 
             portalElement
             )} */}
        </Fragment>
        
           
        
    );
};
export default Modal;