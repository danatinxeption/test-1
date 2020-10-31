
import moment from 'moment'
import { useState, useEffect, useMemo } from 'react'

import classnames from './PMViewer.module.css'


const PMViewer = (props) => {

    const [dataSet, setDataSet] = useState([])

    useEffect(() => {

        const requestData = async () => {
            try {
                const fetchResult = await fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-air-quality-measurements&q=&lang=en&rows=10&sort=-measurements_parameter&facet=city&facet=measurements_unit&facet=measurements_parameter&facet=measurements_lastupdated")
                if (fetchResult.ok && fetchResult.status === 200) {
                    const resultData = await fetchResult.json()
                    const { records = [] } = resultData
                    const mappedData = records.map((data) => {
                        const { fields: { city, country, measurements_value, measurements_lastupdated } } = data
                        return (
                            {
                                city,
                                country,
                                value: measurements_value,
                                updated: measurements_lastupdated
                            }
                        )
                    })

                    setDataSet(mappedData)
                }
            } catch (error) {
                console.error(error);
            }
        }

        requestData()
    }, [])

    const tableData = useMemo(() => {
        if (dataSet.length === 0) {
            return (
                <tr><td colSpan={3} className={classnames.alignCenter}>No data aviable</td></tr>
            )
        }
        return dataSet.map((data, key) => {
            const date = moment(data.updated).format("L, LT")
            return (
                <tr key={key}>
                    <td className={classnames.alignLeft}>{data.city}, {data.country}</td>
                    <td className={classnames.alignCenter}>{data.value}</td>
                    <td className={classnames.alignRight}>{date}</td>
                </tr>
            )
        })
    }, [dataSet])

    return (
        <div>
            <h2>Proin quis nisl id lorem lobortis auctor. Proin dui velit, rhoncus in mauris ac, rutrum maximus.</h2>
            <table className={classnames.table}>
                <thead className={classnames.thead}>
                    <tr>
                        <th className={classnames.alignLeft}>LOCATION</th>
                        <th className={classnames.alignCenter}>PM2.5</th>
                        <th className={classnames.alignRight}>LAST UPDATED</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default PMViewer