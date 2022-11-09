
import { Route } from "react-router-dom";
import React, { useState } from 'react';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';


const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {
    const [statecollapsed, setCollapsed] = useState({ collapsed: false });

    //nếu collapsed true => toggle setcollapced là false ngược lại 
    const toggle = () => {
        setCollapsed({
            collapsed: !statecollapsed.collapsed
        })
    }

    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={statecollapsed.collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })} */}
                        {statecollapsed.collapsed
                            ? <MenuUnfoldOutlined onClick={toggle} style={{ fontSize: "50px" }} /> : <MenuFoldOutlined onClick={toggle} style={{ fontSize: "50px" }} />}


                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <props.component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>


        </>


    }} />
}