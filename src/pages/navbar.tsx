import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='ml-4'>
            <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={54}
            />
        </div>
    )
}