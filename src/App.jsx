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

  const [monthError, setMonthError] = useState('')
  const [yearError, setYearError] = useState('')
  const [cvcError, setCvcError] = useState('')
  const [complete, setComplete] = useState(false)
  
  const handleSubmit = (event) => {
      event.preventDefault();
      let error = false
      const emptyError = "Can't be blank"
      const regex = /^\s*$/;

      if(name == '' || regex.test(name)) {
        setnameError(emptyError)
        error = true
      }

      if(month == '') {
        setMonthError(emptyError)
        error = true
      }

      if(year == '') {
        setYearError(emptyError)
        error = true
      }

      if(cardNumber == '') {
        setCardNumberError(emptyError)
        error = true
      }

      if(cardNumber.length < 19) {
        setCardNumberError("Invalid Card Number")
        error = true
      }

      if(cvc == '') {
        setCvcError(emptyError)
        error = true
      }

      if(error == false) {
        setComplete(true)
      }
  } 

  const handleNameInputChange = (event) => {
    const input = event.target.value.replace(/[^A-Za-z\s]/g, '')
    setName(input);
  }

  const handleCardInputChange = (event) => {
    // This will limit the input to 16 characters
    const input = event.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-numeric characters and limit to 16 characters
    const formattedInput = input.replace(/(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/, '$1 $2 $3 $4').trim(); // Format the input
    setCardNumber(formattedInput);
  } 

  const handleMonthInput = (event) => {
    const input = event.target.value.replace(/\D/g, '').substring(0, 2); // Remove non-numeric characters and limit to 2 digit numbers
    setMonth(input)
  }

  const handleYearInput = (event) => {
    const input = event.target.value.replace(/\D/g, '').substring(0, 2); // Remove non-numeric characters and limit to 2 digit numbers
    setYear(input)
  }

  const handleCvcInput = (event) => {
    const input = event.target.value.replace(/\D/g, '').substring(0, 3); // Remove non-numeric characters and limit to 2 digit numbers
    setCvc(input)
  }

  const twoDigitFormat = (input, type) => {
   if(type == "month") {
    if (input > 12) {
      setMonthError('Invalid Month')
    } else {
      if(input.length == 1) {
        setMonth(input.padStart(2, '0'))
      } else {
        setMonth(input)
      }
    }
   } else if(type == "year"){
      if (input > 31) {
        setYearError('Invalid Month')
      } else {
        if(input.length === 1) {
          setYear(input.padStart(2, '0'))
        } else {
          setYear(input)
        }
      }
   } 
  }

  const threeDigitFormat = (input) => {
    if(input.length === 1) {
      setCvc(input.padStart(3, '00'))
    } else if(input.length === 2) {
      setCvc(input.padStart(3,"0"))
    } else {
      setCvc(input)
    }
  }



  return (
    <main className='h-[100vh] font-Space-Grotesk max-w-[1440px]'>
      <section className='h-full flex flex-col lg:flex-row'>
        <article className="
          flex 
          justify-center 
          items-center 
          text-White 
          py-10 
          px-5 
          bg-[url('./src/assets/images/bg-main-mobile.png')] 
          bg-cover bg-no-repeat
          lg:w-[30%]
          lg:items-center
          lg:pl-[5%]
          xl:pl-[10%]
        ">
          <div className='
            flex 
            flex-col 
            items-end 
            relative 
            sm:w-[550px] 
            md:w-[650px]
            lg:flex-col-reverse
            lg:pl-[3rem]
          '>
            <div className='
              w-[70%] 
              max-w-[350px] 
              relative 
              flex 
              justify-end 
              items-center
              lg:w-[380px]
              lg:absolute
              lg:top-[1rem]
              lg:left-[3rem]
            '>
              <img src="./src/assets/images/bg-card-back.png" alt="" />
              <p className='absolute right-[10%] text-[12px] tracking-[.2rem] md:text-xl md:right-[12%]'>{cvc}</p>
            </div>
            <div 
              className="
                w-[75%] 
                max-w-[350px] 
                bg-[url('./src/assets/images/bg-card-front.png')] 
                bg-no-repeat 
                bg-cover 
                p-5 
                absolute 
                left-[5%] 
                rounded-xl 
                mt-[25%] 
                sm:px-[2rem]
                md:left-[10%] 
                md:mt-[20%]
                lg:left-[1rem]
                lg:w-[380px]
              ">
              <div className='mb-7'>
                <img src="./src/assets/images/card-logo.svg" alt="" className='w-[3rem]'/>
              </div>
              <h1 className='mb-3 text-sm md:text-xl md:mb-10'>{cardNumber}</h1>
              <div className='flex justify-between'>
                <p className='text-sm uppercase md:text-xl'>{name}</p>
                <p className='text-sm md:text-xl'>{month+"/"+year}</p>
              </div>
            </div>
          </div>
        </article>
        <article className={`flex justify-center items-center flex-grow pt-[5rem] py-5 px-5 md:pt-[7rem] ${complete? ' hidden': ' block'}`}>
          <form onSubmit={handleSubmit} className='w-full max-w-[420px]'>
            <div className={`mb-3`}>
              <label htmlFor="name" className='text-sm'>Cardholder Name</label>
              <input 
                type="text" 
                name="name"
                id="name"
                value={name}
                onChange={handleNameInputChange}
                placeholder='e.g. Jane Appleseed' 
                className='
                  w-full 
                  py-1 
                  px-2 
                  rounded-md 
                  border-[1px] 
                  border-Dark-grayish-violet
                  outline-none
                '
                required
              />
              <p className='text-Red'>{nameError}</p>
            </div>
            <div className='mb-3'>
              <label htmlFor="card_number" className='text-sm'>Card Number</label>
              <input 
                type="text" 
                name="card_number"
                id="card_number"
                placeholder='e.g. 1234 5678 9123 0000' 
                className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                maxLength="19"
                value={cardNumber}
                onChange={handleCardInputChange}
                required
              />
              <p className='text-Red'>{cardNumberError}</p>
            </div>
            <div className='w-full mb-5'>     
              <div className='flex gap-2'>
                <div className='w-1/2'>
                  <p className='text-sm'>Exp. Date (MM/YY)</p>
                  <div className='flex gap-2'>
                    <div className='w-1/2'>
                      <input 
                        type="text" 
                        name='month'
                        id='month'
                        placeholder='MM' 
                        className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                        maxLength="2"
                        value={month}
                        onChange={handleMonthInput}
                        onBlur={()=>{twoDigitFormat(month, "month")}}
                        required
                      />
                      <p>{monthError}</p>
                    </div>
                    <div className='w-1/2'>
                      <input 
                        type="text"
                        name='year' 
                        id='year'
                        placeholder='YY' 
                        className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                        maxLength="2"
                        onChange={handleYearInput}
                        onBlur={()=>{twoDigitFormat(year, "year")}}
                        value={year}
                        required
                      />
                      <p>{yearError}</p>
                    </div>
                  </div>
                </div> 
                <div className='w-1/2'>
                  <p className='text-sm'>CVC</p>
                  <input 
                    type="text" 
                    name='cvc'
                    id='cvc'
                    placeholder='e.g. 123' 
                    className='w-full py-1 px-2 rounded-md border-[1px] border-Dark-grayish-violet'
                    maxLength="3"
                    onChange={handleCvcInput}
                    onBlur={()=>{threeDigitFormat(cvc)}}
                    value={cvc}
                    required
                  />
                  <p>{cvcError}</p>
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              className='text-ceter bg-Very-dark-violet text-White w-full rounded-md py-2'
            >Confirm</button>
          </form>
        </article>
        <article className={`flex-grow flex-col justify-center items-center ${complete? 'flex': "hidden"}`}>
          <div>
            <img src="./src/assets/images/icon-complete.svg" alt="" />
          </div>
          <div>
            <p>THANK YOU!</p>
            <p>We've added your card details</p>
          </div>
          <div>
            <button>Continue</button>
          </div>
        </article>
      </section>
    </main> 
  )
}

export default App
