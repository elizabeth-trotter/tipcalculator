import IconDollarComponent from "./Components/IconDollarComponent";
import IconPersonComponent from "./Components/IconPersonComponent";
import LogoComponent from "./Components/LogoComponent";

export default function Home() {
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
              <input type="text" placeholder="0" className="w-full text-right outline-none bg-transparent" />
            </div>
          </div>

          <p className="pt-10 pb-3">Select Tip %</p>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-darkCyan rounded flex justify-center items-center h-10 w-20 text-white">
              <p>5%</p>
            </button>
            <button className="bg-darkCyan rounded flex justify-center items-center h-10 w-20 text-white">
              <p>10%</p>
            </button>
            <button className="bg-darkCyan rounded flex justify-center items-center h-10 w-20 text-white">
              <p>15%</p>
            </button>
            <button className="bg-darkCyan rounded flex justify-center items-center h-10 w-20 text-white">
              <p>25%</p>
            </button>
            <button className="bg-darkCyan rounded flex justify-center items-center h-10 w-20 text-white">
              <p>50%</p>
            </button>
            <button className="bg-lightGray rounded flex justify-center items-center h-10 w-20 text-darkGrayCyan">
              <p>Custom</p>
            </button>
          </div>

          <p className="pt-10 pb-1">Number of People</p>
          <div className="bg-lightGray h-10 rounded flex justify-between items-center px-4">
            <IconPersonComponent />
            <div className="flex-grow">
              <input type="text" placeholder="0" className="w-full text-right outline-none bg-transparent" />
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

          <button className="bg-strongCyan flex justify-center items-center h-8 rounded">
            <p className="text-darkCyan">RESET</p>
          </button>
        </div>
      </div>
    </main>
  );
}
