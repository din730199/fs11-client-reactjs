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
            <Link to="/login" className="nav-link">
              Đăng nhập
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Đăng kí
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
