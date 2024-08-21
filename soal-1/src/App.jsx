import { useEffect } from "react";
import { useState } from "react";
import fibonacciTable from "./utils/fibonacci";



function App() {

  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [result, setResult] = useState([]);

  
  
  return (
    <>
      <div className="mt-6 px-4">
        <div className="flex justify-between items-center w-72 ">
          <label htmlFor="row" className="font-bold mr-2">
            Row
          </label>
          <input
            id="row"
            onChange={(e) => setRows(Number(e.target.value))}
            type="text"
            placeholder="Row"
            className="input input-bordered w-52 max-w-xs"
            value={rows}
          />
        </div>
        <div className="mt-4 flex justify-between items-center w-72">
          <label htmlFor="row" className="font-bold mr-2">
            Columns
          </label>
          <input
            onChange={(e) => setCols(Number(e.target.value))}
            type="text"
            placeholder="Columns"
            className="input input-bordered w-52 max-w-xs"
            value={cols}
          />
        </div>
        <div className="flex justify-center w-72">
          <button
            className="mt-4 btn btn-success"
            onClick={() => setResult(fibonacciTable(rows, cols))}
          >
            Submit
          </button>
        </div>

        {/** table here */}
        <table className="table w-72 mt-4 border">
          <tbody>
            {result.map((val) => {
              //val is an array
              return (
                <tr>
                  {val.map((number) => (
                    <td className="border">{number}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App
