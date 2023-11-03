import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import History from "../History/History";
import Science from "../Science/Science";
import Romance from "../Romance/Romance";

const NewSection = () => {
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

  const centeredTabListStyle = {
    display: "flex",
    justifyContent: "center",
    
  };

  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl font-serif text-primary mt-10 mb-10"  data-aos="fade-down">
        New Releases
      </h1>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} style={centeredTabListStyle}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="History" value="1" />
              <Tab label="Science & Math" value="2" />
              <Tab label="Romance" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="md:grid grid-cols-5">
                {
                    onsale.map(sale =><History
                        key={sale.isbn13}
                        sale={sale}
                    ></History>)
                }
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="md:grid grid-cols-5">
                {
                   featured.map(item =><Science
                    key={item.isbn13} 
                    item={item}
                   ></Science>) 
                }
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="md:grid grid-cols-5">
                {
                   mostview.map(view =><Romance
                   key={view.isbn13}
                   view ={view}
                   ></Romance>) 
                }
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default NewSection;
