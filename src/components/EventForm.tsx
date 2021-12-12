import React, { FC } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { useTypedSelector } from './../hooks/useTypedSelector';
import { rules } from '../utils/rules';
import { IUser } from './../models/IUser';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/formatDate';

interface EventFormProps {
  guests: IUser[],
  onSubmit: (event: IEvent) => void,
};

const EventForm: FC<EventFormProps> = ({ guests, onSubmit }) => {
  const [form] = Form.useForm();
  const { user } = useTypedSelector(state => state.auth);

  const onFinish = (values: any) => {
    const validDate = formatDate(values.date);
    const event = {
      ...values,
      author: user.username,
      date: validDate,
    };

    onSubmit(event);
    form.resetFields();
   
  };

  return (
    <Form
      form={form}
      name="eventForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
        rules={[rules.required(), rules.idDateAfter('Date must be after past')]}
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
