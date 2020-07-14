import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to Wander and Wonder</h1>
      <div>
        <Link to="/login">
          <button>Play!</button>
        </Link>
      </div>
    </div>
  );
}
