import React, { FC, useEffect, useState } from 'react';
import { Button, Modal, Row } from 'antd';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useTypedSelector(state => state.event);

  useEffect(() => {
    fetchGuests();    
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false)
  };

  return (
    <div>
      <EventCalendar event={{}} />
      <Row justify="center">
        <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
      </Row>
      <Modal 
        title="Add event" 
        visible={isModalVisible} 
        onCancel={handleCancel}
        footer={null}
      >
        <EventForm guests={guests} onCancel={handleCancel} />
      </Modal>
    </div>
  )
}

export default Event;
