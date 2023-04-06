import styled from "styled-components";
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import YouTube from '@mui/icons-material/YouTube';
import LocationOn from '@mui/icons-material/LocationOn';
import LocalPhone from '@mui/icons-material/LocalPhone';
import MailOutline from '@mui/icons-material/MailOutline';
import { mobile } from "../responsives";

const Container = styled.div`
 display: flex;
 ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
 margin: 20px 0px;
`;
const SocialContainer = styled.div`
 display: flex;
`;
const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 color: white;
 background-color: #${props => props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
`;

const Center = styled.div`
 flex: 1;
 padding: 20px;
 ${mobile({ display: "none" })}
`;

const Title = styled.h3`
 margin-bottom:30px;
`;
const List = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
`;

const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
`;

const Right = styled.div`
 flex: 1;
 padding: 20px;
 ${mobile({ backgroundColor: "#ffe8f8" })}
`;

const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`;

const Payment = styled.img`
 width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>GULAM GHOUSE </Logo>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus at in voluptatem assumenda eligendi, quas quis corporis ipsam est quam totam quaerat, dolor molestiae optio, velit laboriosam aut rem cupiditate.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon color="FF007F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="00ff00">
                        <WhatsApp />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOn style={{marginRight:"10px"}}/>97/32,Vathiya Palli Street Parangipettai - 608502
                </ContactItem>
                <ContactItem>
                    <LocalPhone style={{marginRight:"10px"}}/>+91 8220514374
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>haseemgulamghouse@gmail.com
                </ContactItem>
                <Payment src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" />
            </Right>
        </Container>
    )
}

export default Footer;