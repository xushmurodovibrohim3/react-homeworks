import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// class A{
//    b() {
//       console.log(this);
//    }
//    c() {
//       this.b()
//    }
// }

// let a = new A()

// a.c()