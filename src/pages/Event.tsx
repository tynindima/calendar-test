import React, { FC, useEffect, useState } from 'react';
import { Button, Modal, Row } from 'antd';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { fetchGuests, fetchEvents, createEvent } = useActions();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false)
  };

  const handlerSubmitEventForm = (event: IEvent) => {
    createEvent(event); 
    handleCancel();
  };

  return (
    <div>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
      </Row>
      <Modal 
        title="Add event" 
        visible={isModalVisible} 
        onCancel={handleCancel}
        footer={null}
      >
        <EventForm guests={guests} onSubmit={handlerSubmitEventForm} 
        />
      </Modal>
    </div>
  )
}

export default Event;
