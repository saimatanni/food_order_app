import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/2.jpg';
import classes from './Header.module.css';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Sayma's Meals</h1>
        <HeaderCartButton onClickButton={props.onShowCart}/>
        
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;