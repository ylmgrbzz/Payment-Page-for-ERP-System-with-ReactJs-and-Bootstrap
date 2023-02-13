import "./Pro.css";
import React from "react";
import { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";

import { Form, Button } from "react-bootstrap";

const Pro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="home-content d-flex flex-column gap-2 p-2 position-relative ">
      <div>
        <span className="content-title p-2">Anasayfa </span>/ Profil Bilgileri
      </div>
      <div className="bg-white rounded-2  px-1 my-2 w-100 h-100 content-wrapper  d-flex justify-content-center align-items-center">
        <div
          className="text-center d-flex flex-wrap my-5 "
          style={{ color: "45px" }}
        >
          <Form onSubmit={handleSubmit}>
            <div className="row" style={{ textAlign: "left" }}>
              <h3 className="" style={{ textAlign: "left" }}>
                BILGILERIM
              </h3>
              <div className="col-sm-5 my-3" style={{ color: "#868ba1" }}>
                <Form.Label className="form-label">Adınız:</Form.Label>
              </div>
              <div className="col-sm-7">
                <Form.Control
                  className="my-3"
                  type="text"
                  placeholder="Adınızı Giriniz"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              className="row "
              style={{ color: "#868ba1", textAlign: "left" }}
            >
              <div className="col-sm-5 my-3" style={{ color: "#868ba1" }}>
                <Form.Label style={{ display: "inline-block" }}>
                  Eposta:
                </Form.Label>{" "}
                <div
                  className="ml-2 text-danger"
                  style={{ display: "inline-block" }}
                ></div>
              </div>
              <div className="col-sm-7">
                <Form.Control
                  className="my-3"
                  type="email"
                  placeholder="E-posta  Giriniz"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div
                className="col-sm-5 my-3"
                style={{ color: "#868ba1", textAlign: "left" }}
              >
                <Form.Label style={{ display: "inline-block" }}>
                  Mevcut Şifreniz:
                </Form.Label>{" "}
                <div
                  className="ml-2 text-danger"
                  style={{ display: "inline-block" }}
                >
                  *
                </div>
              </div>
              <div className="col-sm-7">
                <Form.Control
                  className="my-3"
                  type="password"
                  placeholder="Mevcut Şifrenizi Giriniz"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
              className="row"
              style={{ color: "#868ba1", textAlign: "left" }}
            >
              <div className="col-sm-5 my-3">
                <Form.Label style={{ display: "inline-block" }}>
                  Yeni Şifreniz:
                </Form.Label>{" "}
                <div
                  className="ml-2 text-danger"
                  style={{ display: "inline-block" }}
                >
                  *
                </div>
              </div>
              <div className="col-sm-7 ">
                <Form.Control
                  className="my-3"
                  type="password"
                  placeholder="Yeni Şifrenizi Giriniz"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
              className="row"
              style={{ color: "#868ba1", textAlign: "left" }}
            >
              <div className="col-sm-5 my-3">
                <Form.Label style={{ display: "inline-block" }}>
                  Yeni Şifre Tekrar:
                </Form.Label>{" "}
                <div
                  className="ml-2 text-danger"
                  style={{ display: "inline-block" }}
                >
                  *
                </div>
              </div>
              <div className="col-sm-7">
                <Form.Control
                  className="my-3"
                  type="password"
                  name="newPasswordConfirm"
                  placeholder="Yeni Şifrenizi  Giriniz"
                  value={formData.newPasswordConfirm}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row px-3 ">
              <div className="col-sm-9 offset-sm-5 my-2 ">
                <Button
                  style={{ backgroundColor: "#00b297" }}
                  variant="primary"
                  type="submit"
                >
                  <AiOutlineSave
                    className="iconn"
                    style={{ marginBottom: "3px", heigsht: "30px" }}
                  />
                  Değişiklikleri Kaydet
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Pro;
