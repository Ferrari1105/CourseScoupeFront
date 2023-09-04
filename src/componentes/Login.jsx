import {GoogleLogin} from 'react-google-login';

const clientId = '343392987610-3ol59qmv347dth1niap0o1fu0dibnnvk.apps.googleusercontent.com';

function Login (){
    const onSuccess = (res) => {

        console.log('[Login Success] currentUser:', res.profileObj);
    }
    
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    }
    return( 
        <div>
            <GoogleLogin
            
            clientId={clientId}
            buttonText="Iniciar Sesion con Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop:'100px'}}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login;