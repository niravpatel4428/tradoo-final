import Link from 'next/link';
import React from 'react'

const footerLinks = [
    {
        label: "Privacy Policy",
        href: "/privacy-policy",
    },
    {
        label: "Terms and Conditions",
        href: "/terms-of-use",
    },
];

const FooterLinks: React.FC = () => {
    return (
        <div className='border-t border-t-gray300'>
            <div className='container'>
                <div className="py-12">
                    <ul className="max-xs:flex-col max-xs:items-center flex gap-10 justify-center">
                        {footerLinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-base leading-5.5 text-gray700 hover:text-lightgray900"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks
