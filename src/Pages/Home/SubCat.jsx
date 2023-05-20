import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ToysCard from "../AllToys/ToysCard";

const SubCat = () => {
  const [toys, setToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch("http://localhost:5000/all-toys");
      if (response.ok) {
        const data = await response.json();
        setToys(data);
      } else {
        throw new Error("Failed to fetch toys");
      }
    } catch (error) {
      console.error("Failed to fetch toys:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterToysBySubcategory = (subcategory) => {
    return toys.filter((toy) => toy.subCategory === subcategory);
  };
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>DC</Tab>
          <Tab>Transformers</Tab>
        </TabList>

        <TabPanel>
          <h2>Marvel Toys</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            filterToysBySubcategory("marvel")
              .slice(0, 2)
              .map((toy) => (
                // console.log(toy.name)
                <ToysCard key={toy._id} toy={toy}></ToysCard>
              ))
          )}
        </TabPanel>

        <TabPanel>
          <h2>DC Toys</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            filterToysBySubcategory("dc").map((toy) => (
                <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))
          )}
        </TabPanel>

        <TabPanel>
          <h2>Transformers Toys</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            filterToysBySubcategory("transformers").map((toy) => (
                <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCat;
