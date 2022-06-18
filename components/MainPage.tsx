import React from "react";

export default function MainPage() {
  return (
    <div>
      <header className="header-container">
        <h1 className="header-title">Note App</h1>
        <p>Created by TypeScript and Redux-Saga</p>
      </header>
      <main className="header-main-content">
        <div className="header-input-container">
          <input type="text" placeholder="Title" className="input-title" />
          <textarea placeholder="Description" className="input-description" />
          <button className="add-new-button">Add New Note</button>
        </div>
        <div className="header-main-dashboard">loads</div>
      </main>
    </div>
  );
}
