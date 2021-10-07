import React from 'react';

import s from './Notification.module.css';

const Notification = ({ message }) => <p className={s.description}>{message}</p>;

export default Notification;