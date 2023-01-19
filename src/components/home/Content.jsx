import "./Content.css";
import { ImUser } from "react-icons/im";
import { FaLiraSign } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

import { Form, Button } from "react-bootstrap";

const Content = () => {
  const [cardNo, setCardNo] = useState("");
  const validateCard = (cardNo) => {
    let sum = 0;
    let numDigits = cardNo.length;
    let parity = numDigits % 2;
    for (let i = 0; i < numDigits; i++) {
      let digit = parseInt(cardNo.charAt(i));
      if (i % 2 == parity) digit *= 2;
      if (digit > 9) digit -= 9;
      sum += digit;
    }
    return sum % 10 == 0;
  };
  const [isValid, setIsValid] = useState(false);
  const handleCardNo = (e) => {
    setCardNo(e.target.value);
    setIsValid(validateCard(e.target.value));
  };

  const [last, setLast] = useState(0);
  const [date, setDate] = useState(0);
  const [name, setName] = useState("");
  const [chooseBank, setChooseBank] = useState("");
  const [data, setData] = useState({});
  const [amount, setAmount] = useState("");
  const [showTable, setShowTable] = useState(false);

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

  const handleChange2 = (e) => {
    setAmount(e.target.value);
    if (e.target.value) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
    let value = e.target.value;
    if (value) {
      value = parseFloat(value).toLocaleString("en", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 9,
      });
      value = value.replace(/\./g, "");
      value = value.replace(/(\d{3})(?=(\d{3})+\,)/g, "$1.");
      value = value.replace(/(\d+\,\d{9})\d+/, "$1");
    }
    setAmount(value);
  };

  useEffect(() => {
    axios
      .get("http://hasanadiguzel.com.tr/api/kurgetir")
      .then((response) => {
        setData(response?.data);
        console.log(response.data.TCMB_AnlikKurBilgileri[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home-content d-flex flex-column gap-2 p-3  ">
      <div>
        <span className="content-title p-2">Anasayfa </span>/ Ödeme İşlemleri
      </div>
      <div className="bg-white rounded-2 py-4 px-1 content-wrapper position-relative">
        <div className="d-flex align-items-center justify-content-evenly">
          <div className="profile-card d-flex gap-2 align-items-center p-2 ">
            <div>
              <ImUser className="text-white card-icon " />
            </div>
            <div className="d-flex flex-column ">
              <div className="title">HOŞGELDINIZ</div>
              <div className="subTitle">
                Yerinde Teknoloji <br />
                Bilg.Yaz.Ve...
              </div>
            </div>
          </div>
          <div className="balance-t-card d-flex gap-2 align-items-center p-2 ">
            <div>
              <FaLiraSign className="text-white card-icon " />
            </div>
            <div className="d-flex  justify-content-between gap-2  w-100  ">
              <div className="d-flex flex-column">
                <div className="title">BAKİYENİZ</div>
                <div className="subTitle">0,00</div>
              </div>
              <div className="d-flex flex-column text-end">
                <div className="title">
                  İRSALİYELEŞMEMİŞ <br /> Bakiye
                </div>
                <div className="subTitle">0,00</div>
              </div>
            </div>
          </div>
          <div className="balance-card d-flex gap-2 align-items-center p-2 ">
            <div>
              <BiDollar className="text-white card-icon " />
            </div>
            <div className="d-flex flex-column ">
              <div className="title">BAKİYENİZ</div>
              <div className="d-flex flex-column ">
                <div className="subTitle ">0,00</div>
                <small>
                  {data.TCMB_AnlikKurBilgileri && (
                    <small>
                      Kur: {data.TCMB_AnlikKurBilgileri[0].ForexBuying}
                    </small>
                  )}
                </small>
              </div>
            </div>
          </div>
          <div className="balance-t-red-card d-flex gap-2 align-items-center p-2 ">
            <div>
              <FaLiraSign className="text-white card-icon " />
            </div>
            <div className="d-flex  justify-content-between gap-2  w-100  ">
              <div className="d-flex flex-column">
                <div className="title">BAKİYENİZ</div>
                <div className="subTitle">0,00</div>
              </div>
              <div className="d-flex flex-column text-end">
                <div className="title">
                  İRSALİYELEŞMEMİŞ <br /> Bakiye
                </div>
                <div className="subTitle">0,00</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center py-3  smaller-font">
            Kredi Kartı İle Ödeme
          </h2>
          <div className="d-flex gap-1">
            <div className="card-info d-flex flex-column gap-2 box">
              <h3 className="kart text-center mx-auto">Kart Bilgileri</h3>
              <div
                className={`credit-card mx-auto d-flex flex-column justify-content-between p-2 rounded-3 ${chooseBank}`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <img className="chip me-auto" src="/images/chip.png" alt="" />
                  {chooseBank === "ziraat" ? (
                    <div className="bg-white ">
                      {" "}
                      <img
                        className="card-logo"
                        src="https://api.proentegre.com/images/b22ank/llbSBoZqNgbktTDpkwJgbdfl.png"
                        alt=""
                      />
                    </div>
                  ) : null}
                  {chooseBank === "visa" ? (
                    <div className="bg-white  ">
                      {" "}
                      <img
                        className="card-logo"
                        src="/images/visa.png"
                        alt=""
                      />
                    </div>
                  ) : null}
                  {chooseBank === "yapiKredi" ? (
                    <div className="bg-white ">
                      {" "}
                      <img
                        className="card-logo"
                        src="/images/yapiKredi.png"
                        alt=""
                      />
                    </div>
                  ) : null}
                  {chooseBank === "maximum" ? (
                    <div className="bg-white ">
                      {" "}
                      <img
                        className="card-logo"
                        src="/images/maximum.png"
                        alt=""
                      />
                    </div>
                  ) : null}
                </div>
                <div className="text-center card-number ">
                  {cardNo !== 0 ? cardNo : "**** **** **** ****"}
                </div>
                <div className="d-flex justify-content-between px-3">
                  <div>
                    {name.trimStart() === "" ? "ADINIZ SOYADINIZ" : name}
                  </div>
                  <div className="d-flex flex-column fw-bold">
                    <div>valid thru</div>
                    <div className="mx-auto">
                      {last === 0 ? "01" : last}/
                      {date === 0 ? (
                        "19"
                      ) : (
                        <span>
                          {date[2]}
                          {date[3]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-55 m-4 text-center fw-bold">
                Hesabınıza 0 TL kredi kartı komisyonu bedeli yansıtılacaktır
              </div>
            </div>
            <div className="kart w-100 p-3  d-flex flex-column  box">
              <div className="d-flex fw-bold ">
                <div>Hangi hesaba ödeme yapmak istiyorsunuz?</div>
                <div className="ml-2 text-danger">*</div>
              </div>{" "}
              <form
                className="d-flex flex-column gap-2 credit-form mb-5"
                action=""
              >
                <div className="d-flex flex-column ">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    ></input>
                    <label class="form-check-label" for="exampleRadios1">
                      $ Hesabı{" "}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    ></input>
                    <label class="form-check-label" for="exampleRadios1">
                      ₺ Hesabı{" "}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    ></input>
                    <label class="form-check-label" for="exampleRadios1">
                      ₺ Hesabı{" "}
                    </label>
                  </div>
                </div>
                <div className="w-100 d-flex flex-column">
                  <div className="d-flex fw-bold my-2 ">
                    <div>Tutar:</div>
                    <div className="ml-2 text-danger">*</div>
                  </div>
                  <div className="">
                    <input
                      className="form-input w-100"
                      type="text"
                      required=""
                      value={amount}
                      onChange={handleChange2}
                    />
                  </div>
                </div>
                <div className="w-100 d-flex flex-column">
                  <div className="d-flex  fw-bold my-2">
                    <div>Kart No:</div>
                    <div className="ml-2 text-danger">*</div>
                  </div>
                  <div className="">
                    <input
                      className={`form-input w-100 ${
                        isValid ? "valid" : "invalid"
                      }`}
                      onChange={handleCardNo}
                      type="text"
                      required=""
                      maxLength="16"
                      value={cardNo}
                    />
                  </div>
                </div>
                <div className="w-100 d-flex flex-column">
                  <div className="d-flex fw-bold my-2 ">
                    <div>Kart Üzerindeki İsim:</div>
                    <div className="ml-2 text-danger">*</div>
                  </div>
                  <div className="">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Kart Üzerindeki İsim"
                      className="form-input w-100 "
                      type="text"
                      required=""
                    />
                  </div>
                </div>

                <div className="w-100 d-flex flex-column">
                  <div className="d-flex fw-bold my-2 ">
                    <div>Son Kullanma Tarihi & CVC/CVV Kodu</div>
                    <div className="ml-2 text-danger">*</div>
                  </div>
                  <div className="">
                    <select
                      onChange={(e) => setLast(e.target.value)}
                      className=" date-input"
                      style={{ height: "35px" }}
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select
                      onChange={(e) => setDate(e.target.value)}
                      className=" date-input"
                      style={{ height: "35px" }}
                    >
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                    <input
                      placeholder="CVC Kodu"
                      className="cvc"
                      // type="number"
                      style={{ height: "35px" }}
                      maxLength="3"
                    />
                  </div>
                </div>

                <div className="w-100 d-flex flex-column my-2">
                  <div className="d-flex fw-bold my-2 ">
                    <div>Ödeme Şekli</div>
                    <div className="ml-2 text-danger">*</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      {" "}
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios1"
                          id="exampleRadios2"
                          value="option1"
                          checked
                        ></input>
                        <label class="form-check-label" for="exampleRadios1">
                          Hesaba Geçecek Tutar(Net Ödeme){" "}
                        </label>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios1"
                          id="exampleRadios2"
                          value="option1"
                          checked
                        ></input>
                        <label class="form-check-label" for="exampleRadios1">
                          Karttan Çekilecek Tutar(Net Ödeme){" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute submit-box d-flex flex-column">
                  <label
                    for="agreement"
                    className="alert alert-info  w-100 d-flex gap-2 align-items-center"
                  >
                    <input id="agreement" type="checkbox" required />
                    <div className="user-select-none">
                      * Yukarıdaki bilgilerin doğruluğunu onaylıyor ve Bilkur
                      Bilgisayar Sanayi ve Ticaret Ltd. Şti. ile aramda yapmış
                      olduğum ticari sözleşme şartlarına uygun olduğunu kabul
                      ediyorum.
                    </div>
                  </label>
                  <button className="submit-btn btn fw-bold z-2 ms-auto ">
                    Ödemeyi Tamamla
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex flex-column gap-2  box">
              <div className=" d-flex align-items-start gap-2 border-1 border card-logo-box same-width">
                <img
                  onClick={() => setChooseBank("visa")}
                  className="banks-logo  mx-1 "
                  src="https://api.proentegre.com/images/bank/aPtioxaHhpTqgvuAURyBEuGi.png"
                  alt=""
                />
                <img
                  onClick={() => setChooseBank("ziraat")}
                  className="banks-logo mx-4"
                  src="https://api.proentegre.com/images/bank/llbSBoZqNgbktTDpkwJgbdfl.png"
                  alt=""
                />
                <img
                  onClick={() => setChooseBank("yapiKredi")}
                  className="banks-logo mx-4 "
                  src="https://api.proentegre.com/images/bank/KQOyyebnyyZoRlbMxtHXfQMH.png"
                  alt=""
                />
                <img
                  src="https://api.proentegre.com/images/bank/ZsRulsdXLBfPaegPmBmrLSrs.png"
                  onClick={() => setChooseBank("maximum")}
                  className="banks-logo mx-4"
                  alt=""
                />
              </div>
              <div className="choose-table same-width my-4 ">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th className="align-middle">TAKSIT</th>
                      <th className="align-middle">KOMISYON ORANI</th>
                      <th className="align-middle">ÇEKILECEK TUTAR</th>
                      <th className="align-middle">KOMISYON TUTARI</th>
                      <th className="align-middle">
                        CARI HESABA İŞLENECEK TUTAR
                      </th>
                      <th className="align-middle">AYLIK ÖDEME</th>
                    </tr>
                  </thead>
                  {showTable ? (
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                              checked
                            ></input>
                            <label
                              class="form-check-label"
                              for="exampleRadios1"
                            >
                              Seç{" "}
                            </label>
                          </div>
                        </td>
                        <td>Tek Çekim</td>
                        <td>% 0</td>
                        <td>{amount} TL</td>
                        <td>0,00 TL</td>
                        <td>{amount} TL</td>
                        <td>{amount} TL</td>
                      </tr>
                    </tbody>
                  ) : null}
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
