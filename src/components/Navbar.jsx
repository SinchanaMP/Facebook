import './Navbar.css'
import {FacebookFilled,SearchOutlined} from '@ant-design/icons'
import {Airplay,HouseLine,GameController,Storefront,UsersFour,List,MessengerLogo,Bell} from '@phosphor-icons/react'

const Navbar=  () =>{
    return(
        <nav className="navbar">
        <div className="logo-container">
        <div className="logo">
        <FacebookFilled
        style={{
            fontsize:"30px",
            color:'#0866ff'

        }} />
        </div>
        </div>
        <div className="search">
        <SearchOutlined
        style={{
            padding:"0px 10px",
            color:'#8a9fa7'
        }} />
        <input type="text" placeholder="Search facebook" className="search-input" />
        
         </div>
        <div className="menu-container">
        <HouseLine size={28}  weight="bold"
        color='#b0b3b8'
        style={{
            cursor:'pointer'
            }}/>
        <Airplay size={28} weight="bold"
        color='#b0b3b8'
        style={{
            cursor:'pointer'
            }} />
        <GameController size={28} weight="bold"
        color='#b0b3b8'
        style={{
            cursor:'pointer'
            }} />
        <Storefront size={28} weight="bold"
        color='#b0b3b8'
        style={{
            cursor:'pointer'
            }} />
        <UsersFour size={28} weight="bold"
        color='#b0b3b8'
        style={{
            cursor:'pointer'
            }} />

        </div>
        <div className="profile-container">
        <List color='#b0b3b8' size={28} weight="bold" />
        <MessengerLogo color='#b0b3b8' size={28} weight="fill" />
        <Bell color='#b0b3b8' size={28}  weight="fill"/>
        </div>
        </nav>
    )
}

export default Navbar;