import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Website Under Construction</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 main-title">
            <h1>Website</h1>
            <h2>Under Construction</h2>
          </div>
        </div>
      </div>
    </>
  );
}
