import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import './authentication.styles.scss'

import SignInForm from "../../components/sign-in-form/sign-in-form.componenet";
import SignUpForm from "../../components/sign-up-form/sign-up-form.componenet";

const Authentication = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth( user )
    }
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication   