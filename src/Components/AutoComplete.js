import Wrapper from "@/Components/Wrapper";
import { useState } from "react";
var data = require("./MOCK_DATA.json");

export default function Trial1() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    // console.log("search ", searchTerm);
  };
  return (
    <>
      <Wrapper>
        <div className="content-box">
          <h1>Auto Complete</h1>
          <div className="form-cont">
            <div className="form-item">
              {" "}
              <input
                className="place"
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search Location"
              />
              <button onClick={() => onSearch(value)} className="btn">
                Submit
              </button>
            </div>
            <div className="dropdown">
              {data
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.full_name.toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.full_name)}
                    className="dropdown-row"
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>
          </div>
          damn
        </div>
      </Wrapper>
      <style jsx>
        {`
          .content-box {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-cont {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .form-cont .form-item {
            display: flex;
            flex-direction: row;
            gap: 10px
          }

          .form-cont .form-item .place {
            padding: 10px 25px;
            border-radius: 50px;
          }

          .form-cont .form-item .btn {
            padding: 10px 25px;
            border-radius: 50px;
            cursor: pointer;
          }

          .dropdown {
            // padding: 10px 25px;
            display: flex;
            flex-direction:column;
            gap:10px;
            position: relative;
          }

          .dropdown-row {
            position: absolute;
            left: 0;
            width: 50%;
            top: 10%;
            padding: 10px 25px;
            background: #fcfcfc;
            color: black;
            border-radius: 50px;
          }
        `}
      </style>
    </>
  );
}
