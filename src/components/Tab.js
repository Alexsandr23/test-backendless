import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import "../App.css"

const Tab = ({ id, title }) => {
  const match = useRouteMatch(`/tabs/${id}`);
  const isActive = match != null;

  return (
    <div className={isActive ? 'active-tab' : 'inactive-tab'}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </div>
  );
};

export default Tab;