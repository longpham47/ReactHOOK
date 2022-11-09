import { Card, Col, Row, Table } from 'antd';
import React from 'react';
import {Tag } from 'antd';


const { Meta } = Card;


export default function AntdDemo() {

    const dataSource = [
        {
            maPhim: 1343,
            tenPhim: "Trainwreck",
            biDanh: "trainwreck",
            trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
          
        },
        {
            maPhim: 1347,
            tenPhim: "Trainwreckkahdkahdhd",
            biDanh: "trainwreck3135153131",
            trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
          
        },
        {
            maPhim: 47,
            tenPhim: "ckkahdkahdhd",
            biDanh: "ck3135153131",
            trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
          
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      const columns = [
        {
          title: 'maPhim',
          dataIndex: 'maPhim',
          key: 'maPhim',
          render: (text) => <a>{text}</a>,
        },

        {
          title: 'tenPhim',
          dataIndex: 'tenPhim',
          key: 'tenPhim',
        },
        {
          title: 'biDanh',
          dataIndex: 'biDanh',
          key: 'biDanh',
        },
        {
            title: 'trailer',
            dataIndex: 'trailer',
            key: 'trailer',
          },
          {
            title: 'key',
            dataIndex: 'key',
            key: 'key',
          },

      ]


    return (
        <>
            <div className='container' >

                <Row>
                    {/* SPAN TỐI DA LÀ 24  chỉ số dành cho col => 24/sốl ượng cột cần tạo
                     col : tự chi kích thước của mổi cột   */}
                    <Col span={12}>
                        <Card
                            hoverable
                            style={{
                                width: "70%",
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-18" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable
                            style={{
                                width: "70%",
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>

                <Table dataSource={dataSource} columns={columns} />
            </div>
           

        </>
    )
}
