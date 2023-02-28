import { Checkbox, Slider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const p1 = { name: "1", value: 10000, percent: 0.1, checked: false };
const p2 = { name: "2", value: 5000, percent: 0.2, checked: false };
const p3 = { name: "3", value: 4000, percent: 0.2, checked: false };
const p4 = { name: "4", value: 4000, percent: 0.2, checked: false };

const _products = [p1, p2, p3, p4];

export default function Index({}) {
  const [clients, setClients] = useState(5000);
  const [products, setProducts] = useState(_products);

  const getTotal = () => {
    return products.reduce((acc, p) => {
      const { value, percent, checked } = p;
      return parseInt(clients * percent) * value * (checked ? 1 : 0) + acc;
    }, 0);
  };

  const getItem = (prod, key) => {
    return (
      <div key={key} className=" flex justify-center">
        <Checkbox
          value={prod.checked}
          onChange={() =>
            setProducts(
              products.map((p) => {
                if (p.name == key + 1) {
                  p.checked = !p.checked;
                }
                return p;
              })
            )
          }
        />
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
