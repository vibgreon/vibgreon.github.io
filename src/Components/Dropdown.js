import Wrapper from "@/Components/Wrapper";
import { useState } from "react";

export default function Dropdown({selected, setSelected}) {
  const [active, setActive] = useState(false);
  const options = ["Adventure", "Thrilled", "Relaxing", "Exotic"];
  return (
    <>
      <Wrapper>
        <div>
          <h1>Proper Dropdown</h1>
          <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setActive(!active)}>
              {selected}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9999 4.9999L2.99992 4.99989C2.81767 5.00046 2.63904 5.05073 2.48324 5.14527C2.32744 5.23982 2.20037 5.37506 2.11572 5.53645C2.03107 5.69783 1.99203 5.87925 2.00281 6.06118C2.0136 6.2431 2.07379 6.41864 2.17692 6.56889L11.1769 19.5689C11.5499 20.1079 12.4479 20.1079 12.8219 19.5689L21.8219 6.5689C21.9261 6.41895 21.9872 6.24333 21.9986 6.0611C22.0099 5.87887 21.9711 5.69702 21.8864 5.53529C21.8017 5.37356 21.6742 5.23814 21.518 5.14375C21.3617 5.04936 21.1825 4.99961 20.9999 4.9999Z"
                  fill="white"
                />
              </svg>
            </div>
            {active && (
              <div className="dropdown-content">
                {options.map((option) => (
                  <div
                    onClick={(e) => {
                      setSelected(option);
                      setActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {option}
                  </div>
                ))}

                {/* <div className="dropdown-item">Thrilled</div>
                <div className="dropdown-item">Relaxing</div>
                <div className="dropdown-item">Exotic</div> */}
              </div>
            )}
          </div>
          Damn
        </div>
      </Wrapper>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          .dropdown {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 400px;
            margin: 10px auto;
            position: relative;
            user-select: none;
          }

          .dropdown .dropdown-btn {
            border: 0.5px solid #fcfcfcfc;
            padding: 10px 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
          }

          .dropdown .dropdown-content {
            position: absolute;
            left: 0;
            top: 110%;
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 10px 15px;
            border: 0.5px solid #fcfcfcfc;
            width: 92.1%;
          }

          .dropdown .dropdown-content .dropdown-item {
            padding: 10px;
            cursor: pointer;
            transition: all 0.2s;
          }

          .dropdown .dropdown-content .dropdown-item:hover {
            background-color: #fcfcfcfc;
            color: black;
          }
        `}
      </style>
    </>
  );
}
