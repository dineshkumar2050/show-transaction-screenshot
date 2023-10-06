import React, { useState, useEffect } from 'react';
import './App.css';
import info from './images/img7.jpeg';
import left_arrow from './images/img8.jpeg';
import upload_icon from './images/img9.jpeg';
import right_arrow_img from './images/img11.jpeg';
import bank_img from './images/img12.jpeg';
import question_mark from './images/img13.jpeg';
import bottom_secton from './images/img19.jpeg';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { url } from './url';

function TransactionSuccess() {
    const [data, setData] = useState({});
    const location = useLocation();
    const { state: dataReceived } = location;

    useEffect(() => {
        if(dataReceived && Object.keys(dataReceived).length) {
            setData(dataReceived)
            function sendSMS() {
                const pathData = url();
                setTimeout(() => {
                    (
                        async function() {
                            const response = await axios.get(`${pathData}/${dataReceived.customerPhoneNumber}`);
                            if(response) {
                                console.log(response);
                                alert('Message sent successfully');
                            }
                        }
                    )()
                }, 5000)
            }
            // sendSMS();
        }
    }, [location, dataReceived]);
    return (
      <div className='app'>
        <div className='phone-pe-outer'>
          <div className='top-with-green green-bg'>
            <div className='top-section j-between'>
              <div className='left-section time'>
                {data.timeNow}{/* 5:46 */}
              </div>
              <div className='right-section others'>
              <img src={info} alt='just-info' />
              </div>
            </div>
            <div className='bottom-section'>
              <div className='left-section'>
                <img src={left_arrow} alt='left-arrow' />
              </div>
              <div className='middle-section'>
                <div className='top-section-inner text-center'>
                  Transaction Successful
                </div>
                <div className='bottom-section-inner text-center'>
                  {/* 30 September 2023 at 8:00PM */}
                  {`${data.transactionDate} ${data.transactionMonth} ${data.transactionYear} at ${data.transactionTime}`}
                </div>
              </div>
              <div className='right-section'>
                <img src={upload_icon} alt='upload-icon' />
              </div>
            </div>
          </div>
          <div className='outer-for-bottom-section'>
            <div className='transaction-id-container card'>
              <div className='left-section'>
                <div className='label topmost'>Transaction ID</div>
              </div>
              <div className='bottom-most'>
                <div className='tran-id'>T2309302000053981716168</div>
                <div className='copy-text purple-text-color'>COPY</div>
              </div>
            </div>
            <div className='paid-to-container card'>
              <div className='top-section just-bold'>
                Paid to
              </div>
              <div className='mid-section j-between'>
                <div className='left-section'>
                  <img src={right_arrow_img} alt='bank-img' />
                  <div className='name-and-id'>
                    <div className='NAME just-bold'>{data.sendTo}{/*PUSHPENDER SINGH*/}</div>
                    <div className='upi-id'>{data.sendToUpiId}{/*BHARATPE90724891428@yesbankltd*/}</div>
                  </div>
                </div>
                <div className='right-section just-bold'>
                  &#8377;&nbsp;{data.amount}{/* &#8377;&nbsp;222 */}
                </div>
              </div>
              <div className='bottom-section purple-text-color'>
                SEND AGAIN
              </div>
            </div>
            <div className='debited-from-container card'>
              <div className='top-section just-bold'>
                Debited from
              </div>
              <div className='mid-section j-between'>
                <div className='left-section'>
                  <img src={bank_img} alt='bank-img' />
                  <div className='name-and-id'>
                    <div className='NAME just-bold'>XXXXXX3901</div>
                    <div className='upi-id'>UTR: 327390209035</div>
                  </div>
                </div>
                <div className='right-section just-bold'>
                  &#8377;&nbsp;{data.amount}{/* &#8377;&nbsp;222 */}
                </div>
              </div>
              <div className='bottom-section purple-text-color'>
                SPLIT EXPENSE
              </div>
            </div>
            <div className='contact-phonepe-support-container card'>
              <div className='top just-bold'>Message</div>
              <div className='bottom'>Pay to BharatPe Merchant</div>
            </div>
            <div className='rate-the-store-container card'>
              <img src={question_mark} alt='question-mark' />
              <div>Contact PhonePe Support</div>
            </div>
            <div className='powered-by-container'>
              <img src={bottom_secton} alt='bottom-secton' />
            </div>
          </div>
        </div>  
      </div> 
    )
}

export default TransactionSuccess;
