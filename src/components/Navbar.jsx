import { ChevronDownIcon } from '@heroicons/react/20/solid'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-2/12 mx-10">
        <a className="btn btn-ghost text-xl">
          <img
            className="w-32"
            src="https://s3-alpha-sig.figma.com/img/0815/78d9/872c740534629bce867325cd8ecbc7df?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qv5ncU3n604jD3D4NUUE~bszh9NODPiUnd2TdXNaeAyHLNw2Cgk4YBYhdkDCWF8Qee7tn5f2XGKU0UzTz94do1ZBGn889oIIGDEDNAaLKGh-5Gw6HG39hXqkk16uNdM7GJS7aktHt56cnybf2dytpSPWWApj06jEp3LcneVWLFEjdS1tRBy3pjI0qvQOyGo7ze-TYEvy22q-Zhwcm0DXB3jgutEpKy7LWYV~nHzS0JJLIpvvU6Aw1srKLmKjybNpefJGVYBf-QEALGlzxG3Nyx7ymJ4H~6SrEsqVLG7RzC7CSaIG-3pe1Y6YkYD9e6kuQt7Cz6r5VduFI~x733Bwug__"
          ></img>
        </a>
        <div className="dropdown dropdown-start">
          <div tabIndex={0} >
            <div className=" p-2">
              <button className="btn btn-primary">Courses
              <ChevronDownIcon className='-mr-1 size-5 text-gray-400'/>
              </button>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-8 ">
        <a className='btn btn-ghost text-md '>Refer & Earn</a>
        <a className='btn btn-ghost'>Resource</a>
        <a className='btn btn-ghost'>About us</a>
        <button className='btn shadow-xl'>Login</button>
        <button className='btn bg-blue-500 text-white '>Try for free</button>
      </div>
    </div>
  );
};

export default Navbar;
