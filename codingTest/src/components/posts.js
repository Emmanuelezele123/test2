import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: [ {id:1,name:'John Doe',grade:1,school:'React Redux School'},
    {id:2,name:'Jane Doe',grade:2,school:'React Redux School'},  
    {id:3,name:'Terry Adams',grade:3,school:'React Redux School'},
    {id:4,name:'Jenny Smith',grade:4,school:'React Redux School'}]};


  }


   render() {
    return (
     <div class="container">
       <div class="post-header">Mealimeter Posts</div>
      {
    this.state.value.map(product => (
      <div class="item-container" >
     <div key={product.id} class="item">{product.name}</div>
     <div key={product.id} class="item">{product.grade}</div>
     <div key={product.id} class="item">{product.id}</div>
     <div key={product.id} class="item">{product.age}</div>
     </div>
    ))
      }
     </div>
    );
  }
}

