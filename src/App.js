import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [time, setTime] = useState(null);
  const [msg, setMsg] = useState(null);

  const inputTimeRef = useRef(null);
  const inputMsgRef = useRef(null);

  const handleOnchnage = (e) => {
    setTime(e.target.value);
  };
  const handleMsgOnchnage = (e) => {
    setMsg(e.target.value);
  };
  const addTodo = (e) => {
    inputTimeRef.current.value = '';
    inputMsgRef.current.value = '';
    setTodoArr([...todoArr, { time: time, msg: msg }]);
  };
  return (
    <>
      <div className="todo-wrapper">
        <input type="time" onChange={handleOnchnage} ref={inputTimeRef} />
        <input type="text" onChange={handleMsgOnchnage} ref={inputMsgRef} />
        <button onClick={(e) => addTodo(e)}>Add</button>
      </div>
      <table className="table-heading">
        <tr>
          <th>time</th>
          <th>todo</th>
        </tr>
        {todoArr.length
          ? todoArr.map((item, index) => {
              return (
                <>
                  <tr key={index} className="todo-item">
                    <td>{item.time}</td>
                    <td>{item.msg}</td>
                  </tr>
                </>
              );
            })
          : null}
      </table>
    </>
  );
}
