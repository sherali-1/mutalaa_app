import Sarf1Table from "./pages/Sarf1Table";

function App() {
  return (
    <main >
      <div>
        <h2 className="text-4xl">
          Fellarni tuslash
        </h2>
      </div>
      <Sarf1Table/>
    </main>
  )
}

export default App
function reverseString(str:string) {
  return [...str].reverse().join('');
}