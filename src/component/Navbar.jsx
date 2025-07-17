// src/components/Navbar.jsx
import React from 'react';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import logo from "../assert/logo2.png";
import style from "./Home.module.css";

const Navbar = ({
  isBurgerOpen,
  toggleBurgerMenu,
  openDropdown1,
  openDropdown2,
  openDropdown3,
  setOpenDropdown1,
  setOpenDropdown2,
  setOpenDropdown3,
  searchValue,
  setSearchValue
}) => {
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMenuClick = (e, dropdownSetter) => {
    if (e.key === 'close') {
      dropdownSetter(false);
    }
  };

  const handleOpenChange = (nextOpen, dropdownSetter, info) => {
    if (info.source === 'trigger' || nextOpen) {
      dropdownSetter(nextOpen);
    }
  };

  const dropdownItems1 = [
    { label: 'Ravshanbek', key: '1' },
    { label: 'Dilnozaxon', key: '2' },
    { label: 'Yusufjon', key: '3' },
  ];

  const dropdownItems2 = [
    { label: 'Matematika', key: '1' },
    { label: 'Fizika', key: '2' },
    { label: 'Kimyo', key: '3' },
  ];

  const dropdownItems3 = [
    { label: 'Birinchi sinf', key: '1' },
    { label: 'Ikkinchi sinf', key: '2' },
    { label: 'Uchinchi sinf', key: '3' },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.img}>
        <img src={logo} alt="logo" />
      </div>
      <div className={`${style.navbar} ${isBurgerOpen ? style.navOpen : ''}`}>
        <div className={style.down}>
          <Dropdown
            className={style.down2}
            menu={{
              items: dropdownItems1,
              onClick: (e) => handleMenuClick(e, setOpenDropdown1),
            }}
            onOpenChange={(nextOpen, info) => handleOpenChange(nextOpen, setOpenDropdown1, info)}
            open={openDropdown1}
          >
            <a onClick={(e) => e.preventDefault()} href='./'>
              <Space>
                Ota-onalar
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            className={style.down2}
            menu={{
              items: dropdownItems2,
              onClick: (e) => handleMenuClick(e, setOpenDropdown2),
            }}
            onOpenChange={(nextOpen, info) => handleOpenChange(nextOpen, setOpenDropdown2, info)}
            open={openDropdown2}
          >
            <a onClick={(e) => e.preventDefault()} href='./'>
              <Space>
                Fanlar
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            className={style.down2}
            menu={{
              items: dropdownItems3,
              onClick: (e) => handleMenuClick(e, setOpenDropdown3),
            }}
            onOpenChange={(nextOpen, info) => handleOpenChange(nextOpen, setOpenDropdown3, info)}
            open={openDropdown3}
          >
            <a onClick={(e) => e.preventDefault()} href='./'>
              <Space>
                Sinflar
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className={style.navActions}>
          <NavLink to="/login">Tizimga kirish</NavLink>
          <div className={style.searchContainer}>
            <FiSearch className={style.searchIcon} />
            <input
              type="text"
              className={style.searchInput}
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Qidirish..."
            />
          </div>
        </div>
      </div>
      {isBurgerOpen && (
        <div className={style.closeBtn} onClick={toggleBurgerMenu}>
          <CloseOutlined />
        </div>
      )}
      <div className={style.burger} onClick={toggleBurgerMenu}>
        {isBurgerOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>
    </div>
  );
};

export default Navbar;
