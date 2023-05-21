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
      const response = await fetch(
        "https://toy-server-plum.vercel.app/all-toys"
      );
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
    <div className="mt-20 w-11/12 mx-auto">
      <Tabs>
        <TabList className="flex justify-between">
          <Tab className="tab ">Marvel</Tab>
          <Tab className="tab ">DC</Tab>
          <Tab className="tab">Transformers</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col md:flex-row gap-5 items-center md:justify-between mt-10 ">
            {filterToysBySubcategory("Marvel").map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col md:flex-row gap-5 items-center md:justify-between mt-10 ">
            {filterToysBySubcategory("DC").map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col md:flex-row gap-5 items-center md:justify-between mt-10 ">
            {filterToysBySubcategory("Transformers").map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCat;
