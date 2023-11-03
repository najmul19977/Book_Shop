import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ReactTabOne from "../Component/ReactTabOne/ReactTabOne";
import ReactTabTwo from "../Component/ReactTabTwo/ReactTabTwo";
import ReactTabThree from "../Component/ReactTabThree/ReactTabThree";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [onsale, setOnsel] = useState([]);
  const [mostview, setMostview] = useState([]);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetch("featured.json")
      .then((req) => req.json())
      .then((data) => setFeatured(data));
  }, []);
  useEffect(() => {
    fetch("mostView.json")
      .then((req) => req.json())
      .then((data) => setMostview(data));
  }, []);
  useEffect(() => {
    fetch("onSale.json")
      .then((req) => req.json())
      .then((data) => setOnsel(data));
  }, []);
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-serif mt-10 mb-10 text-center text-primary"  data-aos="fade-down">
        Featured Books
      </h2>

      <div className="text-center mt-10 mb-10 mx-auto container">
        <TabContext value={value}>
          <Box  sx={{ borderBottom: 1, borderColor: "divider", }}>
            <TabList className="text-center font-serif text-2xl" onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Featured" value="1" />
              <Tab label="On Sale" value="2" />
              <Tab label="Most Viewed" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="md:grid grid-cols-5 gap-4">
              {featured.map((item) => (
                <ReactTabOne key={item.isbn13} item={item}></ReactTabOne>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="md:grid grid-cols-5">
              {
                onsale.map(sale=><ReactTabThree
                key={sale.isbn13}
                sale={sale}
                ></ReactTabThree>)
              }
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="md:grid grid-cols-5">
              {mostview.map((view) => (
                <ReactTabTwo key={view.isbn13} view={view}></ReactTabTwo>
              ))}
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Featured;
