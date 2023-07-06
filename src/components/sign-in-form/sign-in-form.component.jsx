import { useState } from "react";
import {
	signWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [error, setError] = useState("");
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		try {
			const { user } = await signWithGooglePopup();
			const userDocRef = await createUserDocumentFromAuth(user);
			alert("logged successfully!");
		} catch (err) {
			if (err.code == "auth/popup-closed-by-user") {
				setError("Popup closed :L");
			}
		}
		resetFormFields();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const res = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
			alert("logged successfully!");
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					setError("Incorrect password");
					break;
				case "auth/user-not-found":
					setError("No user associated with this email");
					break;
				default:
					setError("Something went wrong");
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Sign In</h2>
			<span>Sign in with either Google or email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="error-holder">
					{error && <span className="error">{error}</span>}
				</div>

				<div className="button-holder">
					<Button type="submit">Sign in</Button>

					<Button
						type="button"
						buttonType="GOOGLE"
						onClick={signInWithGoogle}
					>
						Sign in with Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
