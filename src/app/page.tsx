'use client'

import { useEffect, useState } from "react";
import IconDollarComponent from "./Components/IconDollarComponent";
import IconPersonComponent from "./Components/IconPersonComponent";
import LogoComponent from "./Components/LogoComponent";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');
  const [billInput, setBillInput] = useState(0);
  const [peopleInput, setPeopleInput] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleReset = () => {
    setSelectedValue('');
    setBillInput(0);
    setPeopleInput(0);
    setTip(0);
    setTotal(0);
  };

  useEffect(() => {
    if (selectedValue != '' && billInput > 0 && peopleInput > 0) {
      const percentage = parseFloat(selectedValue.replace('%', '')) / 100;

      setTip((billInput * percentage) / peopleInput);
      setTotal((billInput + (billInput * percentage)) / peopleInput);
    }
  }, [selectedValue, billInput, peopleInput]);

  return (
    <main className="flex min-h-screen flex-col items-center pt-10 md:p-24 bg-lightGrayCyan">
      <div>
        <LogoComponent />
      </div>

      <div className="mt-10 md:mt-16 rounded-xl bg-white p-6 text-grayCyan flex justify-center flex-wrap gap-10 text-lg sm:text-sm">
        <div className="ps-0 md:ps-4 pt-3 w-80 md:max-w-fit">
          <p className="pb-1">Bill</p>
          <div className="bg-lightGray h-10 rounded flex justify-between items-center px-4 border-lightGray border-2 focus-within:border-strongCyan">
            <IconDollarComponent />
            <div className="flex-grow">
              <input
                name="bill"
                type="number"
                placeholder="0"
                className="w-full text-right outline-none bg-transparent no-spin"
                value={billInput}
                onChange={(e) => { setBillInput(parseFloat(e.target.value)) }}
              />
            </div>
          </div>

          <p className="pt-10 pb-3">Select Tip %</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xl sm:text-lg">
            <label
              className={`${selectedValue === '5%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-12 md:h-10 w-36 md:w-24 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
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
              className={`${selectedValue === '10%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-12 md:h-10 w-36 md:w-24 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
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
              className={`${selectedValue === '15%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-12 md:h-10 w-36 md:w-24 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
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
              className={`${selectedValue === '25%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-12 md:h-10 w-36 md:w-24 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
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
              className={`${selectedValue === '50%' ? 'bg-strongCyan' : 'bg-darkCyan'} rounded flex justify-center items-center h-12 md:h-10 w-36 md:w-24 text-white hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`}
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
              name="radio"
              type="number"
              className="bg-lightGray rounded text-right pe-3 h-12 md:h-10 w-36 md:w-24 text-darkGrayCyan no-spin border-transparent border-2 hover:border-strongCyan"
              placeholder="Custom"
              value={selectedValue}
              onChange={(e) => { e.target.value }}
            />
          </div>

          <div className="pt-10 pb-1 flex justify-between">
            <p>Number of People</p>
            <p className={`text-orange-600 ${selectedValue != '' && billInput > 0 ? 'block' : 'hidden'}`}>Cant be zero</p>
          </div>
          <div className={`bg-lightGray h-10 rounded flex justify-between items-center px-4 ${selectedValue != '' && billInput > 0 ? 'border-orange-600' : 'border-lightGray'} border-2 focus-within:border-strongCyan`}>
            <IconPersonComponent />
            <div className="flex-grow">
              <input
                name="people"
                type="number"
                placeholder="0"
                className="w-full text-right outline-none bg-transparent no-spin"
                value={peopleInput}
                onChange={(e) => { setPeopleInput(parseFloat(e.target.value)) }}
              />
            </div>
          </div>
        </div>

        <div className="bg-darkCyan pt-10 pb-6 px-7 sm:px-10 text-white rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center gap-16">
              <div>
                <p>Tip Amount</p>
                <p className="text-xs text-grayCyan">/ person</p>
              </div>
              <div>
                <p className="text-3xl text-strongCyan">$<span>{tip.toFixed(2)}</span></p>
              </div>
            </div>

            <div className="pt-10 flex justify-between items-center gap-16">
              <div>
                <p>Total</p>
                <p className="text-xs text-grayCyan">/ person</p>
              </div>
              <div>
                <p className="text-3xl text-strongCyan">$<span>{total.toFixed(2)}</span></p>
              </div>
            </div>
          </div>

          <button onClick={handleReset} className="mt-10 sm:pt-0 bg-strongCyan hover:bg-lightGrayCyan hover:text-darkCyan flex justify-center items-center h-12 sm:h-8 rounded">
            <p className="text-darkCyan">RESET</p>
          </button>
        </div>
      </div>
    </main>
  );
}
