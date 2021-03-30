import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addScreen } from '../redux/screen/screenActions';
const AddScreen = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    // when save the data and validation passed
    const onSubmit = data =>{
        dispatch(addScreen(data))
        props.history.push("/")
    }
    return (
        <form className="form-group " onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <div className="row">
                    {/**********  model - Manufacure - brand  - memory ***************/}
                    <div className="col-md-6">
                        {/* model */}
                        <div className="form-group row">
                            <label htmlFor="model" className="col-sm-4 col-form-label">Model</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="model" placeholder="Samsung S6" name="model" ref={register({required: "Model is required"})} />
                                {errors.model && <p className="text-danger">{errors.model.message}</p> }          
                            </div>
                        </div>
                        {/* Manufacure Year */}
                        <div className="form-group row">
                            <label htmlFor="Manufacure" className="col-sm-4 col-form-label">Manufacure Year</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control" id="Manufacure" placeholder="2015" name="Manufacure" ref={register({ required: "Manufacure Year is required" })} />
                                {errors.Manufacure && <p className="text-danger">{errors.Manufacure.message}</p> }     
                            </div>
                        </div>
                        {/* Brand */}
                        <div className="form-group row">
                            <label htmlFor="brand" className="col-sm-4 col-form-label">Brand</label>
                            <div className="col-sm-8">
                                <select id ="brand" className="form-control  w-100" name="brand" ref={register({ required: true })}>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Sony">Sony</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Nokia">Nokia</option>
                                    <option value="LG">LG</option>
                                </select>
                              
                            </div>
                        </div>
                        {/* Memory */}
                        <div className="form-group row">
                            <label htmlFor="memory" className="col-sm-4 col-form-label">Memory</label>
                            <div className="col-sm-8">
                                <select id="memory" className="form-control w-100" name="memory" ref={register({ required: "Memory is required" })}>
                                    <option value="" >Options</option>
                                    <option value="16GB">16GB</option>
                                    <option value="32GB">32GB</option>
                                    <option value="64GB">64GB</option>
                                    <option value="128GB">128GB</option>
                                </select>
                                {errors.memory && <p className="text-danger">{errors.memory.message}</p> }    
                            </div>
                        </div>
                    </div>
                    {/**********  communications  - screen - color  -* ***************/}
                    <div className="col-md-6">
                        <div className="row">
                            {/* Comunications */}
                            <div className="col-md-4">
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        {/*DualSIM*/}
                                        <div className="form-check">
                                            <input className="form-check-input" value="Dual SIM" type="checkbox" id="DualSIM" name="features" ref={register()} defaultChecked={true}/>
                                            <label className="form-check-label" htmlFor="DualSIM">Dual SIM</label>
                                        </div>
                                        {/* NFC */}
                                        <div className="form-check">
                                            <input className="form-check-input" value ="NFC" type="checkbox" id="NFC" name="features" ref={register()} defaultChecked={true} />
                                            <label className="form-check-label" htmlFor="NFC">NFC</label>
                                        </div>
                                        {/* 3G */}
                                        <div className="form-check">
                                            <input className="form-check-input" value="3G" type="checkbox"  id="G3" name="features"  ref={register()} defaultChecked={true} />
                                            <label className="form-check-label" htmlFor="G3">3G </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Screen */}
                            <div className="col-md-4">
                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-4 pt-0 ">Screen</legend>
                                        <div className="col-sm-8">
                                            {/* SCREEN -> 4 */}
                                            <div className="form-check">
                                                <input className="form-check-input " type="radio" name="screen" id="screen4" value="4" ref={register()}/>
                                                <label className="form-check-label" htmlFor="screen4">4"</label>
                                            </div>
                                            {/* SCREEN -> 5 */}
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="screen" id="screen5" value="5"  ref={register()}/>
                                                <label className="form-check-label" htmlFor="screen5">5"</label>
                                            </div>
                                            {/* SCREEN -> 6 */}
                                            <div className="form-check ">
                                                <input className="form-check-input" type="radio" name="screen" id="screen6" value="6" defaultChecked={true}  ref={register()} />
                                                <label className="form-check-label" htmlFor="screen6">6"</label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                           {/* color */}
                            <div className="col-md-4">
                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-4 pt-0">Color</legend>
                                        <div className="col-sm-8">
                                            {/* WHITE */}
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="color" id="white" value="white"  ref={register()} />
                                                <label className="form-check-label" htmlFor="white">White</label>
                                            </div>
                                              {/* Black */}
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="color" id="black" value="black" defaultChecked={true} ref={register()} />
                                                <label className="form-check-label" htmlFor="black"> black </label>
                                            </div>
                                            {/* Gold */}
                                            <div className="form-check ">
                                                <input className="form-check-input" type="radio" name="color" id="gold" value="gold"  ref={register()} />
                                                <label className="form-check-label" htmlFor="gold">gold</label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** */}
           <div className="float-right">
                <button onClick={()=>props.history.push("/")} className="btn btn-primary mr-4">Back</button>
                <button type="submit" className="btn btn-primary">Save</button>
           </div>
        </form>
    );
}

export default AddScreen;

