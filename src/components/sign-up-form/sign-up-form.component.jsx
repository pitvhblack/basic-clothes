import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [error, setError] = useState("");
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password === confirmPassword) {
			try {
				const userRef = await createAuthUserWithEmailAndPassword(
					email,
					password
				);

				await createUserDocumentFromAuth(userRef.user, {
					displayName,
				});

				alert("User created successfully!");
				setError("");
				resetFormFields();
			} catch (err) {
				setError(err.message);
			}
		} else {
			setError("Passwords must be the same!");
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

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

				<FormInput
					label="Confirm password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>

				<div className="error-holder">
					{error && <span className="error">{error}</span>}
				</div>

				<div className="button-holder">
					<Button type="submit">Sign up</Button>
					<Button type="submit" buttonType="GOOGLE">Sign up with google</Button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
