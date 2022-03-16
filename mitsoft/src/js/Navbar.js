import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../css/navbar.css";
import { BrowserRouter, Link } from "react-router-dom";
export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
      <BrowserRouter>
      <MDBNavbar fixed='top' expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Qorovulbozor IT Center</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#kurslar">Kurslar</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#onlineKurs">Video darslar</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#news">Yangiliklar</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink href='#about'>Biz haqimizda</MDBNavbarLink>
            </MDBNavbarItem>
            <Link className="btnClass enterBtn" to="/enter">Kirish</Link>
            <Link className="btnClass singBtn" to="/singup">Ro'yxatdan O'tish</Link>
              {/* <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Another action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Something else here</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </BrowserRouter>
    </div>
  );
}
