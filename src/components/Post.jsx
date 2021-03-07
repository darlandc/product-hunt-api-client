import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Card = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #eee;
  color: Gray;
  margin: 1rem 1em;
  padding: 0px 1em 1em 1em;
  border-radius: 6px;
border: 1px solid red;
`;

const Thumbnail = styled.img`
  border: 1px solid #eee;
  width: 100px;
  margin: 10px 0;
  border-radius: 6px;
`;

const Post = props => {
  const postInfo = props.postInfo;

  return (
    <>
      <Card className="target">
      <Thumbnail src={postInfo.thumbnail.url} />
        <h4>{postInfo.name}</h4>
        <p> {postInfo.tagline} </p>
        <Button
          className="btnOpen"
          variant="contained"
          onClick={event => (window.location.href = `${postInfo.url}`)}
        >
          Open
        </Button>
      </Card>
    </>
  );
};
export default Post;
