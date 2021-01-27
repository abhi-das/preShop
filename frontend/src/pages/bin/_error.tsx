import React from "react";
import Link from "next/link";
// import { useSelector } from "react-redux";
import { NextPage } from "next";
// import { State } from "../store/reducers/productReducer";


const Error: NextPage = () => {
  // const app = useSelector<State, State["app"]>(state => state.app);
  return (
    <>
      <p>
        Error Page
        {/* This is an error page, it also has access to store: <code>{app}</code> */}
      </p>
      <nav>
        <Link href="/">
          <a>Navigate to index</a>
        </Link>
      </nav>
    </>
  );
};

export default Error;
