import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
		<div>
			<h1>Sign up with your email and password</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Display name</label>
					<input
						type="text"
						required
						onChange={handleChange}
						name="displayName"
						value={displayName}
					/>
				</div>

				<div>
					<label>Email</label>
					<input
						type="email"
						required
						onChange={handleChange}
						name="email"
						value={email}
					/>
				</div>

				<div>
					<label>Password</label>
					<input
						type="password"
						required
						onChange={handleChange}
						name="password"
						value={password}
					/>
				</div>

				<div>
					<label>Confirm password</label>
					<input
						type="password"
						required
						onChange={handleChange}
						name="confirmPassword"
						value={confirmPassword}
					/>
				</div>

				<div>
					<span style={{ color: "red" }}>{error}</span>
				</div>

				<div>
					<button type="submit">Sign up!</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
