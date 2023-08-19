import DropDown from "./DropDown";
import { useEffect, useRef, useState } from "react";

export default function MenuItems({ items }) {
  const [dropDown, setDropDown] = useState(false);
  let ref = useRef();
  console.log(ref);

  useEffect(() => {
    const handler = (event) => {
      if (dropDown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropDown]);
  return (
    <div>
      {items.submenu ? (
        <div>
          <h1>{items.mainTitle}</h1>
          {/* submenu ui */}
          <DropDown subMenus={items.subMenu} />
        </div>
      ) : (
        <h1>{items.mainTitle}</h1>
      )}
    </div>
  );
}
