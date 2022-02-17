import { authenticate } from '@xboxreplay/xboxlive-auth';
import XboxLiveAPI from '@xboxreplay/xboxlive-api';

authenticate('name@domain.com', '*********')
	.then(console.info)
	.catch(console.error);

    XboxLiveAPI.getPlayerSettings('Zeny IC', {
        userHash: 'YOUR_OWN_USER_HASH',
        XSTSToken: 'YOUR_OWN_XSTS_TOKEN'
    }, ['UniqueModernGamertag', 'GameDisplayPicRaw', 'Gamerscore', 'Location'])
        .then(console.info)
        .catch(console.error);