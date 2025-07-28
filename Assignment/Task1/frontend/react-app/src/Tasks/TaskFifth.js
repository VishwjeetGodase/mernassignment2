import React, { useState } from 'react';

const TaskFifth = () => {
  const [patternRows, setPatternRows] = useState([]);

  const printPattern = (n) => {
    let counter = 1;
    const newRows = [];

    for (let i = 1; i <= n; i++) {
      let row = '';

      for (let j = 1; j <= i; j++) {
        row += counter + ' ';
        counter++;
      }

      console.log(row.trim()); 
      newRows.push(row.trim()); 
    }

    setPatternRows(newRows); 
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Poppins, sans-serif' }}>
      <h2>Pattern Print Task</h2>
      <button onClick={() => printPattern(4)}>
        Print Pattern
      </button>

      <div style={{ marginTop: 20 }}>
        {patternRows.map((row, index) => (
          <div key={index} style={{ marginBottom: 4 }}>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskFifth;
