import authorize from './authorize';
import signature from './signature';

export default {
	sign : signature.sign,
	token : signature.token,
	authorize_url : authorize.authorize_url,
	authorize : authorize.run
}