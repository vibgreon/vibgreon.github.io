import Head from "next/head";

export default function Wrapper({ children }) {
  return (
    <>
      <Head>
        <title>vibgreon</title>
        <meta name="description" content="personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?" />
      </Head>
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
        {children}
      </div>
    </>
  );
}
