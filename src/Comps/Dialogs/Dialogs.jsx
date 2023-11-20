import React, { useState } from 'react';
import './Dialogs.css';
import Message1 from './Message1/Message1';
import { NavLink, Routes, Route } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <NavLink
        to={'message' + props.id}
        activeClassName="active"  // добавляем класс active при активном NavLink
      >
        {props.name}
      </NavLink>
    </>
  );
};

const Dialogs = (props) => {
  const [activeDialog, setActiveDialog] = useState(null);

  // eslint-disable-next-line react/prop-types
  const dialogsData = props.dialogsData;

  // eslint-disable-next-line react/prop-types
  let dialogsElements = dialogsData.map((el, index) => (
    <DialogItem
      key={index}
      name={el.name}
      id={el.id}
      onClick={() => setActiveDialog(el.id)} // обновляем activeDialog при клике
    />
  ));

  let messagesData = [
    { id: 1, message: 'When I run 40 miles He runs 80' },
    { id: 2, message: 'His name is Kizzma' },
  ];

  // Contacts elements
  let contactsElements = dialogsData.map((el, index) => (
    <Route
      key={index}
      path={'message' + el.id}
      element={<Message1 dialogsData={props.dialogsData} messagesData={messagesData} />}
    />
  ));

  return (
    <div className="Dialogs">
      <div className="dialogs1">
        <nav id="dialogs__nav">{dialogsElements}</nav>
      </div>
      <div className={`choosing ${activeDialog ? 'hidden' : ''}`}>
        here your dialogs will be displayed
      </div>

      <Routes>{contactsElements}</Routes>
    </div>
  );
};

export default Dialogs;