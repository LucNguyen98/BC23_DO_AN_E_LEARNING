import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

export default function ButtonDropDown({
  title = 'Actions',
  menus = [],
  onSelected,
  item,
}) {
  const [dropdownOpen, setDropDown] = useState(false);

  const toggle = () => {
    setDropDown(!dropdownOpen);
  };
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="primary">
        {title}
      </DropdownToggle>
      <DropdownMenu>
        {menus.map((menu, index) => {
          return (
            <DropdownItem
              key={index}
              onClick={() => {
                onSelected(menu, item);
              }}
            >
              {menu.icon}
              <span className="pl-2">{menu.name}</span>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </ButtonDropdown>
  );
}
