import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend_url, currency } from "../App";
import { toast } from "react-toastify";
import { TfiPackage } from "react-icons/tfi";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return;
    }
    try {
      const response = await axios.post(
        `${backend_url}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch orders.");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/order/status`,
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Status updated successfully!");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14">
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-4 items-start p-3 text-gray-700 bg-white rounded-lg"
          >
            <div className="flexCenter">
              <TfiPackage className="text-3xl text-secondary" />
            </div>
            <div>
              <div className="flex items-start gap-1">
                <div className="medium-14">Items:</div>
                <div className="flex flex-col relative top-0.5">
                  {order.items.map((item, index) => (
                    <p key={index}>
                      {item.name} X {item.quantity} <span>"{item.size}"</span>
                    </p>
                  ))}
                </div>
              </div>
              <br />
              <p className="medium-14">
                <span className="text-tertiary">Name: </span>
                {`${order.address.firstName} ${order.address.lastName}`}
              </p>
              <p className="medium-14">
                <span className="text-tertiary">Address: </span>
                <span>{`${order.address.street}, `}</span>
                <span>
                  {`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}
                </span>
              </p>
              <p className="medium-14"><span className="text-tertiary">Phone:</span> {order.address.phone}</p>
            </div>
            <div>
              <p className="medium-14"><span className="text-tertiary">Total Items:</span> {order.items.length}</p>
              <p className="medium-14"><span className="text-tertiary">Method:</span> {order.paymentMethod}</p>
              <p className="medium-14"><span className="text-tertiary">Payment:</span> {order.payment ? "Done" : "Pending"}</p>
              <p className="medium-14"><span className="text-tertiary">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="medium-14">
              <span className="text-tertiary">Total Price: </span>
              {currency}
              {order.amount}
            </p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="text-xs font-semibold p-1 ring-1 ring-slate-900/5 rounded max-w-36 bg-primary"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
