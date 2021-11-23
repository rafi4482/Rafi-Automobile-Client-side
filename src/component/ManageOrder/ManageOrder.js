import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [status, setStatus] = useState("");
    const[orders,setOrders]=useState()
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
    useEffect(() => {
        fetch('https://secret-castle-09652.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleOrderId = (id) => {
        setOrderId(id);
      };
    
      const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://secret-castle-09652.herokuapp.com/statusUpdate/${orderId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      };
    return (
        <div className="container">
  

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Car Name</th>
            <th>Description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((ordering, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{ordering.name}</td>
              <td>{ordering.desc}</td>
              <td>{ordering.img}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(ordering?._id)}
                    {...register("status")}
                  >
                    <option value={ordering?.status}>{ordering?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
              </td>
              <button className="btn bg-danger p-2">Delete</button>
              <button className="btn bg-success p-2">Update</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default ManageOrder;