import {
    AppstoreOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import '../../AdminDashboard/css/sidemenu.css'
  
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
              label: "Users Information",
              icon: <AppstoreOutlined />,
              key: "/profile/users",
            },
            {
              label: "My Orders",
              key: "/profile/userorders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Change Password",
              key: "/profile/ChangePassword",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default Sidemenu;
  