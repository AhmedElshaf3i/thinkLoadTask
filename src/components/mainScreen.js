import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import DontChart from './dontChart';
import BarCharts from './barChart';


const MainScreen = (props) => {
    const screensData = useSelector(state => state.screen);
    const { register, handleSubmit } = useForm();
    // search result data
    const [searchResult, setSearchResult] = useState(screensData)
    // informations about selected Mobile
    const [screenInfo, setScreenInfo] = useState("");
    // filters data by selected mobile
    const showInf = (id) => {
        const itemData = screensData.filter(screen => screen.id == id)[0];
        setScreenInfo(itemData);
    }
    const search = data => {
        let result = screensData.filter(screen => screen.model === data.model && screen.brand === data.brand);
        setSearchResult(result);
        setScreenInfo("");
    }
    return (
        <div className="container">
            {/* header */}
            <h1 className="text-center">Mobile Shop Application</h1>
            <div className="row mt-5">
                {/***************  search - table - mobile info ***********************/}
                <div className="col-md-8 ">
                    <div className="row justify-content-end">
                        <button onClick={() => props.history.push('/addscreen')} className="btn btn-danger ">Add New Mobile</button>
                    </div>
                    {/* form search */}
                    <form action="" onSubmit={handleSubmit(search)}>
                        <div className="row ">
                            {/*************  search Section *****/}
                            <div className="col-md-8">
                                {/* search by model */}
                                <div className="mt-5 form-group row">
                                    <label htmlFor="model" className="col-sm-4 col-form-label">Model</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="model" placeholder="Samsung S6" name="model" ref={register()} />
                                    </div>
                                </div>
                                {/* search by Brand  */}
                                <div className="form-group row ">
                                    <label htmlFor="brand" className="col-sm-4 col-form-label">Brand</label>
                                    <div className="col-sm-8">
                                        <select id="brand" className="form-control w-100" name="brand" ref={register()}  >
                                            <option value="Samsung">Samsung</option>
                                            <option value="Sony">Sony</option>
                                            <option value="Apple">Apple</option>
                                            <option value="Nokia">Nokia</option>
                                            <option value="LG">LG</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* ***********search Button******** */}
                            <div className="col-md-4 row align-items-center justify-content-center">
                                <button className="btn btn-info" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    {/* table of data section */}
                    <div className="overflow-auto tableHeight">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody >
                                {searchResult.map(screen => <tr onClick={() => showInf(screen.id)}>
                                    <td>{screen.brand}</td>
                                    <td>{screen.model}</td>
                                    <td>{screen.Manufacure}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* mobile inf section */}
                    {screenInfo && <div className="row border mt-5" >
                        <div className="col-6">
                            <ul>
                                <li>model</li>
                                <li>brand</li>
                                <li>Manufacure</li>
                                <li>memory</li>
                                <li>screen</li>
                                <li>color</li>
                                <li>features</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>{screenInfo.model}</li>
                                <li>{screenInfo.brand}</li>
                                <li>{screenInfo.Manufacure}</li>
                                <li>{screenInfo.memory}</li>
                                <li>{screenInfo.screen}</li>
                                <li>{screenInfo.color}</li>
                                <li>
                                    {/* comunication features ex NFC */}
                                    <ul>
                                        {screenInfo.features.map(item =>
                                            <li>{item}</li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>}
                </div>
                {/****************************  charts ********************************/}
                <div className="col-md-4">
                    <div className="row no-gutters justify-content-center">
                        <div className="">
                        <DontChart/>
                         </div>
                        <div className="mt-5">
                        <BarCharts/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;