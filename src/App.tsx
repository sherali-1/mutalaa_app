import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>مبدأ القراءة</h1>
        <p className="text-lg text-justify text-red-800"> يف ملعتت يھو .تاونس عست اھرمع ةشئاع ھتخأو .تاونس عبس هرمع دیرف
            ةدج ھلو .تاونس ثلاثب ھنم رغصأ وھف دیرف وخأ امأو .نیتنس ذنم باتكلا
            امأ .اریثك اھبحی اضیأ وھو .ةدیدش ةبحم ادیرف بحت يھو .رمعلا يف ةریبك
            عیبی مویلا لوط ھیف ثكمی وھف .ریبك نزخم ھلو .ةراجتلاب لغتشی وھف دیرف دلاو
            لا رومأ ةرادإب لغتشت يھف ھتدلاو امأو .ةشمقلأا ھیف .ائیش دعب ملعتی مل وھو .تیب
            .ةباتكلاو ةءارقلا ملعتیل باتكلا ىلإ فیرخلا لصف يف ھلسری نأ هوبأ مزع دقو</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
