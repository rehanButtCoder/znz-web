import React from 'react'
import './Side.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-bootstrap';
function SideBar() {
  const isActive = true;
  const userData = useSelector((state) => state.user.userData);

  return (
    <div>
      <div className='main-side-bar'>
        <div className='side'>
          <div className='side-ic'>
            <NavLink to={
              userData?.user?.role?.role === "buyer"
                ? "/clientprofilepage"
                : "/seller-profile"
            }
            >

              <img src="/asserts/images/sideBAr/Home1.png" alt="Image-1" />
              {/* <img src="/asserts/images/sideBAr/Home.png" alt="Image-2" /> */}
              {/* {isActive ? <img src="/asserts/images/sideBAr/Home1.png" alt="Image 1" /> : <img src="/asserts/images/sideBAr/Home.png" alt="Image 2" />} */}
              {/* <img src='/asserts/images/sideBAr/Home1.png' alt="asds" class="side-h-image"/> */}
            </NavLink></div>
          <div className='side-ic'><NavLink className='navlink'>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
              className='search___svg'
              xmlns="http://www.w3.org/2000/svg">
              <path d="M20.4546 20L17.4546 17M19.4546 10C19.4546 14.9706 15.4252 19 10.4546 19C5.48403 19 1.45459 14.9706 1.45459 10C1.45459 5.02944 5.48403 1 10.4546 1C15.4252 1 19.4546 5.02944 19.4546 10Z"
                stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </NavLink></div>
          <div className='side-ic'><NavLink className='navlink'><svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.45532 1C4.14175 1 1.45557 4.09544 1.45557 7.91387V12.5231C1.45557 12.8001 1.4697 13.0732 1.49718 13.3417C1.46948 13.4473 1.45459 13.5594 1.45459 13.6754V23.8455C1.45459 24.8299 2.45667 25.3611 3.10531 24.7204L7.87005 20.0141C8.24439 19.6443 8.74936 19.437 9.27551 19.437H19.4548C22.7684 19.437 25.4546 16.3415 25.4546 12.5231V7.91387C25.4546 4.09544 22.7684 1 19.4548 1H7.45532Z" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </NavLink></div>
          <div className='side-ic'><NavLink className='navlink'><svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7879 8.01449C19.7879 6.15413 19.0153 4.36997 17.64 3.0545C16.2648 1.73902 14.3995 1 12.4546 1C10.5097 1 8.64441 1.73902 7.26914 3.0545C5.89387 4.36997 5.12126 6.15413 5.12126 8.01449C5.12126 13.9484 2.66763 16.809 1.31865 17.9333C1.11609 18.1021 1.24796 18.5362 1.51165 18.5362H7.97673C8.09369 18.5362 8.19532 18.6154 8.2298 18.7271C8.4537 19.4529 9.45325 22 12.4546 22C15.4559 22 16.4555 19.4529 16.6794 18.7271C16.7139 18.6154 16.8155 18.5362 16.9325 18.5362H23.3975C23.6612 18.5362 23.7931 18.1021 23.5905 17.9333C22.2416 16.809 19.7879 13.9484 19.7879 8.01449Z" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          </NavLink></div>
          <div className='side-ic'><NavLink className='navlink'>
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0912 21.485C17.4049 26.1713 9.80697 26.1713 5.12068 21.485C0.434384 16.7987 0.434384 9.20077 5.12068 4.51447C9.80697 -0.171817 17.4049 -0.171817 22.0912 4.51447M26.9393 9.00008L30.4949 13.0001L26.9393 17.0001M30.2726 13.0001H13.606" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </NavLink></div>





        </div>
      </div>
    </div>
  )
}

export default SideBar
