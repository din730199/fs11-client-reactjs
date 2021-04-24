import axios from 'axios';
import qs from 'query-string';
import React, {useEffect, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {Link, useLocation} from 'react-router-dom';

export default function Home() {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [params] = useState(() => {
    const params = qs.parse(location.search);
    return params;
  });

  useEffect(() => {
    const getList = async () => {
      var response = await axios({
        url: `https://vexere-dint.herokuapp.com/trip?departure=${params.departure}&arrival=${params.arrival}&date=${params.date}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setList(response.data);
      setLoading(false);
    };
    getList();
  }, [params]);

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
                  <h1 className="display-5">{i._id}</h1>
                  <span className="lead">
                    Điểm đi: {i.departurePlace.name}
                    {'  '}
                  </span>
                  <i className="fas fa-arrow-right"></i>
                  <span className="lead">
                    {' '}
                    Điểm đến: {i.arrivalPlace.name}{' '}
                  </span>
                  <hr className="my-2" />
                  <p>
                    Ngày khởi hành:{' '}
                    {new Date(i.startedDate).toLocaleDateString()}
                  </p>
                  <p>
                    Thời gian khởi hành:{' '}
                    {new Date(i.departureTime).toLocaleTimeString()}
                  </p>
                  <p>Giá vé: {i.price}</p>
                  <p>Số ghế: {i.seat.length}</p>
                  <p>
                    <Link
                      className="btn btn-info bg-gradient-info"
                      to={`/tripdetail/${i._id}`}
                    >
                      Chọn
                    </Link>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
