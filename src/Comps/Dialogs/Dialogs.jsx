import React from 'react';
import './Dialogs.css';
import Contact from './Contacts/Contact';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <>
      <NavLink
        to={`/dialogs/message${props.id}`}
        activeclassname="active"
      >
        {props.name}
      </NavLink>
    </>
  );
};

const Dialogs = (props) => {

  const location = useLocation();

  const isDialogsRoute = location.pathname === '/dialogs';

  const dialogsData = props.dialogsData;

  let dialogsElements = dialogsData.map((el, index) => (
    <DialogItem
      key={index}
      name={el.name}
      id={el.id}
    />
  ));

  let messagesData = [
    { id: 1, message: 'When I run 40 miles He runs 80' },
    { id: 2, message: 'His name is Kizzma' },
  ];

  let contactsElements = dialogsData.map((el, index) => (
    <Route
      key={index}
      path={'message' + el.id}
      element={<Contact dialogsData={props.dialogsData} messagesData={messagesData} />}
    />
  ));

  return (
    <div className="Dialogs">
      <div className="dialogs1">
        <nav id="dialogs__nav">{dialogsElements}</nav>
      </div>
      <div className={`choosing ${isDialogsRoute ? 'visible' : 'hidden'}`}>
        HERE YOUR DIALOGS WILL BE DISPLAYED
      </div>
      <Routes>{contactsElements}</Routes>
    </div>
  );
};

export default Dialogs;