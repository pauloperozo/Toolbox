import React from 'react';

const AppTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.file}</td>
            <td>{item.text}</td>
            <td>{item.number}</td>
            <td>{item.hex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppTable;
