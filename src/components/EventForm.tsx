import React, { FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from './../models/IUser';

interface EventFormProps {
  guests: IUser[],
  onCancel: () => void,
};

const EventForm: FC<EventFormProps> = ({ guests, onCancel }) => {
  const [date, setDate] = useState('');

  const onFinish = (values: any) => {
    console.log('event values > ', values);
    console.log('date > ', values.date.format("DD.MM.YYYY"));
    onCancel();
  };

  return (
    <Form
      name="eventForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Event name"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker /> 
      </Form.Item>
      <Form.Item
        label="Guest"
        name="guest"
        rules={[rules.required()]}
      >
        <Select>
          {guests.map((guest) => 
            <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
          )}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm;
