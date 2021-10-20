import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

import { userData, months } from '../../dummyData'
import axios from 'axios'

import './home.css'

export default function Home() {
  const [userStats, setUserStats] = useState([])
  const Months = useMemo(() => months, [])

  useEffect(() => {
    const getStats = async () => {
        try {
            const {data} = await axios.get(`users/stats`)
            const sortedData = data.sort((a, b) => a._id - b._id)
            sortedData.map(item => setUserStats(prev => [...prev, {name: Months[item._id-1], 'Active User': item.total}]))
        } catch (error) {
            console.log(error)
        }
    }
    getStats()
  }, [Months])

return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytics" data={userStats} dataKey="Active User" grid/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
