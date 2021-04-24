import React, {useState} from 'react';

async function loginUser(credentials) {
  return fetch('https://vexere-dint.herokuapp.com/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password,
      username,
      phone,
    });

    if (data.msg) {
      console.log('error');
      alert('Lỗi khi đăng kí');
      return;
    }
    alert('Đăng kí thành công');
    window.location.reload();
    window.location.replace('/login');
  };

  return (
    <div className="container d-flex justify-content-center my-5 align-items-center ">
      <div className="card o-hidden border-0 shadow-lg my-5 w-50">
        <div className="card-body p-0">
          <div className="justify-content-center row ">
            <div className="col-lg-6">
              <div>
                <br />
                <br />
                <br />
                <br />
                <div className="text-center">
                  <h1 className="h3 text-gray-900 mb-4">Register</h1>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      aria-describedby="emailHelp"
                      placeholder="Username "
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control form-control-user"
                      placeholder="Phone "
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                  >
                    Register
                  </button>
                </form>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
