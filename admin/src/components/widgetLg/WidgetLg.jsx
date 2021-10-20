import React from 'react'

import './widgetLg.css'

export default function widgetLg() {
    const Button = ({ type }) => {
        return <button className={`widegetLgButton ${type}`}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgtable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Satus</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1619086311112-f70682597d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" 
                            alt="" className="widgetImg" 
                            />
                        <span className="widgetLgName">Susan Doe</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$230.12</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1619086311112-f70682597d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" 
                            alt="" className="widgetImg" 
                            />
                        <span className="widgetLgName">Susan Doe</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$230.12</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1619086311112-f70682597d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" 
                            alt="" className="widgetImg" 
                            />
                        <span className="widgetLgName">Susan Doe</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$230.12</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1619086311112-f70682597d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80" 
                            alt="" className="widgetImg" 
                            />
                        <span className="widgetLgName">Susan Doe</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">$230.12</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
