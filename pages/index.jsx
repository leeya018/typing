import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const p1 = { value: 10000, percent: 0.1 };
const p2 = { value: 5000, percent: 0.2 };
const p3 = { value: 4000, percent: 0.2 };
const p4 = { value: 4000, percent: 0.2 };

const products = [p1, p2, p3, p4];

export default function Index({}) {
  const [clients, setClients] = useState(5000);

  const getTotal = () => {
    return (
      parseInt(clients * p1.percent) * p1.value +
      parseInt(clients * p2.percent) * p2.value +
      parseInt(clients * p3.percent) * p3.value +
      parseInt(clients * p4.percent) * p4.value
    );
  };

  const getItem = (prod, key) => {
    return (
      <div key={key} className=" flex justify-center">
        <span className="border-yellow-500 inline-block">
          <span className="font-bold text-lg">
            clients for product {key + 1} :
          </span>{" "}
          <span className="text-blue-500 font-bold text-2xl">
            {parseInt(clients * prod.percent)} clients
          </span>
        </span>
      </div>
    );
  };

  return (
    <div className=" border-black w-full h-full">
      <h1 className="font-bold text-5xl  items-center border-red-500  text-center">
        this is bussiness money show
      </h1>
      <div>amount of clienst : {clients}</div>
      <div className="flex justify-center">
        <Slider
          className="w-[50%]"
          size="small"
          // defaultValue={clients}
          aria-label="Small"
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={1000}
          value={clients}
          onChange={(e, newVal) => setClients(newVal)}
        />
      </div>
      {products.map((prod, key) => getItem(prod, key))}

      <div className="flex justify-center font-bold text-2xl">
        {" "}
        <span>total : {getTotal()} shekels</span>
      </div>
    </div>
  );
}
