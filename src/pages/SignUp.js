import React from 'react';
import SignUpForm from '../components/Auth/SignUpForm';

export default function SignUp() {
  return (
    <div>
      <h3 style={{ textAlign: 'center', fontWeight: 500 }}>
        Create your account for free
      </h3>
      <SignUpForm />
    </div>
  );
}
