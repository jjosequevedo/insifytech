import Image from "next/image";

export const AboutUs = () => {
    return (
        <section className="bg-white dark:bg-gray-900 text-gray-800 bg-[#f1f5f9]">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    {/* <Image src='/images/woman.svg' width={650} height={650} alt=""  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/> */}
                    <Image width={200} height={200} className="w-full h-full lg:max-w-3xl" src='/images/woman.svg' alt="" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        About <span className="dark:text-violet-600">Us</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac neque ut risus facilisis pellentesque a ac dui. Sed commodo ultricies nunc, sit amet sodales erat malesuada et. Quisque malesuada eros in ipsum venenatis, eu condimentum erat interdum. Maecenas porttitor ligula vitae sollicitudin auctor. 
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">More</a>
                    </div>
                </div>
            </div>
        </section>
    )
};
