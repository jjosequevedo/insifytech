import { faI, faT } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const Logo = ({ url = '#' }) => {
    return (
        <Link href={url} className="flex gap-2 items-center">
            <div className="border flex items-center justify-center border-lime-600 rounded-full p-2 w-10 h-10">
                <FontAwesomeIcon className="transform-none position-absolute text-emerald-600" icon={faI} />
                <FontAwesomeIcon className="text-sky-600" icon={faT} />
            </div>
            <span className="w-auto h-6 sm:h-7 text-gray-700 text-lg">Insify<span className="font-semibold">Tech</span></span>
        </Link>
    )
}
