"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
        className=" bg-slate-700
        flex
        flex-col
        justify-center
        items-center">
            <PuffLoader
                size={100}
                color={"#98F6E4"}
            />
        </div>
    );
};

export default Loader;