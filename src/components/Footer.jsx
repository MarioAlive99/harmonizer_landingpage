import { resourceLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <div className=" mt-20 border-t py-10 border-neutral-700">
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className=" text-md font-semibold mb-4">Recursos</h3>
                <ul className=" space-y-2">
                    {resourceLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className=" text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className=" text-md font-semibold mb-4">Plataformas</h3>
                <ul className=" space-y-2">
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className=" text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className=" text-md font-semibold mb-4">Comunidad</h3>
                <ul className=" space-y-2">
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className=" text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer