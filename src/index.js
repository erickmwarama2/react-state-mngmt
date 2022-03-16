import React, { Fragment } from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';
import MyButton from './Props';
import MyList from './MyList';
import { default as MyButton1 } from './func_component1';
import MyContainer from './MyContainer';
import { PermissionProvider } from './PermissionContext';

// const myComponent = render(
//   <Fragment>
//     <MyComponent/>
//     <hr/>
//     <MyList items={['First','Second','Third','Fourth','Fifth','Sixth']}/>
//     <hr/>
//     <MyButton text={'This is the text'} disabled={true}/>
//     <hr/>
//     <MyButton1 text={'This is the function component'}/>
//   </Fragment>
//   ,
//   document.getElementById('root')
// );

const myComponent = render(<Fragment>
  <PermissionProvider>
  {/* <MyContainer/> */}
  <App />
  </PermissionProvider>
</Fragment>,
document.getElementById('root'));

setTimeout(() => {
  myComponent.setState(state => ({
    fourth: state.doneMessage
  }));
}, 5500);

// setTimeout(() => {
//   myComponent.setState({first:'the first message'});
// }, 2500);

// setTimeout(() => {
//   myComponent.setState({second:'the second message'});
// }, 3500);

setTimeout(() => {
  myComponent.setState({
    heading: 'React is Awesome',
    content: 'Done!!!'
  });
}, 6000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
