import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="border-top " style={{ backgroundColor: "#fbfbfb" }}>
      <div
        className="container "
        style={{
          padding: "0px",
          position: "relative",
          width: "1100px",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="row main-footer text-14 mt-5"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className="col-3">
            <img
              src="media/images/alpha.png"
              className="mb-3"
              style={{ width: "70%" }}
              alt="logo"
            />
            <p style={{ fontSize: "0.8rem" }}>
              &copy; 2010 - 2026, AlphaTrade Broking Ltd.<br></br> All rights
              reserved.
            </p>
          </div>
          <div className="col-9 mb-5">
            <div
              className="row  d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <div className="col-3">
                <p
                  className="mb-10"
                  style={{ fontSize: "1.125rem", fontWeight: "500" }}
                >
                  Account
                </p>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Open demat account
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Minor demat account
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      NRI demat account
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Commodity
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Dematerialisation
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Fund transfer
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      MTF
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Referral program
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <p
                  className="mb-10"
                  style={{ fontSize: "1.125rem", fontWeight: "500" }}
                >
                  Support
                </p>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Contact us
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Support portal
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      How to file a complaint?
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Status of your complaints
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Bulletin
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Circular
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Z-Connect blog
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Downloads
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <p
                  className="mb-10"
                  style={{ fontSize: "1.125rem", fontWeight: "500" }}
                >
                  Company
                </p>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      About
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Philosophy
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Press & media
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Careers
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      AlphaTrade Cares (CSR)
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      AlphaTrade.tech
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Open source
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <p
                  className="mb-10"
                  style={{ fontSize: "1.125rem", fontWeight: "500" }}
                >
                  Quick Links
                </p>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Upcoming IPOs
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Brokerage charges
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Market holidays
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Economic calendar
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Calculators
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Markets
                    </Link>
                  </li>

                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      to=""
                      className="text-muted"
                      style={{ textDecoration: "none", marginBottom: "10px" }}
                    >
                      Sectors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-muted" style={{ fontSize: ".65rem" }}>
          <p style={{ marginBottom: "10px" }}>
            AlphaTrade Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through AlphaTrade
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered
            Address: AlphaTrade Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to
            <Link to="" style={{ textDecoration: "none" }}>
              complaints@AlphaTrade.com
            </Link>
            , for DP related to{" "}
            <Link to="" style={{ textDecoration: "none" }}>
              dp@AlphaTrade.com
            </Link>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF{" "}
          </p>
          <p style={{ marginBottom: "10px" }}>
            Procedure to file a complaint on{" "}
            <Link to="" style={{ textDecoration: "none" }}>
              SEBI SCORES:
            </Link>
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p style={{ marginBottom: "10px" }}>
            <Link to="" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </Link>
          </p>
          <p style={{ marginBottom: "10px" }}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p style={{ marginBottom: "10px" }}>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p style={{ marginBottom: "10px" }}>
            India's largest broker based on networth as per NSE.{" "}
            <Link to="" style={{ textDecoration: "none" }}>
              NSE broker factsheet
            </Link>
          </p>
          <p style={{ marginBottom: "10px" }}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of AlphaTrade and offering such services, please{" "}
            <Link to="" style={{ textDecoration: "none" }}>
              create a ticket here.
            </Link>
          </p>
          <p style={{ marginBottom: "10px" }}>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div style={{ textDecorationColor: "#9b9b9b", fontSize: ".75rem", lineHeight:"4" }}>
          <p className="text-center text-muted">
            NSE &nbsp;&nbsp;&nbsp; BSE &nbsp;&nbsp;&nbsp;MCX
            &nbsp;&nbsp;&nbsp;Terms & conditions &nbsp;&nbsp;&nbsp;Policies &
            procedures &nbsp;&nbsp;&nbsp;Privacy policy&nbsp;&nbsp;&nbsp;
            Disclosure &nbsp;&nbsp;&nbsp;For investor's attention
            &nbsp;&nbsp;&nbsp;Investor charter
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
