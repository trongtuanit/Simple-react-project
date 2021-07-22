import React from "react";

export default function User({ avatar_url, html_url, login }) {
  return (
    <div className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url}>view profile</a>
    </div>
  );
}
