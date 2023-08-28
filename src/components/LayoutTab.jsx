import { useState } from "react";

export default function LayoutTab({ tabLists, numbers }) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        <div className="w-full">
          {/* 탭 타이틀 */}
          <ul className={`grid ${numbers} py-2 mx-auto gap-0 `}>
            {tabLists.map(({ title }, i) => (
              <li
                key={i}
                className="cursor-pointer flex-auto text-center hover:bg-gray-50 "
              >
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(i + 1);
                  }}
                  className={`px-5 py-4 block ${
                    openTab === i + 1
                      ? " border-l-2 border-r-2 border-t-2 border-b-0 border-blue-800 font-bold text-blue-800"
                      : " border-b-2 border-blue-800"
                  }`}
                >
                  {title}
                </div>
              </li>
            ))}
          </ul>
          {/* 클릭시 보여지는 부분 */}
          <div className=" relative flex flex-col w-full my-16 rounded">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                {/* 탭 요소 */}
                {tabLists.map(({ children }, i) => (
                  <div
                    key={i}
                    className={openTab === i + 1 ? "block" : "hidden"}
                  >
                    {children}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
