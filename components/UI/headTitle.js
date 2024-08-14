import Head from "next/head";
import React from "react";

function HeadTitle(props) {
  return (
    <div>
      <Head>
        <title>
            {props.title}
        </title>
      </Head>
    </div>
  );
}

export default HeadTitle;
