import axios from 'axios';
import React, {useEffect, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export default function Info() {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      var response = await axios({
        url: `https://vexere-dint.herokuapp.com/me`,
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
        <div className="card o-hidden border-0 shadow-sm my-5 w-50">
          <div className="card-body p-0">
            <div className="justify-content-center row ">
              <div className="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <img
                  src={
                    'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'
                  }
                  className="rounded"
                  alt="logo"
                />
                <div>
                  <p>Tên: {list.username}</p>
                </div>
                <div className="card-block">
                  <p>Email: {list.email}</p>
                </div>
                <div className="card-block">
                  <p>Số điện thoại: {list.phone}</p>
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
