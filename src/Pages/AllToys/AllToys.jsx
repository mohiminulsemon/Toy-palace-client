import { useLoaderData } from "react-router-dom";
import ToysCard from "./ToysCard";


const AllToys = () => {

    const Toys = useLoaderData();
    // console.log(Toys);
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto my-6">
            {
                Toys?.slice(0,20).map(toy =>(
                    <ToysCard key={toy._id} toy = {toy}></ToysCard>
                ))
            }
        </div>
    );
};

export default AllToys;