import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWheelProp } from '../store/wheelProp';
function WheelWinner() {
  const wheelPropositions = useSelector(state=>state.wheelProp.wheelprop)
  console.log(wheelPropositions,"those are wheel propostitions");
  const dispatch = useDispatch()
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


useEffect(()=>{
  dispatch(fetchWheelProp())
},[])

  const data = [
    { option: wheelPropositions[0]?.label , style: { backgroundColor: '#64113F', textColor: 'white' } },
    { option: wheelPropositions[1]?.label, style: { backgroundColor: 'white' } },
    { option: wheelPropositions[2]?.label, style: { backgroundColor: '#64113F', textColor: 'white' } },
    { option: wheelPropositions[3]?.label, style: { backgroundColor: 'white' } },
    { option: wheelPropositions[4]?.label, style: { backgroundColor: '#64113F', textColor: 'white' } },
    { option: wheelPropositions[5]?.label, style: { backgroundColor: 'white' } },
    { option: wheelPropositions[6]?.label, style: { backgroundColor: '#64113F', textColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style: { backgroundColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style:  { backgroundColor: '#64113F', textColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style: { backgroundColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style:  { backgroundColor: '#64113F', textColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style: { backgroundColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style:  { backgroundColor: '#64113F', textColor: 'white' } },
    { option: 'حظ موفق المره القادمه', style: { backgroundColor: 'white' } },
  ]
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div>
    <Wheel
    
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      fontSize={17}
      fontWeight={"bold"}
      radiusLineWidth={2}
      outerBorderColor="white"
      radiusLineColor="white"
      onStopSpinning={() => {
        setMustSpin(false);
        alert(wheelPropositions[prizeNumber]?.slogan || 'حظ موفق المره القادمه')
      }}
    />
    <div className='d-flex justify-content-center'>
    <button className="btn btn-light mt-5 w-50 fs-5" style={{backgroundColor:"#64113F",color:"white"}} onClick={handleSpinClick}>ابدأ</button>
    </div>
  </div>
  </div>
  )
}

export default WheelWinner
