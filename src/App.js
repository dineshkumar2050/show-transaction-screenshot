import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddData from './AddData';
import TransactionSuccess from './TransactionSuccess';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<AddData />} />
          <Route exact path="/transaction-success" element={<TransactionSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}
