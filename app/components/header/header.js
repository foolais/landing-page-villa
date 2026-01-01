"use client";

import { useState } from "react";
import { Menu } from "../../../public/icons/menu";
import styles from "./header.module.css";
import RightArrow from "../../../public/icons/right-arrow";
import DownArrow from "../../../public/icons/down-arrow";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <div>
          <div
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </div>
          {isMenuOpen && (
            <ul className={styles.dropdownMenu}>
              <li>About</li>
              <li onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                Villa Categorys
                <div className={styles.rigthArrowIcon}>
                  <RightArrow />
                </div>
              </li>
              <li>Gallery</li>
            </ul>
          )}
          {isSubMenuOpen && (
            <ul className={styles.subMenu}>
              <li>4 Bedroom Villa</li>
              <li>2 Bedroom Villa</li>
              <li>Joglo House</li>
              <li>Kudus House</li>
              <li>Bamboo House</li>
              <li>Bamboo Studio</li>
            </ul>
          )}
        </div>
        <div className={styles.dropdownVilla}>
          <p className={styles.headerText}>Villa Category</p>
          <DownArrow />
        </div>
      </div>
      <div className={styles.rightHeader}>
        <p className={styles.headerText}>Contact Us</p>
        <div>
          <p className={styles.headerText}>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
