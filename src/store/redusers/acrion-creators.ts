import { AuthActionCreators } from './auth/acrtion-creators';
import { EventActionCreators } from './event/action-creators';

export const allActionCreators = {
	...AuthActionCreators,
	...EventActionCreators
}