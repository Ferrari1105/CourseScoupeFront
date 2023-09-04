import {GoogleLogout} from 'react-google-login';
const clientId = '343392987610-3ol59qmv347dth1niap0o1fu0dibnnvk.apps.googleusercontent.com';

function Logout (){
    const onSuccess = (res) => {
        console.log('[Logout Success] currentUser:', res.profileObj);
    }
    
    return( 
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;