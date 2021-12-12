import React, { FC } from 'react'
import { Badge, Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/formatDate';

interface EventCalendarProps {
  events: IEvent[];
};

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {

  const getListData = (date: Moment): IEvent[] => {
    const formatedDate = formatDate(date)
    return events.filter(ev => ev.date === formatedDate);
  }

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item, idx) => (
          <li key={idx}>
            <Badge status="success" text={item.description} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Calendar dateCellRender={dateCellRender} />
  )
}

export default EventCalendar;
