import React, { useState, useEffect } from "react";
import { navData } from "../common/navData";
import { useSelector, useDispatch } from "react-redux";
import { setSectionActiveAction } from "../redux/actions";

const Navigation = () => {
  const dispatch = useDispatch();
  const sectionActive = useSelector((state) => state.sectionActive);
  const weatherData = useSelector((state) => state.weatherData);
  const [useNav, setNav] = useState(navData);
  useEffect(async () => {
    addStyle(sectionActive);
  }, [sectionActive]);
  const activeItem = (name) => {
    if (name === navData[1].label) {
      if (weatherData.ok) {
        dispatch(setSectionActiveAction(name));
      }
    } else {
      dispatch(setSectionActiveAction(name));
    }
  };
  const addStyle = (name) => {
    const newNav = useNav.map((l) => {
      if (l.label === name) {
        return {
          ...l,
          active: true,
        };
      } else {
        return {
          ...l,
          active: false,
        };
      }
    });
    setNav(newNav);
  };
  return (
    <div className="b-nav">
      <ul className="b-nav__lists">
        {useNav.map((l, i) => (
          <li
            onClick={() => activeItem(l.label)}
            key={i}
            className={`b-nav__list ${l.active ? "active" : ""}`}
          >
            <div className="b-nav__link">
              <span className="b-nav__icon">
                <ion-icon name={l.icon}></ion-icon>
              </span>
              <span className="b-nav__title">{l.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navigation;
