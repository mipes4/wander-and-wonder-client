import React from "react";
import { Table } from "react-bootstrap";

export default function Scoreboard() {
  return (
    <div>
      <h1 class="display-2">Scoreboard</h1>
      <Table variant="dark" striped bordered hover size="xsm">
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <td></td>
        </tbody>
      </Table>
    </div>
  );
}
