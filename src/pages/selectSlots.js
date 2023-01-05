import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SlotSeats from "../seats";
import "../styles.css";

const SelectSlots = ({ back, setData, data }) => {
  const [selected, setSelected] = useState(null);
  const [idsOfFilled, setIdsOfFilled] = useState([]);

  useEffect(() => {
    const getdata = localStorage.getItem("details");
    const resultData = JSON.parse(getdata);
    setIdsOfFilled(resultData);
  }, [idsOfFilled]);

  const navigate = useNavigate();
  const handleSelectSlot = (id) => {
    setSelected(id);
    setData((prev) => ({
      ...prev,
      slotId: id
    }));
  };
  const handleSubmit = () => {
    localStorage.setItem("details", JSON.stringify({ ...data }));
    setTimeout(() => {
      alert("successfully registered");
      navigate("/list");
    }, 1500);
  };
  return (
    <>
      <div className=" mt-4 mb-4 w-75">
        <div className="slots ">
          {SlotSeats.PREMUIM.seats.map((id) => (
            <button
              onClick={() => handleSelectSlot(id)}
              disabled={idsOfFilled.slotId === id}
              className={`slot ${selected === id ? "selected" : ""}    ${
                idsOfFilled.slotId === id ? "filled" : ""
              }`}
            >
              {id}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={back} type="submit" className="btn btn-primary">
            Back
          </button>
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectSlots;
