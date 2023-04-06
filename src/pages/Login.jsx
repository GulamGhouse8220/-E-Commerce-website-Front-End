import styled from "styled-components";
import { mobile } from "../responsives";

const Container = styled.div`
width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80")
     center;

 background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
 width: 25%;
 padding: 20px;
 background-color: white;
 ${mobile({ width: "75%" })}

`;

const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: center;

`;

const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;
 text-align: center;
`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 10px 0;
 padding: 10px;
`;

const Button = styled.button`
 width: 40%;
 border: none;
 padding: 15px 20px;
 background-color: teal;
 color: white;
 cursor: pointer;
 margin-bottom: 10px;
 margin-left: 100px;
 ${mobile({ marginLeft: "90px" })}

`;

const Link = styled.a`
 margin: 5px 0px;
 font-size: 12px;
 text-decoration: underline;
 cursor: pointer;
 text-align: center;
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOR REMEMBER THE PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;