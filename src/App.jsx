import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section className="py-10 px-2 bg-[url('./src/assets/images/bg-main-mobile.png')] flex flex-col items-end relative">
        <div className='w-[70%]'>
          <img src="./src/assets/images/bg-card-back.png" alt="" />
        </div>
        <div className="w-[70%] bg-[url('./src/assets/images/bg-card-front.png')] bg-no-repeat bg-cover p-5 absolute bottom-[-6rem] left-3 rounded-xl">
          <div className='mb-10'>
            <img src="./src/assets/images/card-logo.svg" alt="" className='w-[3rem]'/>
          </div>
          <h1>0000 0000 0000 0000</h1>
          <div>
            <p>Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
      </section>
      <section>
        <form action="">
          <div>
            <label htmlFor="">Cardholder Name</label>
            <input type="text" placeholder='e.g. Jane Appleseed'/>
            <p></p>
          </div>
          <div>
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder='e.g. 1234 5678 9123 0000'/>
            <p></p>
          </div>
          <div>
            <p>Exp. Date (MM/YY)</p>
            <div>
              <input type="text" placeholder='MM'/>
              <p></p>
            </div>
            <div>
              <input type="text" placeholder='YY'/>
              <p></p>
            </div>
            <div>
              <label htmlFor="">CVC</label>
              <input type="text" placeholder='e.g. 123'/>
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </section>
    </main>
  
  // 
  // 
  // 

  // 000


  // Confirm

  // <!-- Completed state start -->

  // Thank you!
  // We've added your card details
  // Continue

     

  )
}

export default App
