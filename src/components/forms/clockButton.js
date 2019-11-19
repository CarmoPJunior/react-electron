import React, { useState, useEffect } from 'react';
import {getFullDateHour} from '../../utils/dateUtil';

export default function ClockButton (){

    const [dateHour, setDateHour] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        setDateHour(getFullDateHour((new Date())));
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return(

      // text-primary
        <button className="btn btn-light btn-block" 
                data-toggle="skin" >
                {dateHour}
                <i className="fa fa-calendar ml-1" aria-hidden="true"></i>
        </button>

    )

}
