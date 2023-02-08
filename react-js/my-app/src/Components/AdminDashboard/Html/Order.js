import { Space, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import orderData from "./Api/Index";

const Order = () => {
  return (
    <>
      <Typography.Title
        level={6}
        style={{ margin: "20px", marginRight: "52rem", fontFamily: "Poppins" }}
      >
        Orders
      </Typography.Title>
      <Space>
        <RecentOreders />
      </Space>
    </>
  );

  function RecentOreders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      orderData().then((res) => {
        setDataSource(res.products);
        setLoading(false);
      });
    }, []);
    return (
      <Table
        style={{ marginRight: "0rem", width: "60rem" }}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    );
  }
};

export default Order;
