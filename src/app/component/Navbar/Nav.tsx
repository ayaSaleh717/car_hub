import Link from "next/link";
import Image from "next/image";

import CustomButton from "./../customButton/CustomButton";

const Nav = () => (
<header className="header">
  <nav className=" nav ">
     
       
          <Link href='/' className="link_1">
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
        
       
        <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='signin_btn'
      />
        
        
       
</nav></header>
)

export default Nav;