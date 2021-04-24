import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        Vexere
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-link">
              Thông tin cá nhân
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ticket" className="nav-link">
              Vé đã đặt
            </Link>
          </li>
          <li className="nav-item">
            <span
              style={{cursor: 'pointer'}}
              className="nav-link"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Đăng xuất
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
