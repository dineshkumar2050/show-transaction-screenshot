import React, { useState, useEffect } from 'react';
import './AddData.css';
import { useNavigate } from 'react-router-dom';

export const getTimeIn12Hours = (hours) => {
    return hours > 12 ? hours - 12 : 12 - hours;
}
export const monthInWords = month => {
    const monthsWithWords = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }
    return monthsWithWords[month]
}
// Note - time now has to be either same or more than transaction time
export default function AddData() {
  const [data, setData] = useState({
    timeNow: '',
    transactionTime: '',
    transactionDate: '',
    transactionMonth: '',
    transactionYear: '',
    sendTo: '',
    sendToUpiId: '',
    amount: '',
    customerBankName: '',
    customerPhoneNumber: ''
  })
  const navigate = useNavigate();

  useEffect(() => {
    const date = new Date();
    const month = String(Number(date.getMonth() + 1));
    const dateNum = date.getDate();
    const year = date.getFullYear();
    setData(data => ({
        ...data,
        transactionMonth: monthInWords(month),
        transactionDate: dateNum,
        transactionYear: year,
    }))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    // date.setMinutes(2); // Set minutes to 00
    // date.setHours(0);
    const mins = date.getMinutes();
    const minutesNow = String(mins < 10 ? '0' + mins : mins);
    const hoursNow = date.getHours();
    const hoursIn12Hrs = String(getTimeIn12Hours(Number(hoursNow)));
    const timeNow = `${hoursIn12Hrs}:${minutesNow}`;
    const transactionTimeHours = `${mins < 2 ? String(Number(hoursIn12Hrs) - 1) : hoursIn12Hrs}`;
    // const justTest = String((58+mins)) || `${String((58+mins) < 10 ? '0'+(58+mins) : mins)}`;
    // const transactionTimeMins = `${mins < 2 ? String((58+mins) < 10 ? '0'+(58+mins) : mins) : String((minutesNow - 2) < 10 ? '0'+(minutesNow - 2) : (minutesNow - 2))}`;
    const transactionTimeMins = `${mins < 2 ? String((58+mins)) : String((minutesNow - 2) < 10 ? '0'+(minutesNow - 2) : (minutesNow - 2))}`;
    const isAMOrPM = `${Number(hoursNow) > 12 ? 'PM' : Number(hoursNow) === 0 || Number(hoursNow) === 1 ? 'PM' : 'AM'}`;
    const transactionTime = `${transactionTimeHours}:${transactionTimeMins === '60' ? '00' : transactionTimeMins} ${isAMOrPM}`;
    // console.log('--time test-- -> ', minutesNow, timeNow, transactionTime, hoursNow)
    const dataToSend = {
        ...data,
        timeNow,
        transactionTime
    }
    return navigate(
        '/transaction-success',
        { state: dataToSend }
    )
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    switch(name) {
        case 'sendTo':
            setData({...data, sendTo: value});
            break;
        case 'sendToUpiId':
            setData({...data, sendToUpiId: value});
            break;
        case 'amount':
            setData({...data, amount: value});
            break;
        case 'customerBankName':
            setData({...data, customerBankName: value});
            break;
        case 'customerPhoneNumber':
            setData({...data, customerPhoneNumber: value});
            break;
        case 'transactionTime':
            setData({...data, transactionTime: value});
            break;
        case 'transactionDate':
            setData({...data, transactionDate: value});
            break;
        case 'transactionMonth':
            setData({...data, transactionMonth: value});
            break;
        case 'transactionYear':
            setData({...data, transactionYear: value});
            break;
        default:
            return
    }
  }
  return (
    <div className='form'>
        <h2>Custom Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Sender Name:</label>
                <input
                    type="text"
                    id="sendTo"
                    name='sendTo'
                    value={data.sendTo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Send to upi id:</label>
                <input
                    type="text"
                    id="sendToUpiId"
                    name='sendToUpiId'
                    value={data.sendToUpiId}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div>
                <label htmlFor="email">Amount:</label>
                <input
                    type="text"
                    id="amount"
                    name='amount'
                    value={data.amount}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Customer Bank Name:</label>
                <input
                    type="text"
                    id="customerBankName"
                    name='customerBankName'
                    value={data.customerBankName}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div>
                <label htmlFor="email">Customer Phone Number:</label>
                <input
                    type="text"
                    id="customerPhoneNumber"
                    name='customerPhoneNumber'
                    value={data.customerPhoneNumber}
                    onChange={handleChange}
                    // required
                />
            </div>
            <div>
                <label htmlFor="email">Transaction Time:</label>
                <input
                    type="text"
                    id="transactionTime"
                    name='transactionTime'
                    value={data.transactionTime}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Transaction Date:</label>
                <input
                    type="text"
                    id="transactionDate"
                    name='transactionDate'
                    value={data.transactionDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Transaction Month:</label>
                <input
                    type="text"
                    id="transactionMonth"
                    name='transactionMonth'
                    value={data.transactionMonth}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Transaction Year:</label>
                <input
                    type="text"
                    id="transactionYear"
                    name='transactionYear'
                    value={data.transactionYear}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    </div>
  )
}