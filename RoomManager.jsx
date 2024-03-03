import { Home, Zap, CreditCard, User, BedDouble, MessagesSquare, Bell, FilePen, LogOut, Bolt, HelpCircle } from 'lucide-react';

const listMenu = [
  {
    name: "Home Page",
    path: "/",
    icon: <Home size={24} />
  },
  {
    name: "Utilities",
    path: "/utilities",
    icon: <Zap size={24} />
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <CreditCard size={24} />
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: <User size={24} />
  },
  {
    
    name: "Room Management ",
    path: "/room-management",
    icon: <BedDouble size={24} />,
    
    
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <MessagesSquare size={24} />
  },
  {
    name: "Notification",
    path: "/notification",
    icon: <Bell size={24} />
  }
];

const accountList = [
  {
    name: "Profile",
    path: "/profile",
    icon: <FilePen size={24} />
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <Bolt size={24} />
  },
  {
    name: "Logout",
    path: "/profile",
    icon: <LogOut size={24} />
  },
]

const RoomManager = () => {
  return (
    <div className="w-full h-auto">
      {/* Sidebar */}
      <div className="w-[250px] h-full py-9 px-6 bg-gradient-to-b from-[#3C4448] to-[#202021]">
        <div className="mb-14 flex items-center gap-3">
          <Home size={40} />
          <div>
            <h1 className="text-white text-xl font-bold">VILAHOUSE</h1>
            <p className="text-[#D0E6EA] text-sm">Ten phong tro</p>
          </div>
        </div>
        {/* Menu */}
        <nav className="flex flex-col gap-2 items-start mb-5">
          {listMenu.map((item) => (
            <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>
        
        <h4 className="uppercase text-white text-xs font-bold mb-4">Account</h4>
        <nav className="flex flex-col gap-2 items-start mb-8">
          {accountList.map((item) => (
            <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>

        <div className="bg-[#F6F6BD] w-full rounded-[20px] p-6">
          <div className="w-9 h-9 flex items-center justify-center bg-[#3C4448] rounded-md text-[#F6F6BD] mb-5">
            <HelpCircle color='#F6F6BD' size={24} />
          </div>
          <p className="text-[#3C4448] text-xs font-medium">Need help?</p>
          <p className="text-[#3C4448] text-sm mb-3">Contact us</p>
          <button className="w-full bg-[#3C4448] text-[#F6F6BD]">Contact</button>
        </div>
      </div>
      {/* Main Content */
        <div className="w-[250px] h-full py-9 px-6 bg-gradient-to-b from-[#3C4448] to-[#202021]">
        ...
          <div className="search-title" style={{ position: 'absolute', bottom: 350, left: -150, padding: '500px' }}>
            <h3 style={{ color: 'gray', fontWeight: 'bold',fontSize: '25px' }}>Rooms Management</h3>
          </div>
          <div className="search-container" style={{ position: 'absolute', top: 20, right: 350, padding: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '50000px', padding: '10px', width: '300px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.3-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path></svg>
              <input type="text" placeholder="Tìm kiếm..." style={{ border: 'none', paddingLeft: '10px', flexGrow: 1, width: '100%' }} />
            </div>
          </div>
          <div style={{
            position: 'fixed',
            right: 20, // Đặt vị trí bên phải của trang
            top: 20, // Đặt vị trí dưới cùng của trang
            width: '100px',
            height: '100px',
            
            backgroundColor: 'lightgray',
            borderRadius: '50%' // Tạo hình tròn cho hình ảnh
          }}>
            <img src="avatar.jpg" alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          </div>
          <div className="search-title" style={{ position: 'absolute', top: -470, right: -370, padding: '500px' }}>
            <h3 style={{ color: 'gray', fontWeight: 'bold',fontSize: '20px' }}>Hello, Admin 123</h3>
          </div>
          
        ...
        </div>
        

      }
      <div className="w-[calc(100% - 120px)] bg-white"></div>
    </div>
  )
}

export default RoomManager