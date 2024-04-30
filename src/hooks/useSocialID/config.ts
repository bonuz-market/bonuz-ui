import { coreDao } from 'viem/chains'

export const BONUZ_WALLET_NAME = 'Bonuz'

export const BONUZ_SOCIAL_ID_ADDRESS =
	'0x9220070245b67130977FdF32acA4acdF6aD163cC'
export const BONUZ_SOCIAL_ID_CHAIN = coreDao

export const SUPPORTED_PLATFORMS = [
	's_x',
	's_instagram',
	's_facebook',
	's_linkedin',
	's_tiktok',
	's_snapchat',
	's_discord',
	's_pinterest',
	's_twitch',
	's_reddit',
	's_mastadon',
	's_youmeme',
	's_rumble',
	's_youtube',
	's_vk',
	's_qq',
	'w_near',
	'w_sui',
	'w_aptos',
	'w_cosmos',
	'w_cardano',
	'w_solana',
	'w_icp',
	'w_btc',
	'w_doge',
	'w_polkadot',
	'w_lukso',
	'w_algorand',
	'w_tron',
	'w_ton',
	'w_wallet1',
	'w_wallet2',
	'w_wallet3',
	'w_wallet4',
	'w_wallet5',
	'm_telegram',
	'm_whatsapp',
	'm_signal',
	'm_weChat',
	'd_ens',
	'd_worldId',
	'd_lens',
	'd_bnb',
	'd_anima',
	'd_demos'
]

export const BonuzSocialIdAbi = [
	'function getAllowedSocialLinks(string[] _platforms) view returns (bool[])',
	'function getUserProfileAndSocialLinks(address _user, string[] _platforms) view returns (string, string, string, string[])',
	'function isAdmin(address _account) view returns (bool)',
	'function isIssuer(address _account) view returns (bool)',
	'function owner() view returns (address)',
	'function paused() view returns (bool)',
	'function renounceOwnership()',
	'function setAdmin(address _user, bool _state)',
	'function setAllowedSocialLink(string _platform, bool _allowed)',
	'function setIssuer(address _user, bool _switch)',
	'function setIssuer(address _user, bool _switch)',
	'function setPause(bool _switch)',
	'function setSocialLink(string _platform, string _link, address _user)',
	'function setSocialLinks(string[] _platforms, string[] _links, address _user)',
	'function setUserHandle(address _user, string _handle)',
	'function setUserImage(address _user, string _profileImage)',
	'function setUserName(address _user, string _name)',
	'function setUserProfile(address _user, string _name, string _handle, string _profileImage)',
	'function transferOwnership(address newOwner)'
] as const
