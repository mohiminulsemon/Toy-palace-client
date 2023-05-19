import { useLoaderData } from "react-router-dom";
import ToysCard from "./ToysCard";


const AllToys = () => {

    const Toys = useLoaderData();
    // console.log(Toys);
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            {
                Toys.map(toy =>(
                    <ToysCard key={toy._id} toy = {toy}></ToysCard>
                ))
            }
        </div>
    );
};

export default AllToys;