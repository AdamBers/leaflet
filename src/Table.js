import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFromAction, changeToAction, setCurrentDirection } from './store/Reducer';

const Table = () => {
    const data = useSelector(state => state.set)
    const places = useSelector(state => state.places)
    const [active, setActive] = useState(0)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        setActive(id + 1)
        dispatch(setCurrentDirection(id + 1))
    }

    return (
        <div className="markers">
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr
                                className={active === index + 1 ? "active" : ""}
                                key={index}
                                onClick={(id) => handleClick(index)}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <select
                                        defaultValue={item.from.city}
                                        onChange={(e) => dispatch(changeFromAction(e.nativeEvent.target.selectedIndex, index))}>
                                        {places.map((place, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={place.city}
                                                >
                                                    {place.city}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </td>
                                <td>
                                    <select
                                        defaultValue={item.to.city}
                                        onChange={(e) => dispatch(changeToAction(e.nativeEvent.target.selectedIndex, index))}
                                    >
                                        {places.map((place, index) => {
                                            return (
                                                <option key={index}
                                                    value={place.city}
                                                >
                                                    {place.city}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
};

export default Table