import {AppBar, Toolbar, styled,Box} from '@mui/material';
import LoginDialog from './account/LoginDialogue';
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const Header= styled(AppBar)`
  height: 220px;
  background-color:#25D366;
  box-shadow: none;
`
const Container=styled(Box)`
  height:100vh;
  background:#DCDCDC;
`
const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Message=()=>{
    const { account } = useContext(AccountContext);
    return(
        <>
            <Container> 
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
            </Container>
        </>
    )
}
export default Message;