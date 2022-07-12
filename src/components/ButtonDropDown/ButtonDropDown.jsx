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
  const [active, setActive] = useState(-1);
  const toggle = () => {
    setDropDown(!dropdownOpen);
  };
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="primary">
        {menus[active] ? menus[active].name : title}
      </DropdownToggle>
      <DropdownMenu>
        {menus.map((menu, index) => {
          return (
            <DropdownItem
              key={index}
              active={index === active}
              onClick={() => {
                setActive(index);
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
