import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { SignedIn } from '@clerk/clerk-react';
import { SignedOut } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';
import { PenBox } from 'lucide-react';
import { SignIn } from '@clerk/clerk-react';

const Header = () => {
const[showSignIn, setShowSignIn]= useState(false);

  return (
  <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
        <img src='/logo.png' className="h-20"/>
        </Link>

       
      <div className="flex gap-8">
      <SignedOut>
          <Button variant = "outline">Login</Button>
      </SignedOut>
      
      <SignedIn>
        {/*add a condn */}
      <Button variant='destructive' className='rounded-full'>
        <PenBox size={20} className="mr-2"/>
        Post a Job
      </Button>
        <Link to='/post-job'></Link>
        <UserButton />
      </SignedIn>
      </div>
      </nav>

      {showSignIn && (<div>
        <SignIn
        signUpForceRedirectUrl='/onboarding'
        fallbackRedirectUrl='/onboarding'
        />
      </div> )}
  </>
  )
}

export default Header;