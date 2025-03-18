"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import List from "@/app/component/(payment)/list-payment";


export default function Pay() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const choosenSeats = data ? JSON.parse(decodeURIComponent(data)) : [];
  const [form, setForm] = useState<any[]>(choosenSeats);
    
  const totalPrice = form.reduce((acc, data)=> {
    console.log(data.type)
    return acc + (data.seat.length * (data.type == "vip" ? 250000 : 150000))
  },0)

  return (
    <div>
      <div className="bg-[#3E1E1A] w-full py-4 px-20 flex justify-between items-center">
        <h1 className="text-text text-4xl">A'Resto</h1>
      </div>
      <div className=" min-h-[100vh] w-full bg-background px-20 py-10">
        <div className="w-2/3 mx-auto pb-10">
          {form.map((data: any, index: number) => {
            return (
              <List data={data} key={index}/>
            );
          })}
        </div>
        <div className="w-full fixed bottom-0 bg-table-vip left-0 p-5">
          <p className="text-center text-2xl">
            Total: Rp {totalPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
