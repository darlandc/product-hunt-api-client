import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Card = styled.span`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #eee;
  color: Gray;
  margin: 1rem 1em;
  padding: 0px 1em 1em 1em;
  border-radius: 6px;
  box-shadow: 2px 2px 5px #c0c0c0;
`;

const Thumbnail = styled.img`
  border: 1px sold #eee;
  width: 90%;
  margin: 10px 0;
`;

const Post = (props) => {
  const postInfo = props.postInfo;
  console.log(postInfo);

  return (
    <>
      <Card className="target">
        <h4>{postInfo.name}</h4>
        <p> {postInfo.tagline} </p>
        <Thumbnail src={postInfo.thumbnail.url} />
        <Button
          variant="contained"
          onClick={(event) => (window.location.href = `${postInfo.url}`)}
        >
          Open
        </Button>
      </Card>
    </>
  );
};
export default Post;
