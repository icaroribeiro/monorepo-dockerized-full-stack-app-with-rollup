function App() {
  const display = process.env.DISPLAY2
  console.log(`Display: ${display}`)
  return (
    <>
      <div>
        <h1>ABC{process.env.DISPLAY2}kkk222</h1>
      </div>
    </>
  )
}

export default App
