import axios from 'axios';
import qs from 'query-string';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Link} from 'react-router-dom';

export default function Home() {
  const [startedDate, setStartedDate] = useState();
  const [list, setList] = useState();
  const [departurePlace, setDeparturePlace] = useState();
  const [arrivalPlace, setArrivalPlace] = useState();

  const F_ERG = (date) => {
    let today = new Date(date);

    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  useEffect(() => {
    const getList = async () => {
      var response = await axios({
        url: `https://vexere-dint.herokuapp.com/station`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setList(response.data);
    };
    getList();
  }, []);

  return (
    <div
      className="container-flui d-flex justify-content-center align-items-center  "
      style={{
        height: '750px',
        backgroundImage:
          'url(https://static.vexere.com/production/banners/330/140k_leader-board_1920x_jpg.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <select
                onClick={(e) => setDeparturePlace(e.target.value)}
                className="custom-select mb-2"
                id="inputGroupSelect02"
              >
                <option value="">Điểm đi...</option>
                {list?.map((i) => {
                  return (
                    <option key={i._id} value={i._id}>
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-auto">
              <select
                onClick={(e) => setArrivalPlace(e.target.value)}
                className="custom-select mb-2"
                id="inputGroupSelect02"
              >
                <option value="">Điểm đến...</option>
                {list?.map((i) => {
                  return (
                    <option key={i._id} value={i._id}>
                      {i.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-auto">
              <div className="mb-2">
                <DatePicker
                  className="custom-select"
                  selected={startedDate}
                  placeholderText="Ngày khởi hành"
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setStartedDate(date)}
                  minDate={new Date()}
                />
              </div>
            </div>
            <div className="col-auto">
              <Link
                to={{
                  pathname: '/trip',
                  search: qs.stringify({
                    departure: departurePlace,
                    arrival: arrivalPlace,
                    date: F_ERG(startedDate),
                  }),
                }}
                className="btn btn-info mb-2"
              >
                Submit
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
