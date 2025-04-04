import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Services = () => {
    return (
        <section className="text-gray-900 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-5 py-24 ">
                <div className="text-center mb-20">
                    <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Our Services</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Aliquam vehicula scelerisque massa, non cursus lorem tempus vitae. Vivamus aliquet turpis leo, eu ornare erat efficitur eget. Donec interdum congue auctor.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                    <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                        <div className="pattern-dots-md gray-light">
                            <div className="rounded bg-[#f1f5f9] p-4 transform translate-x-6 -translate-y-6  ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                    {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> */}
                                    <FontAwesomeIcon icon={faClipboardCheck} />
                                </div>
                                <div className="flex-grow ">
                                    <h2 className=" text-xl title-font font-medium mb-3">Web design</h2>
                                    <p className="leading-relaxed text-sm text-justify">
                                        Vivamus mauris augue, vulputate ac ligula vitae, aliquam scelerisque arcu. Ut tristique, nisi sit amet porttitor venenatis, risus tortor faucibus est, vel suscipit felis leo in massa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                        <div className="pattern-dots-md gray-light">
                            <div className="rounded bg-[#f1f5f9] p-4 transform translate-x-6 -translate-y-6 ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <div className="flex-grow">
                                    <h2 className=" text-xl title-font font-medium mb-3">Integration web</h2>
                                    <p className="leading-relaxed text-sm text-justify">
                                        Vivamus mauris augue, vulputate ac ligula vitae, aliquam scelerisque arcu. Ut tristique, nisi sit amet porttitor venenatis, risus tortor faucibus est, vel suscipit felis leo in massa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                        <div className="pattern-dots-md gray-light">
                            <div className="rounded bg-[#f1f5f9] p-4 transform translate-x-6 -translate-y-6 ">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                    <FontAwesomeIcon icon={faDatabase} />
                                </div>
                                <div className="flex-grow">
                                    <h2 className=" text-xl title-font font-medium mb-3">Development Back-end</h2>
                                    <p className="leading-relaxed text-sm text-justify">
                                        Vivamus mauris augue, vulputate ac ligula vitae, aliquam scelerisque arcu. Ut tristique, nisi sit amet porttitor venenatis, risus tortor faucibus est, vel suscipit felis leo in massa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
