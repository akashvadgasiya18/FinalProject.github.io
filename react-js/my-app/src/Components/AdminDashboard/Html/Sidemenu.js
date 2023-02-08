import {
    AppstoreOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    WalletOutlined
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import '../css/sidemenu.css'
  
  function Sidemenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          // mode="vertical"
          // style={{ fontSize:'16 px'}}
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/dashboards/dash",
            },
            {
              label: "Orders",
              key: "/dashboards/orders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Customers",
              key: "/dashboards/customers",
              icon: <UserOutlined />,
            },
            {
              label: "Transactions",
              key: "/dashboards/transaction",
              icon: <WalletOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default Sidemenu;
  