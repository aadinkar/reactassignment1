// import * as React from 'react';
import React from 'react';

function Order () {
    const options = [
        { label: '1 Day', value: '1day' },
        { label: '3 Days', value: '3days' },
        { label: '1 Week', value: '1week' },
        { label: '1 Month', value: '1month' },
      ];
    
      const [value, setValue] = React.useState('1 Week');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    return (
        <div>
            <h1 className="order">Order History</h1>
            <div className='option'>
                <select value={value} onChange={handleChange}>
                    {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>

        );
}

export default Order;
