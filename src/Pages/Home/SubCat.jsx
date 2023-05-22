import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CategoryCard from "./CategoryCard";

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
    <div className="mt-20 w-3/5 mx-auto">
      <Tabs>
        <TabList className="flex justify-between">
          <Tab className="tab ">Marvel</Tab>
          <Tab className="tab ">DC</Tab>
          <Tab className="tab">Transformers</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col md:flex-row gap-5 items-center  mt-10 ">
            {filterToysBySubcategory("Marvel").map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col md:flex-row gap-5 items-center  mt-10 ">
            {filterToysBySubcategory("DC").map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col md:flex-row gap-5 items-center  mt-10 ">
            {filterToysBySubcategory("Transformers").map((toy) => (
              <CategoryCard key={toy._id} toy={toy}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCat;
