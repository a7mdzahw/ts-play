import Link from "components/link";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <>
      <Div>
        <Link size="huge" to="posts">
          Posts
        </Link>
      </Div>
      <H4>
      <p>About US:</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        distinctio. Atque aperiam aliquam ipsam labore tempore dolor eius autem
        eum fugiat. Numquam ad officiis velit natus reprehenderit blanditiis
        iste vel sed maxime provident. Accusamus cumque dolorum quaerat,
        voluptas labore possimus reiciendis itaque sed iure cupiditate placeat,
        quibusdam, aliquam dolore doloremque?
      </H4>
    </>
  );
};

const Div = styled.div`
display: flex;
max-width:500px;
border-radius: 10%;
align-items: center;
overflow: hidden;
margin: auto;
height: 500px;
background-image: url('https://picsum.photos/600');
`;

const H4 = styled.h4`
margin-top: 64px;
p {
  font-size: 32px;
}
`;


export default Home;
