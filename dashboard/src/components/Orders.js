import React, { useState, useEffect, useEffectEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);
  return (
    <div className="orders">
      <div className="no-orders">
        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name} </td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
