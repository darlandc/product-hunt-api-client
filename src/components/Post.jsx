import styled from 'styled-components'

const Card = styled.span`
	background: transparent;
	border-radius: 3px;
	border: 1px solid #EEE;
	color: Gray;
	margin: 5px 1em;
	padding: 0.25em 1em;
	border-radius: 6px;
	box-shadow: 2px 2px 5px #C0C0C0;
`;

const Post = (props) => {

	return (
		<>
		<Card className="target">
			<h1> {props.postInfo.name} x </h1>
		</Card>
		</>
	);
};
export default Post;