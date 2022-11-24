import "./App.css";
import 'material-icons/iconfont/material-icons.css';
import { useEffect, useState } from "react";
const lists = Array(32).fill(null).map((_, i) => i + 1).slice(1)
function App() {
  const [listOne, setListOne] = useState(lists)
  const [listTwo, setListTwo] = useState(lists)
  const [baseOne, setBaseOne] = useState(10)
  const [baseTwo, setBaseTwo] = useState(2)
  const [numberOne, setNumberOne] = useState(2)
  const [numberTwo, setNumberTwo] = useState(0)

  useEffect(() => {
    const fBase = parseInt(numberOne, baseOne)

    if (Number.isNaN(fBase)) {
      alert(`${numberOne} is not of base ${baseOne}`)
    } else {
      const b2N = Number(fBase).toString(baseTwo)
      setNumberTwo(b2N)
    }
  }, [baseOne, numberOne, baseTwo])

  const switchBases = () => {
    const tempt = baseOne;
    setBaseOne(baseTwo)
    setBaseTwo(tempt)
  }

  const updateBaseOne = (base) => {
    setListTwo(lists.filter(l => l !== base))
    setBaseOne(base)
  }

  const updateBaseTwo = (base) => {
    setListOne(lists.filter(l => l !== base))
    setBaseTwo(base)
  }

  return <div className="max-w-[700px]  mx-auto p-4 grid items-center h-[100vh] ">
    <div className="py-6 px-8 border border-gray-200 calculator-container rounded-lg">
      <div className="flex">
        <div>
          <label className="text-sm text-gray-700">Input</label>
           <input type="number" value={numberOne}  className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block mr-2" min="2" onChange={e => setNumberOne(e.target.value)}/>
       </div>
        <div>
          <label className="text-sm text-gray-700">Base</label>
          <select  className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block" value={baseOne} onChange={e => updateBaseOne(e.target.value)}>
            {listOne.map(o => <option value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="h-[40px] w-[40px] bg-blue-600 grid place-items-center rounded-full text-white border border-blue-600 cursor-pointer" onClick={switchBases}>
        <span className="material-icons">repeat</span>
      </div>
      <div className="flex">
        <div>
          <label className="text-sm text-gray-700">Output</label>
           <input type="number"  className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block mr-2" min="2" disabled value={numberTwo}/>
       </div>
        <div>
          <label className="text-sm text-gray-700">Base</label>
          <select  className="outline-none border border-gray-100 rounded-md px-4 py-2 inline-block" value={baseTwo} onChange={e => updateBaseTwo(e.target.value)}>
            {listTwo.map(o => <option value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      
    </div>
  </div>;
}

export default App;
