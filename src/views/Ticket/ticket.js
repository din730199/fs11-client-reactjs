import axios from 'axios';
import React, {useEffect, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export default function Ticket() {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      var response = await axios({
        url: `https://vexere-dint.herokuapp.com/byId-ticket`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('@token'),
        },
      });
      setList(response.data);
      setLoading(false);
    };
    getList();
  }, []);

  return (
    <div className="container d-flex justify-content-center my-5  ">
      {loading || !list ? (
        <div>Loading...</div>
      ) : (
        <div>
          {list?.map((i) => {
            return (
              <div key={i._id} className="card bg-light p-3 my-3">
                <div className="card-block">
                  <h2 className="display-5">{i._id}</h2>
                  <span className="lead">
                    Điểm đi: {i.trip.departurePlace.name}
                    {'  '}
                  </span>
                  <i className="fas fa-arrow-right"></i>
                  <span className="lead">
                    {' '}
                    Điểm đến: {i.trip.arrivalPlace.name}{' '}
                  </span>
                  <hr className="my-2" />
                  <p>
                    Ngày khởi hành:{' '}
                    {new Date(i.trip.startedDate).toLocaleDateString()}
                  </p>
                  <p>
                    Thời gian khởi hành:{' '}
                    {new Date(i.trip.departureTime).toLocaleTimeString()}
                  </p>
                  <p>Giá vé: {i.trip.price}</p>
                  {i.seat.map((i) => {
                    return <p key={i._id}>Ghế số: {i.name}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
