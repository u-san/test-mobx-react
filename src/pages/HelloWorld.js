import React from 'react'
// import { observer, inject } from 'mobx-react'

// @inject('store')
// @observer
// class Todo extends React.Component {
//   render() {
//     const { store, item } = this.props

//     return (
//       <li className="todo">
//         <div className="view">
//           <label>{111}</label>
//           <button className="destroy" onClick={(e) => store.todos.remove(item)}/>
//         </div>
//       </li>
//     )
//   }
// }

// export default Todo

import { observer } from "mobx-react";
import { observable } from "mobx";

var timerData = observable({
    secondsPassed: 0
});

setInterval(() => {
    timerData.secondsPassed++;
}, 1000);

@observer class Timer extends React.Component {
    render() {
        return (<span>Seconds passed: { this.props.timerData.secondsPassed } </span> )
    }
};

export default () => <Timer timerData={timerData} />
