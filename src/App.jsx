import "./App.css";
import 'material-icons/iconfont/material-icons.css';

function App() {
  return <div className="max-w-[700px]  mx-auto p-4 grid items-center h-[100vh] ">
    <div className="py-6 px-8 border border-gray-200 calculator-container rounded-lg">
      <div className="flex">
        <div>
          <label className="text-sm text-gray-700">Number</label>
           <input type="number"  className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block mr-2"/>
       </div>
        <div>
          <label className="text-sm text-gray-700">Base</label>
          <select value="32" className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block">
            <option value="32">32</option>
          </select>
        </div>
      </div>
      <div className="h-[40px] w-[40px] bg-blue-600 grid place-items-center rounded-full text-white border border-blue-600 cursor-pointer">
        <span className="material-icons">repeat</span>
      </div>
      <div className="flex">
        <div>
          <label className="text-sm text-gray-700">Number</label>
           <input type="number"  className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block mr-2"/>
       </div>
        <div>
          <label className="text-sm text-gray-700">Base</label>
          <select value="32" className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block">
            <option value="32">32</option>
          </select>
        </div>
      </div>
      
    </div>
  </div>;
}

export default App;
