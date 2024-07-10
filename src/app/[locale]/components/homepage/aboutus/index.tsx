import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
    return (
        <section className="text-gray-800 bg-[#f1f5f9]">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Image width={200} height={200} className="w-full h-full lg:max-w-3xl" src='/images/woman.svg' alt="Technologist Woman" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        About <span className="text-violet-600">Us</span>
                    </h1>
                    <p className="my-6 text-lg">
                        {`We are a team of skilled developers dedicated to providing professional and simplified website development services. Our name, Insify Tech, blends "insight" and "simplify," reflecting our mission to create innovative and user-friendly web solutions. With expertise in PHP and Next.js technologies, we deliver top-notch web development tailored to your needs. Let us help you bring your vision to life with efficiency and creativity.`}
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" href="#" className="text-md text-gray-600 font-semibold">
                            Read more <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};
