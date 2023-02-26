import React from 'react'
import "./Purchaseorder.css";


export default function Purchaseorder() {
  return (
    <div className="container">
    <form action="">
    <h1>Purchase Order Details</h1>
    <div className="content">
        <div className="input-box">
          <label for="name">Created by</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Created date</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">PO#</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box-o">
          <label for="name">Vendor</label>
          <select name="" id="">
          <option value="">1 Vendor Name here <span className='red' style={{ color : 'red'}}>Min Order $500.00</span></option>
        </select>
          <div className='items' style={{display: "flex", justifyContent: 'space-between'}}>
           <div>Items</div>
           <div>Total Price: $0.00</div>
          </div>
          <div className="input-box-op">
          
          <div className="input-box-p">
          <label for="name">item</label>
          <select name="" id="">
          <option value=""></option>
        </select>
        </div>
          <div className="input-box-p">
          <label for="name">QTY</label>
          <select name="" id="">
          <option value=""></option>
        </select>
        </div>
        <div className="input-box">
          <label for="name">Price</label>
          <input type="text" placeholder="" />
        </div>
        </div>
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
  )
}
