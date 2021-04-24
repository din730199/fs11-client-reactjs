import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import './css.css';
import Seat from './Seat';

export default function TripDetail() {
  const {id} = useParams();
  const [trip, setTrip] = useState();
  const [seat, setSeat] = useState();
  const [loading, setLoading] = useState(true);
  const [seatName, setSeatName] = useState([]);
  const [seatId, setSeatId] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await axios({
        url: `https://vexere-dint.herokuapp.com/trip/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTrip(response.data);
      setSeat(response.data.seat);
      setLoading(false);
    };
    getList();
  }, []);

  const handleSelect = (i, ix) => {
    const newSeat = [...seat];
    if (newSeat[ix].select === 'select') {
      newSeat[ix].select = '';

      const newSeatName = seatName.filter((seat) => {
        return seat !== i.name;
      });
      setSeatName(newSeatName);

      const newSeatId = seatId.filter((seat) => {
        return seat !== i._id;
      });
      setSeatId(newSeatId);
    } else {
      newSeat[ix].select = 'select';
      setSeatName([...seatName, i.name]);
      setSeatId([...seatId, i._id]);
    }

    setSeat(newSeat);
  };

  const submit = async () => {
    if (!localStorage.getItem('@token')) {
      alert('Đăng nhập trước khi đặt vé');
    } else if (seatId.length === 0) {
      alert('Bạn chưa chọn ghế');
    } else {
      let response = await axios({
        url: `https://vexere-dint.herokuapp.com/trip/booking`,
        method: 'POST',
        data: {
          tripID: id,
          seatID: seatId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('@token'),
        },
      });
      if (response.data.msg === 'success') {
        alert('Thành công');
        window.location.replace('/ticket');
      } else {
        alert(response.data.msg);
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center my-5  ">
      {loading || !trip ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="row">
            <div className="col-sm-6">
              <h3>Chọn ghế</h3>
              {seat.map((i, ix) => {
                return (
                  <Seat
                    key={i._id}
                    seat={i}
                    ix={ix}
                    handleSelect={handleSelect}
                  />
                );
              })}
            </div>
            <div className="col-sm-6">
              <h3>Danh sách ghế đang chọn</h3>
              <button onClick={submit} className="btn btn-info mb-2">
                Đặt vé
              </button>
              <div>
                {seatName.map((i) => {
                  return (
                    <p key={i} className="badge badge-dark mr-2 p-2">
                      Ghế số: {i}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
