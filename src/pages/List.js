import { useState, useEffect } from "react";
import car from "../utils/listCar.gif";
const List = () => {
  const listContent = [
    "Sr",
    "Owner",
    "Vehicle",
    "Slot Num",
    "Slot Time",
    "Date and Time",
    "Charge"
  ];

  const [price, setPrice] = useState("");
  const [data, setData] = useState({});
  console.log("data", data);
  const charge = () => {
    if (data.types === "car" && data.slotsTime === "3hr") {
      return setPrice("50rs");
    } else {
      setPrice("20rs");
    }
    if (data.types === "car" && data.slotsTime === "6hr") {
      return setPrice("80rs");
    } else {
      setPrice("30rs");
    }
    if (data.types === "car" && data.slotsTime === "12hr") {
      return setPrice("100rs");
    } else {
      setPrice("50rs");
    }
  };
  useEffect(() => {
    const getdata = localStorage.getItem("details");
    const resultData = JSON.parse(getdata);
    setData(resultData);
    charge();
  }, [data]);

  return (
    <>
      <div className="justify-content-center d-flex mt-4">
        <table className="table w-75 border">
          <tr className="border bg-dark text-light tw-bold text-center">
            {listContent.map((ele, index) => (
              <th key={index}>{ele}</th>
            ))}
          </tr>

          <tr className=" tw-bold text-center">
            <td>1</td>
            <td>{data.owner}</td>
            <td>{data.types}</td>
            <td>{data.slotId}</td>
            <td>{data.slotsTime}</td>
            <td>{data.dateAndTime}</td>
            <td>{price}</td>
          </tr>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <img src={car} alt="car" className="w-75" />
      </div>
    </>
  );
};

export default List;
