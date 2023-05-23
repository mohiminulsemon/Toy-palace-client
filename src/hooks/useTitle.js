import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Toy Palace | ${title}`;
    }, [title])
};

export default useTitle;