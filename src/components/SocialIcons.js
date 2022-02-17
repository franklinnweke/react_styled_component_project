import { FaTwitter, FaFacebook, FaLinkedIn } from 'react-icons/fa'

export default function SocialIcons() {
    return (
        <div>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com">
                    <FaLinkedIn />
                </a>

            </li>
        </div>
    )
}
