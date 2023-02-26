import React from "react";
import "./NewClient.css";

export default function NewClient() {
  return (
    <div className="container">
    <form action="">
    <h1>Add new client</h1>
    <hr />
    <span className="close">X</span>
      <div className="content">
        <div className="input-box">
          <label for="name">First Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Last Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Phone</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Email</label>
          <input type="text" placeholder="" />
        </div>
    
        <div className="input-box">
          <label for="name">Type</label>
          <select name="" id="">
          <option value="">Builder</option>
        </select>
        </div>
       
       
        
       
        
      </div>
      <div className="button-container">
      <div className="btn">
        <button className="save" type="submit">Save</button>
        <div className="btn-o">
        <button type="clear:  ">Cancel</button>
        </div>
        </div>
      </div>
      </form>
        </div>
   
    
  );
}
