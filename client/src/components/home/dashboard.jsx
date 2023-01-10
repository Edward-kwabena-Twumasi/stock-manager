
const Dashboard=()=>{
    return (
        <div className="dash grid grid-cols-3 gap-3 p-10 justify-center  w-full h-full">
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Summary</h1>
                <div>

                </div>
            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Top 5</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Flow</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Running out</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Total sales</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Total revenue</h1>

            </div>
        </div>
    )
}

export default Dashboard