import Head from "next/head";
import Wrapper from "@/Components/Wrapper";
import Navbar from "@/Components/Navbar";

export default function Page404() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div>
          <div className="missing_page_container">
            <div className="missing_page_head_title">
              you're no Obi-Wan Kenobi
            </div>
            <div>Now go back to where you came from, soldier!!</div>
          </div>
          <div className="centerWrap">
            <div className="bb8"></div>
            <span className="quote">
              "Beeep boop beep beep boop beeeeeep" -BB8
            </span>
          </div>
        </div>
      </Wrapper>
      <style jsx>
        {`
          .missing_page_head_title {
            font-size: 2.4rem;
            font-weight: 400;
            background-color: transparent;
          }

          .missing_page_container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background-color: transparent;
          }

          .centerWrap {
            left: 45%;
            margin-left: -40px;
            margin-top: -100px;
            position: absolute;
            background-color: transparent;
            top: 35%;
          }

          .quote {
            position: relative;
            top: 260px;
            left: -7.5%;
            color: transparent;
            background-color: transparent;
            text-align: center;
            font-size: 13px;
            animation: quote 1s ease-in 1s forwards;
          }

          .bb8 {
            &:before {
              height: 6px;
              width: 6px;
              content: "";
              display: block;
              position: absolute;
              z-index: 1;
              background-color: transparent;
              box-shadow: 100px 60px #161616, 100px 60px #161616,
                100px 66px #ffffff, 100px 72px #ffffff, 100px 78px #e8e8e8,
                100px 84px #e8e8e8, 100px 90px #e8e8e8, 100px 96px #161616,
                100px 102px #161616, 106px 102px #e99b3c, 112px 102px #e99b3c,
                118px 102px #e99b3c, 112px 84px #e8e8e8, 112px 90px #e8e8e8,
                112px 96px #d4d3d3, 118px 96px #d4d3d3, 124px 96px #d4d3d3,
                130px 96px #d4d3d3, 136px 96px #d4d3d3, 130px 102px #161616,
                136px 102px #161616, 130px 108px #161616, 136px 108px #161616,
                148px 114px #161616, 142px 114px #e8e8e8, 148px 108px #e8e8e8,
                154px 114px #e8e8e8, 148px 120px #e8e8e8, 94px 120px #e99b3c,
                106px 120px #e99b3c, 118px 120px #e99b3c, 124px 120px #e99b3c,
                94px 114px 0 1px #ffffff, 100px 120px 0 1px #ffffff,
                100px 114px 0 1px #ffffff, 100px 108px 0 1px #ffffff,
                106px 108px 0 1px #ffffff, 106px 114px 0 1px #ffffff,
                112px 108px 0 1px #ffffff, 112px 114px 0 1px #ffffff,
                112px 120px 0 1px #ffffff, 118px 108px 0 1px #ffffff,
                118px 114px 0 1px #ffffff, 124px 102px 0 1px #ffffff,
                124px 108px 0 1px #ffffff, 124px 114px 0 1px #ffffff,
                130px 114px 0 1px #ffffff, 130px 120px 0 1px #ffffff,
                136px 114px 0 1px #ffffff, 136px 120px 0 1px #ffffff,
                142px 120px 0 1px #ffffff, 142px 108px 0 1px #ffffff,
                142px 102px 0 1px #ffffff, 154px 120px #ffffff,
                94px 126px #c9c2c2, 100px 126px #c9c2c2, 106px 126px #c9c2c2,
                112px 126px #c9c2c2, 118px 126px #c9c2c2, 124px 126px #c9c2c2,
                130px 126px #c9c2c2, 136px 126px #c9c2c2, 142px 126px #c9c2c2,
                148px 126px #c9c2c2, 154px 126px #c9c2c2, 136px 132px #a39b9b,
                130px 132px #a39b9b, 124px 132px #a39b9b, 118px 132px #a39b9b,
                112px 132px #a39b9b, 106px 132px #a39b9b, 142px 132px #a39b9b,
                112px 132px rgba(22, 22, 22, 0.2),
                118px 132px rgba(22, 22, 22, 0.2),
                124px 132px rgba(22, 22, 22, 0.2),
                130px 132px rgba(22, 22, 22, 0.2),
                136px 132px rgba(22, 22, 22, 0.2),
                100px 138px rgba(22, 22, 22, 0.2),
                106px 138px rgba(22, 22, 22, 0.2),
                112px 138px rgba(22, 22, 22, 0.2),
                118px 138px rgba(22, 22, 22, 0.2),
                124px 138px rgba(22, 22, 22, 0.2),
                130px 138px rgba(22, 22, 22, 0.2),
                136px 138px rgba(22, 22, 22, 0.2),
                142px 138px rgba(22, 22, 22, 0.2),
                148px 138px rgba(22, 22, 22, 0.2),
                106px 144px rgba(22, 22, 22, 0.2),
                112px 144px rgba(22, 22, 22, 0.2),
                118px 144px rgba(22, 22, 22, 0.2),
                124px 144px rgba(22, 22, 22, 0.2),
                130px 144px rgba(22, 22, 22, 0.2),
                136px 144px rgba(22, 22, 22, 0.2),
                142px 144px rgba(22, 22, 22, 0.2),
                112px 150px rgba(22, 22, 22, 0.2),
                118px 150px rgba(22, 22, 22, 0.2),
                124px 150px rgba(22, 22, 22, 0.2),
                130px 150px rgba(22, 22, 22, 0.2),
                136px 150px rgba(22, 22, 22, 0.2);
              transform-origin: 127px 183px;
              transform: rotate(0deg) translate(0px, 0px);
              animation: bbhead 1s ease-out 1s forwards,
                bbheadshake 1s 2s infinite;
            }
            &:after {
              height: 6px;
              width: 6px;
              content: "";
              display: block;
              background-color: transparent;
              box-shadow: 112px 132px #ffffff, 118px 132px #ffffff,
                124px 132px #ffffff, 130px 132px #ffffff, 136px 132px #ffffff,
                100px 138px #ffffff, 106px 138px #ffffff, 112px 138px #ffffff,
                118px 138px #ffffff, 124px 138px #ffffff, 130px 138px #ffffff,
                136px 138px #a8b5b5, 142px 138px #ffffff, 148px 138px #ffffff,
                88px 144px #e99b3c, 94px 144px #ffffff, 100px 144px #ffffff,
                106px 144px #ffffff, 112px 144px #ffffff, 118px 144px #ffffff,
                124px 144px #ffffff, 130px 144px #ffffff, 136px 144px #ffffff,
                142px 144px #ffffff, 148px 144px #ffffff, 154px 144px #ffffff,
                160px 144px #ffffff, 88px 150px #e99b3c, 94px 150px #d67117,
                100px 150px #ffffff, 106px 150px #ffffff, 112px 150px #ffffff,
                118px 150px #ffffff, 124px 150px #ffffff, 130px 150px #e99b3c,
                136px 150px #e99b3c, 142px 150px #e99b3c, 148px 150px #e99b3c,
                154px 150px #ffffff, 160px 150px #ffffff, 82px 156px #dcd5dc,
                88px 156px #d67117, 94px 156px #d67117, 100px 156px #ffffff,
                106px 156px #819393, 112px 156px #ffffff, 118px 156px #e99b3c,
                124px 156px #e99b3c, 130px 156px #e99b3c, 136px 156px #e99b3c,
                142px 156px #e99b3c, 148px 156px #e99b3c, 154px 156px #e99b3c,
                160px 156px #e99b3c, 166px 156px #ffffff, 82px 162px #e99b3c,
                88px 162px #d67117, 94px 162px #d67117, 100px 162px #ffffff,
                106px 162px #ffffff, 112px 162px #ffffff, 118px 162px #e99b3c,
                124px 162px #e99b3c, 130px 162px #ffffff, 136px 162px #e99b3c,
                142px 162px #e99b3c, 148px 162px #ffffff, 154px 162px #e99b3c,
                160px 162px #e99b3c, 166px 162px #ffffff, 76px 168px #a8b5b5,
                82px 168px #e99b3c, 88px 168px #d67117, 94px 168px #d67117,
                100px 168px #ffffff, 106px 168px #ffffff, 112px 168px #e99b3c,
                118px 168px #e99b3c, 124px 168px #ffffff, 130px 168px #a8b5b5,
                136px 168px #ffffff, 142px 168px #ffffff, 148px 168px #d5e0e0,
                154px 168px #ffffff, 160px 168px #e99b3c, 166px 168px #e99b3c,
                172px 168px #ffffff, 76px 174px #dcd5dc, 82px 174px #d67117,
                88px 174px #d67117, 94px 174px #dcd5dc, 100px 174px #ffffff,
                106px 174px #ffffff, 112px 174px #e99b3c, 118px 174px #e99b3c,
                124px 174px #e99b3c, 130px 174px #ffffff, 136px 174px #a8b5b5,
                142px 174px #d6e1e1, 148px 174px #ffffff, 154px 174px #e99b3c,
                160px 174px #e99b3c, 166px 174px #e99b3c, 172px 174px #ffffff,
                76px 180px #e99b3c, 82px 180px #d67117, 88px 180px #d67117,
                94px 180px #dcd5dc, 100px 180px #ffffff, 106px 180px #ffffff,
                112px 180px #e99b3c, 118px 180px #e99b3c, 124px 180px #e99b3c,
                130px 180px #ffffff, 136px 180px #a8b5b5, 142px 180px #d6e1e1,
                148px 180px #ffffff, 154px 180px #e99b3c, 160px 180px #e99b3c,
                166px 180px #e99b3c, 172px 180px #ffffff, 76px 186px #e99b3c,
                82px 186px #dcd5dc, 88px 186px #dcd5dc, 94px 186px #dcd5dc,
                100px 186px #819393, 106px 186px #ffffff, 112px 186px #e99b3c,
                118px 186px #e99b3c, 124px 186px #ffffff, 130px 186px #a8b5b5,
                136px 186px #ffffff, 142px 186px #ffffff, 148px 186px #d6e1e1,
                154px 186px #ffffff, 160px 186px #e99b3c, 166px 186px #e99b3c,
                172px 186px #ffffff, 76px 192px #ede8ea, 82px 192px #dcd5dc,
                88px 192px #dcd5dc, 94px 192px #dcd5dc, 100px 192px #dcd5dc,
                106px 192px #ffffff, 112px 192px #ffffff, 118px 192px #e99b3c,
                124px 192px #e99b3c, 130px 192px #ffffff, 136px 192px #e99b3c,
                142px 192px #e99b3c, 148px 192px #ffffff, 154px 192px #e99b3c,
                160px 192px #e99b3c, 166px 192px #ffffff, 172px 192px #ffffff,
                82px 198px #a8b5b5, 88px 198px #dcd5dc, 94px 198px #dcd5dc,
                100px 198px #dcd5dc, 106px 198px #ffffff, 112px 198px #ffffff,
                118px 198px #e99b3c, 124px 198px #e99b3c, 130px 198px #e99b3c,
                136px 198px #e99b3c, 142px 198px #e99b3c, 148px 198px #e99b3c,
                154px 198px #e99b3c, 160px 198px #e99b3c, 166px 198px #ffffff,
                82px 204px #ede8ea, 88px 204px #dcd5dc, 94px 204px #dcd5dc,
                100px 204px #dcd5dc, 106px 204px #dcd5dc, 112px 204px #ffffff,
                118px 204px #ffffff, 124px 204px #ffffff, 130px 204px #e99b3c,
                136px 204px #e99b3c, 142px 204px #e99b3c, 148px 204px #e99b3c,
                154px 204px #ffffff, 160px 204px #ffffff, 166px 204px #ffffff,
                88px 210px #e99b3c, 94px 210px #d67117, 100px 210px #d67117,
                106px 210px #dcd5dc, 112px 210px #dcd5dc, 118px 210px #819393,
                124px 210px #ffffff, 130px 210px #ffffff, 136px 210px #ffffff,
                142px 210px #ffffff, 148px 210px #ffffff, 154px 210px #ffffff,
                160px 210px #819393, 88px 216px #e99b3c, 94px 216px #e99b3c,
                100px 216px #d67117, 106px 216px #d67117, 112px 216px #dcd5dc,
                118px 216px #dcd5dc, 124px 216px #dcd5dc, 130px 216px #ffffff,
                136px 216px #ffffff, 142px 216px #ffffff, 148px 216px #ffffff,
                154px 216px #ffffff, 160px 216px #ffffff, 100px 222px #d67117,
                106px 222px #d67117, 112px 222px #d67117, 118px 222px #dcd5dc,
                124px 222px #dcd5dc, 130px 222px #dcd5dc, 136px 222px #dcd5dc,
                142px 222px #b5a9b5, 148px 222px #b5a9b5, 112px 228px #d67117,
                118px 228px #d67117, 124px 228px #b5a9b5, 130px 228px #b5a9b5,
                136px 228px #b5a9b5;
              animation-name: bbroll;
              animation-delay: 1s;
              animation-duration: 0.4s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
              transform-origin: 127px 183px;
            }
          }

          @keyframes bbroll {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes bbhead {
            20% {
              transform: rotate(-30deg);
            }
            100% {
              transform: rotate(25deg);
            }
          }

          @keyframes bbheadshake {
            0% {
              transform: rotate(25deg) translate(0px, 0px);
            }
            50% {
              transform: rotate(20deg) translate(2px, 2px);
            }
            100% {
              transform: rotate(25deg) translate(0px, 0px);
            }
          }

          @keyframes quote {
            0% {
              color: transparent;
            }
            100% {
              color: #74bad0;
            }
          }
        `}
      </style>
    </>
  );
}
