import React from "react";
import auth from '../hoc/auth'

const SecretList = props => (
  <div>
    <h2 className="align-center">Secret Operatives</h2>
    <ol>
      <li>Heather</li>
      <li>Holly</li>
      <li>Horsey</li>
    </ol>
  </div>
);

export default auth(SecretList);
