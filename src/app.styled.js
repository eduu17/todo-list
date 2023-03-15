import styled from "styled-components";

export const Container = styled.main`
	background-color: #2b2d42;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		display: flex;
		flex-direction: column;
		text-transform: uppercase;
		font-size: min(2.5rem, 10vw);
		letter-spacing: 3px;

		&::after {
			content: " ";
			padding: 1px;
			background: #4eb878;
		}
	}

	h2 {
		text-align: center;
	}

	ul {
		width: 60%;
		padding: 0 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.2rem;
	}
`;

export const Form = styled.form`
	width: 60%;
	padding: 0 12px;
	display: flex;
	flex-direction: column;
	margin: 24px 0;
	gap: 1rem;

	input {
		border-radius: 10px;
		padding: 12px;
		font-size: 1rem;

		&:focus {
			outline: none;
		}
	}
`;

export const Button = styled.button`
	border-radius: 10px;
	padding: 12px;
	cursor: pointer;
	font-size: min(1.2rem, 2.2vw);
	font-weight: 600;
	background: #4eb878;
	color: #fff;
`;

export const ButtonDelete = styled(Button)`
	background: rgba(255, 0, 0, 0.6); ;
`;

export const Task = styled.li`
	background-color: #484c69;
	width: 100%;
	padding: 12px;
	font-size: min(1.2rem, 2.2vw));
	font-weight: 500;
	border-radius: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
