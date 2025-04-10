import React, { useState } from "react";

const Nav = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "tab1", label: "home", number: "00" },
    { id: "tab2", label: "destination", number: "01" },
    { id: "tab3", label: "crew", number: "02" },
    { id: "tab4", label: "technology", number: "03" },
  ];

  return (
    <div className="nav-section">
      {/* logo */}
      <img src="/assets/shared/logo.svg" alt="logo" className="pl-8 md:pl-0" />
      {/* line */}
      <div className="hidden md:inline w-200 pl-20 z-50">
        <hr className="border-t border-gray-300" />
      </div>
      {/* links */}

      {/* mobile nav */}

      { !isOpen && 
      <button className="md:hidden z-50 cursor-pointer pr-8" onClick={() => setIsOpen(true)}>
        <img src="assets/shared/icon-hamburger.svg" alt="hamburger icon" />
      </button>
}

      <ul className="nav-links">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "active" : " "}
            >
              <span>{tab.number}</span> {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {isOpen && (
        <ul className="nav-links-mobile  fixed  top-0 right-0 z-40 pr-8">
          <li className="flex w-full items-end justify-end cursor-pointer">
            <button onClick={() => setIsOpen(false)}>
              <img src="assets/shared/icon-close.svg" alt="close icon" />
            </button>
          </li>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsOpen(false); // close menu when tab is clicked
                }}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.number}</span> {tab.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
