/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Divider, Tag } from 'antd';

import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_num',
    key: 'phone_num',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'IP Address',
    dataIndex: 'ip_address',
    key: 'ip_address',
  },
  {
    title: 'Time Ellapsed',
    dataIndex: 'time_ellapsed',
    key: 'time_ellapsed',
  },
  // {
  //   title: 'History',
  //   dataIndex: 'history',
  //   key: 'hisory',
  // },
  // {
  //   title: 'Message',
  //   dataIndex: 'message',
  //   key: 'message',
  // },
  {
    title: 'LTV Price',
    dataIndex: 'ltv_price',
    key: 'ltv_price',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map((tag, index) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={`${tag}-${index}`}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const ContactsTable = (props) => {
  const { contacts } = props;
  return (
    <Table
      columns={columns}
      dataSource={contacts}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {props.toggleDrawer(record)}, // click row
        };
      }}
    />
  )
}

export default ContactsTable;
