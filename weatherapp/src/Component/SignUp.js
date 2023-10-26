import { useState } from "react";
import axios from "axios";

function SignUp({ showSignUpModal, setSignUpShowModal }) {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        gender:"",
        city:"",
        password:""
    });
    const handleChange=(e)=>{
        setData({...data, [e.target.name]:[e.target.value]})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const sendData = {
            firstName : data.firstName,
            lastName : data.lastName,
            gender : data.gender,
            city : data.city,
            password : data.password,
        }
        console.log(sendData)
        const API = "http://localhost:80/WeatherApp/Backend/create.php";
        axios.post(API, sendData)
        .then((result)=>{
            if(result.data.status == 'invalid'){
                alert('invalid User')
            }
           
        })
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Sign Up
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setSignUpShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×jk
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto">
                            <div className="my-4 w-96 text-blueGray-500 text-lg leading-relaxed">
                                <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                                    <div>
                                        <div class="px-5 pb-5">
                                            <div class="mt-2">
                                                <input placeholder="First Name" onChange={handleChange} value={data.firstName} name="firstName" type="text" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <div class="mt-2">
                                                <input placeholder="Last Name" onChange={handleChange} value={data.lastNameName} name="lastName" type="text" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <div class="flex">
                                                <div class="flex-grow w-1/4 pr-2">
                                                    <div class="mt-2">
                                                        <input  placeholder="Gender" onChange={handleChange} value={data.gender} name="gender" type="text" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>                                                
                                                </div>
                                                <div class="flex-grow">
                                                    <div class="mt-2">
                                                        <input  placeholder="City" onChange={handleChange} value={data.city} name="city" type="text"  required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>   
                                                </div>
                                            </div>

                                            <div class="mt-2">
                                                <input id="password" placeholder="Password" onChange={handleChange} value={data.password} name="password" type="password" autocomplete="current-password" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                            <div class="mt-2">
                                                <input id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" type="password" autocomplete="current-password" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                    </div>


                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setSignUpShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                            
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default SignUp;