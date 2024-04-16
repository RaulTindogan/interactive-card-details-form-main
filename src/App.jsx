import React from 'react'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [nameError, setnameError] = useState('')

  const [cardNumber, setCardNumber] = useState('')
  const [cardNumberError, setCardNumberError] = useState('')

  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  
  const handleSubmit = (event) => {
      event.preventDefault();
      // Regular expression to match alphabetic characters and some special characters
      const nameRegex = /^[a-zA-ZÀ-ÿ' -]+$/;
    
      if(name=='') {
        setnameError("Can't be blank")
      }else if (!nameRegex.test(name)) {
        setnameError('Please enter a valid name without numbers');
        return;
      } 
  }

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  }

  const handleCardInputChange = (event) => {
    // This will limit the input to 16 characters
    const input = event.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-numeric characters and limit to 16 characters
    const formattedInput = input.replace(/(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/, '$1 $2 $3 $4').trim(); // Format the input
    setCardNumber(formattedInput);
  } 

  const handleMonthInput = (event) => {
    const input = event.target.value
    const formattedValue = twoDigitFormat(input)
    setMonth(formattedValue) 
  }

  const twoDigitFormat = (input) => {
    let numberInput = Number(input)
     if (!isNaN(numberInput) && numberInput < 10) {
      // If input is a single digit, prepend '0'
      return "0" + input;
    } 
    return input
  }

  return (
    <main>
      <section className="text-White py-10 px-5 bg-[url('./src/assets/images/bg-main-mobile.png')] bg-cover bg-no-repeat flex flex-col items-end relative">
        <div className='w-[70%] max-w-[400px] relative flex justify-end items-center'>
          <img src="./src/assets/images/bg-card-back.png" alt="" />
          <p className='absolute right-6 text-[12px] tracking-[.2rem]'>000</p>
        </div>
        <div className="w-[70%] max-w-[400px] bg-[url('./src/assets/images/bg-card-front.png')] bg-no-repeat bg-cover p-5 absolute left-5 rounded-xl mt-[20%]">
          <div className='mb-8'>
            <img src="./src/assets/images/card-logo.svg" alt="" className='w-[3rem]'/>
          </div>
          <h1 className='text-[1.2rem] mb-3'>0000 0000 0000 0000</h1>
          <div className='flex justify-between'>
            <p>Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
      </section>
      <section className='pt-[7rem] px-5'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className={`mb-3`}>
            <label htmlFor="name">Cardholder Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
              value={name}
              onChange={handleNameInputChange}
              placeholder='e.g. Jane Appleseed' 
              className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'/>
            <p className='text-Red'>{nameError}</p>
          </div>
          <div className='mb-3'>
            <label htmlFor="card_number">Card Number</label>
            <input 
              type="text" 
              name="card_number"
              id="card_number"
              placeholder='e.g. 1234 5678 9123 0000' 
              className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
              maxLength="19"
              value={cardNumber}
              onChange={handleCardInputChange}
            />
            <p></p>
          </div>
          <div className='w-full mb-5'>     
            <div className='flex gap-2'>
              <div className='w-1/2'>
                <p>Exp. Date (MM/YY)</p>
                <div className='flex gap-2'>
                  <div className='w-1/2'>
                    <input 
                      type="text" 
                      name='month'
                      id='month'
                      placeholder='MM' 
                      className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                      // maxLength="2"
                      value={month}
                      onChange={handleMonthInput}
                      required
                    />
                    <p></p>
                  </div>
                  <div className='w-1/2'>
                    <input 
                      type="text"
                      name='year' 
                      id='year'
                      placeholder='YY' 
                      className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                      maxLength="2"
                      // onChange={handleYearInput}
                      value={year}
                      required
                    />
                    <p></p>
                  </div>
                </div>
              </div> 
              <div className='w-1/2'>
                <label htmlFor="cvc">CVC</label>
                <input 
                  type="text" 
                  name='cvc'
                  id='cvc'
                  placeholder='e.g. 123' 
                  className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                  maxLength="3"
                  // onChange={handleCvcInput}
                  value={cvc}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className='text-ceter bg-Very-dark-violet text-White w-full rounded-md py-2'>Confirm</button>
        </form>
      </section>
    </main>
  

  // <!-- Completed state start -->

  // Thank you!
  // We've added your card details
  // Continue

     

  )
}

export default App
