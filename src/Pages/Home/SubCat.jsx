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
    <div className="my-20 mx-auto max-w-4xl">
    <Tabs>
      <TabList className="flex justify-center mb-6 ">
        <Tab className="tab mr-3  text-xl btn btn-secondary ">Marvel</Tab>
        <Tab className="tab mr-3  text-xl btn btn-secondary ">DC</Tab>
        <Tab className="tab mr-3  text-xl btn btn-secondary ">Transformers</Tab>
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {filterToysBySubcategory("Marvel").slice(0,2).map((toy) => (
            <CategoryCard key={toy._id} toy={toy} />
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {filterToysBySubcategory("DC").slice(0,2).map((toy) => (
            <CategoryCard key={toy._id} toy={toy} />
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {filterToysBySubcategory("Transformers").slice(0,2).map((toy) => (
            <CategoryCard key={toy._id} toy={toy} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  </div>
  );
};

export default SubCat;
