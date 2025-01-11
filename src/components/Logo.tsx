  import logo from '../assets/logo.png'

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 text-3xl text-white">
      <img src={logo}   className="w-[50px] h-[50px]"/>
      <h2>منصتي</h2>
    </div>
  )
}

export default Logo
