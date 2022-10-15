import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState( defaultFormFields );
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields( defaultFormFields );
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth( user );
    }
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        try {
            const { user } = await signInUserWithEmailAndPassword( email, password );
            resetFormFields();
        } catch ( error ) {
            if ( error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' ) {
                console.log( "incorrect email or password" );
            }
        }
    }
    const handleChange = ( event ) => {
        const { name, value } = event.target;
        setFormFields( { ...formFields, [name]: value } )
    }
    return (
        <div className='sign-up-container'>
            <h2>Already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={handleSubmit}>

                <FormInput
                    label={'Email'}
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email} />
                <FormInput
                    label={'Password'}
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password} />
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;