import React, { useState } from 'react';
import { DownOutlined, SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import style from "./Home.module.css";
import { NavLink } from 'react-router-dom';
import logo from "../../assert/logo2.png";
import HomeMain from './HomeMain';
import Count from './Count';
import Card from './Card';
import Videos from './Videos';
import Lesson from './Lesson';
import Data from './Data';
import Info from './Info';
import Test from './Test';
import Game from './Game/Game';
import FAQ from './Faq';

const Home = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
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
    <>
      {newFunction()}
      <HomeMain />
      <Count />
      <Card />
      <Videos />
      <Lesson />
      <Data />
      <Info />
      <Test />
      <Game />
      <FAQ/>
    </>

  );

  function newFunction() {
    return <div className={style.wrapper}>
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
                Ota-onalar 1
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
          <Button className={style.button1} icon={<SearchOutlined />}>
            Search
          </Button>
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
    </div>;
  }
};

export default Home;
