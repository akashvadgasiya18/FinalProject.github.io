import { Space, Statistic, Table, Card, Typography } from "antd";
import React, { useState, useEffect } from "react";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import orderData from "./Api/Index";

const Dash = () => {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title
        level={6}
        style={{ margin: "20px", marginRight: "52rem", fontFamily: "Poppins" }}
      >
        Dashboard
      </Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 50,
                fontSize: 40,
                marginLeft: "-30px",
                marginRight: 15,
                // height:'50px',
                padding: 15,
              }}
            />
          }
          title={"Orders"}
          value={400}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 50,
                fontSize: 40,
                marginLeft: "-30px",
                marginRight: 15,
                // height:'50px',
                padding: 15,
              }}
            />
          }
          title={"Inventory"}
          value={300}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 50,
                fontSize: 40,
                marginLeft: "-30px",
                marginRight: 15,
                // height:'50px',
                padding: 15,
              }}
            />
          }
          title={"Customer"}
          value={200}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 50,
                fontSize: 50,
                marginLeft: "-30px",
                marginRight: 15,
                // height:'50px',
                padding: 15,
              }}
            />
          }
          title={"Revenue"}
          value={200}
        />
      </Space>
      <Space>
        <RecentOreders />
      </Space>
    </Space>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ marginRight: "0px", marginLeft: "30px", width: "30vh" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

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
    style={{ marginRight:'0rem',width:'60rem'}}
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
export default Dash;
