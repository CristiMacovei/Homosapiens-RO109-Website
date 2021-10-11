import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-100 bg-opacity-30'>
      <ul className='grid grid-cols-12 gap-6 p-2'>
        <li className='col-span-1 p-2 ml-1 font-bold text-center bg-white rounded-md bg-opacity-70'>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li className='col-span-7'> </li>

        <li className='col-span-1 p-2 font-semibold text-center text-white'>
          <Link href='/#awards'>
            Awards
          </Link>  
        </li>

        <li className='col-span-1 p-2 font-semibold text-center text-white'>
          <Link href='/#sponsors'>
            Sponsors
          </Link>
        </li>
        
        <li className='col-span-1 p-2 font-semibold text-center text-white'>
          <Link href='/about-us'>
            About Us
          </Link>
        </li>

        <li className='col-span-1 p-2 font-semibold text-center text-white'>
          <Link href='/events'>
            Events™
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

// home
// sponsors
// premii
// about us
// events :tm:
