import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function NavBar() {
    const [showLoginModal, setLoginShowModal] = useState(false);
    const [showSignUpModal, setSignUpShowModal] = useState(false);
    return (
        <div>

            <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <button type="button"
                                    onClick={() => setLoginShowModal(true)} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</button>
                            </li>
                            {/* Login Model */}
                            {showLoginModal ? (<Login showLoginModal={showLoginModal} setLoginShowModal={setLoginShowModal}/> ) : null}
                            <li>
                                <button 
                                type="button" 
                                onClick={()=>{setSignUpShowModal(true)}}
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</button>
                            </li>
                            {/* Login Model */}
                            {showSignUpModal ? (<SignUp showSignUpModal={showSignUpModal} setSignUpShowModal={setSignUpShowModal}/> ) : null}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;