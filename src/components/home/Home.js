import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "./_redux/Action";

const Home = () => {
  const getdata = useSelector((state) => state.dataInfo.getdata);
  console.log("getdata", getdata);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  return <div>Home</div>;
};

export default Home;
