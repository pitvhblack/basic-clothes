import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" {...otherProps} autoComplete="on"/>
			{label && (
				<label
					className={`form-input-label ${
						otherProps.value.length ? "shrink" : ""
					}`}
                    htmlFor={otherProps.name}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
