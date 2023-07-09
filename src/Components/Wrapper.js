export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <style jsx>
        {`
          .wrapper {
            max-width: 800px;
            margin: auto;
            padding: 50px 50px;
            display: flex;
            flex-direction: row;
            gap: 50px;
          }

          @media screen and (max-width: 50rem) {
            .wrapper {
              flex-direction: column;
              gap: 25px;
            }
          }
        `}
      </style>
      { children }
    </div>
  );
}
