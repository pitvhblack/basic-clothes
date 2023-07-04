import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
	signWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	// Login with popup
	const logGoogleUser = async () => {
		const { user } = await signWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}>Sign with google popup</button>

			<SignUpForm />
		</div>
	);
};
export default SignIn;
