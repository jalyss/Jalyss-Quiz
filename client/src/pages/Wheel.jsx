import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
function WheelWinner() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const data = [
    { option: 'كن مبادراٌ', style: { backgroundColor: '#64113F', textColor: 'white' } },
    { option: 'ابدأ والغاية في ذهنك', style: { backgroundColor: '#F29CA3' } },
    { option: 'ابدأ بالأهم قبل المهم', style: { backgroundColor: '#F29CA3' } },
    { option: 'تفكير مكسب', style: { backgroundColor: '#119FB8' } },
    { option: 'شحذ المنشار', style: { backgroundColor: '#F7cacd' } },
    { option: 'التآزر والتكاتف', style: { backgroundColor: '#3b70b3' } },
    { option: 'الفهم يؤدي إلى التفهُّم', style: { backgroundColor: '#E6C440' } },
    { option: 'حظ موفق المره القادمه', style: { backgroundColor: '#ed2024' } },
  ]
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
      <div>
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      outerBorderColor='white'
      radiusLineColor='white'
      onStopSpinning={() => {
        setMustSpin(false);
        alert(prizeNumber)
      }}
    />
    <div className='d-flex justify-content-center'>
    <button className="btn btn-warning" style={{backgroundColor:"#64113F",color:"white"}} onClick={handleSpinClick}>ابدأ</button>
    </div>
  </div>
  </div>
  )
}

export default WheelWinner
