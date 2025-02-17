const Notification = ({ message, errorMessage }) => {
	if (message === null && errorMessage === null) {
		return null;
	}

	return (
		<div>
			{errorMessage !== null ? (
				<div className="error-message">{errorMessage}</div>
			) : (
				<div className="message">{message}</div>
			)}
		</div>
	);
};
export default Notification;
