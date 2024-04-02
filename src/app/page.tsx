'use client'

import { useState } from "react";
import IconDollarComponent from "./Components/IconDollarComponent";
import IconPersonComponent from "./Components/IconPersonComponent";
import LogoComponent from "./Components/LogoComponent";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-lightGrayCyan">
      <div>
        <LogoComponent />
      </div>

      <div className="mt-16 rounded-xl bg-white p-6 text-grayCyan flex gap-10 text-sm">
        <div className="ps-4 pt-3">
          <p className="pb-1">Bill</p>
          <div className="bg-lightGray h-10 rounded flex justify-between items-center px-4">
            <IconDollarComponent />
            <div className="flex-grow">
              <input
                type="text"
                placeholder="0"
                className="w-full text-right outline-none bg-transparent"
              />
            </div>
          </div>

          <p className="pt-10 pb-3">Select Tip %</p>
          <div className="grid grid-cols-3 gap-3 text-lg">
            <label
              className={`${selectedValue === '5%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-10 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
              style={{ width: 90 }}
            >
              <input
                type="radio"
                name="percentage"
                value="5%"
                className="appearance-none"
                onChange={() => handleRadioChange('5%')} checked={selectedValue === '5%'}
              />
              <span>5%</span>
            </label>
            <label
              className={`${selectedValue === '10%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-10 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
              style={{ width: 90 }}
            >
              <input
                type="radio"
                name="percentage"
                value="10%"
                className="appearance-none"
                onChange={() => handleRadioChange('10%')} checked={selectedValue === '10%'}
              />
              <span>10%</span>
            </label>
            <label
              className={`${selectedValue === '15%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-10 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
              style={{ width: 90 }}
            >
              <input
                type="radio"
                name="percentage"
                value="15%"
                className="appearance-none"
                onChange={() => handleRadioChange('15%')} checked={selectedValue === '15%'}
              />
              <span>15%</span>
            </label>
            <label
              className={`${selectedValue === '25%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-10 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
              style={{ width: 90 }}
            >
              <input
                type="radio"
                name="percentage"
                value="25%"
                className="appearance-none"
                onChange={() => handleRadioChange('25%')} checked={selectedValue === '25%'}
              />
              <span>25%</span>
            </label>
            <label
              className={`${selectedValue === '50%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-10 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
              style={{ width: 90 }}
            >
              <input
                type="radio"
                name="percentage"
                value="50%"
                className="appearance-none"
                onChange={() => handleRadioChange('50%')} checked={selectedValue === '50%'}
              />
              <span>50%</span>
            </label>
            <input
              type="text"
              className="bg-lightGray rounded text-center h-10 text-darkGrayCyan"
              placeholder="Custom"
              style={{ width: 90 }}
            />
          </div>

          <p className="pt-10 pb-1">Number of People</p>
          <div className="bg-lightGray h-10 rounded flex justify-between items-center px-4">
            <IconPersonComponent />
            <div className="flex-grow">
              <input
                type="text"
                placeholder="0"
                className="w-full text-right outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-darkCyan pt-10 pb-6 px-10 text-white rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center gap-16">
              <div>
                <p>Tip Amount</p>
                <p className="text-xs text-grayCyan">/ person</p>
              </div>
              <div>
                <p className="text-3xl text-strongCyan">$0.00</p>
              </div>
            </div>

            <div className="pt-10 flex justify-between items-center gap-16">
              <div>
                <p>Total</p>
                <p className="text-xs text-grayCyan">/ person</p>
              </div>
              <div>
                <p className="text-3xl text-strongCyan">$0.00</p>
              </div>
            </div>
          </div>

          <button className="bg-strongCyan hover:bg-lightGrayCyan hover:text-darkCyan flex justify-center items-center h-8 rounded">
            <p className="text-darkCyan">RESET</p>
          </button>
        </div>
      </div>
    </main>
  );
}
