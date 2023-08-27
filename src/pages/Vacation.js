import VacationRentals from '@/components/VacationRentals'
import Drawer from '@/components/drawer/Drawer'
import React from 'react'

const Vacation = () => {
  return (
    <div>
        <Drawer main={<VacationRentals />} />
    </div>
  )
}

export default Vacation