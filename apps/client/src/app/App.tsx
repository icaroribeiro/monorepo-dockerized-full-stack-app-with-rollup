import { getDisplay } from './config/config'

function App() {
  const display = getDisplay()
  console.log(`Display: ${display}`)
  return (
    <>
      <div>
        <h1>ABC{display}kkk222</h1>
      </div>
    </>
  )
}

export default App
