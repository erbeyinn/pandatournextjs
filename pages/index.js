import React from "react";
import Layout from "./Layout";
import Head from 'next/head'

const index = () => {
  return (
    <Layout>
      <div>
          <Head>
              <title>Ana Sayfa</title>
          </Head>
        <h1>Welcome to Next.js!</h1>
      </div>
    </Layout>
  );
};

export default index;
