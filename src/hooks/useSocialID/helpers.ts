import { AbiStateMutability, ContractFunctionReturnType, parseAbi } from 'viem'
import { BONUZ_WALLET_NAME } from './config'

const getPublicData = (link: string) => {
	if (link?.startsWith('p_')) {
		return {
			link: link.slice(2), // Remove the "p_" prefix
			isPublic: true
		}
	} else {
		return {
			link: '',
			isPublic: false
		}
	}
}

export const prepareSocialId = (
	data: readonly [string, string, string, readonly string[]]
) => {
	const [name, profileImage, handle, links] = data

	const [
		s_x,
		s_instagram,
		s_facebook,
		s_linkedin,
		s_tiktok,
		s_snapchat,
		s_discord,
		s_pinterest,
		s_twitch,
		s_reddit,
		s_mastadon,
		s_youmeme,
		s_rumble,
		s_youtube,
		s_vk,
		s_qq,
		w_near,
		w_sui,
		w_aptos,
		w_cosmos,
		w_cardano,
		w_solana,
		w_icp,
		w_btc,
		w_doge,
		w_polkadot,
		w_lukso,
		w_algorand,
		w_tron,
		w_ton,
		w_wallet1,
		w_wallet2,
		w_wallet3,
		w_wallet4,
		w_wallet5,
		m_telegram,
		m_whatsapp,
		m_signal,
		m_weChat,
		d_ens,
		d_worldId,
		d_lens,
		d_bnb,
		d_anima,
		d_demos
	] = links.map(getPublicData)

	const userSocials = {
		facebook: {
			handle: s_facebook.link,
			isPublic: s_facebook.isPublic,
			type: 'facebook'
		},
		instagram: {
			handle: s_instagram.link,
			isPublic: s_instagram.isPublic,
			type: 'instagram'
		},
		x: {
			handle: s_x.link,
			isPublic: s_x.isPublic,
			type: 'x'
		},
		tiktok: {
			handle: s_tiktok.link,
			isPublic: s_tiktok.isPublic,
			type: 'tiktok'
		},
		snapchat: {
			handle: s_snapchat.link,
			isPublic: s_snapchat.isPublic,
			type: 'snapchat'
		},
		linkedin: {
			handle: s_linkedin.link,
			isPublic: s_linkedin.isPublic,
			type: 'linkedin'
		},
		discord: {
			handle: s_discord.link,
			isPublic: s_discord.isPublic,
			type: 'discord'
		},
		pinterest: {
			handle: s_pinterest.link,
			isPublic: s_pinterest.isPublic,
			type: 'pinterest'
		},
		twitch: {
			handle: s_twitch.link,
			isPublic: s_twitch.isPublic,
			type: 'twitch'
		},
		reddit: {
			handle: s_reddit.link,
			isPublic: s_reddit.isPublic,
			type: 'reddit'
		},
		mastadon: {
			handle: s_mastadon.link,
			isPublic: s_mastadon.isPublic,
			type: 'mastadon'
		},
		youmeme: {
			handle: s_youmeme.link,
			isPublic: s_youmeme.isPublic,
			type: 'youmeme'
		},
		rumble: {
			handle: s_rumble.link,
			isPublic: s_rumble.isPublic,
			type: 'rumble'
		},
		youtube: {
			handle: s_youtube.link,
			isPublic: s_youtube.isPublic,
			type: 'youtube'
		},
		vk: {
			handle: s_vk.link,
			isPublic: s_vk.isPublic,
			type: 'vk'
		},
		qq: {
			handle: s_qq.link,
			isPublic: s_qq.isPublic,
			type: 'qq'
		}
	}
	const userMessagingApps = {
		whatsapp: {
			handle: m_whatsapp.link,
			isPublic: m_whatsapp.isPublic,
			type: 'whatsapp'
		},
		telegram: {
			handle: m_telegram.link,
			isPublic: m_telegram.isPublic,
			type: 'telegram'
		},
		signal: {
			handle: m_signal.link,
			isPublic: m_signal.isPublic,
			type: 'signal'
		},
		weChat: {
			handle: m_weChat.link,
			isPublic: m_weChat.isPublic,
			type: 'weChat'
		}
	}
	const userWallets = {
		solana: {
			handle: w_solana.link,
			isPublic: w_solana.isPublic,
			type: 'solana'
		},
		btc: {
			handle: w_btc.link,
			isPublic: w_btc.isPublic,
			type: 'btc'
		},
		near: {
			handle: w_near.link,
			isPublic: w_near.isPublic,
			type: 'near'
		},
		cardano: {
			handle: w_cardano.link,
			isPublic: w_cardano.isPublic,
			type: 'cardano'
		},
		// venom: {
		//   handle: w_venom.link,
		//   isPublic: w_venom.isPublic,
		//   type: 'venom',
		// },

		aptos: {
			handle: w_aptos.link,
			isPublic: w_aptos.isPublic,
			type: 'aptos'
		},
		cosmos: {
			handle: w_cosmos.link,
			isPublic: w_cosmos.isPublic,
			type: 'cosmos'
		},
		sui: {
			handle: w_sui.link,
			isPublic: w_sui.isPublic,
			type: 'sui'
		},
		icp: {
			handle: w_icp.link,
			isPublic: w_icp.isPublic,
			type: 'icp'
		},
		doge: {
			handle: w_doge.link,
			isPublic: w_doge.isPublic,
			type: 'doge'
		},
		lukso: {
			handle: w_lukso.link,
			isPublic: w_lukso.isPublic,
			type: 'lukso'
		},
		algorand: {
			handle: w_algorand.link,
			isPublic: w_algorand.isPublic,
			type: 'algorand'
		},
		tron: {
			handle: w_tron.link,
			isPublic: w_tron.isPublic,
			type: 'tron'
		},
		ton: {
			handle: w_ton.link,
			isPublic: w_ton.isPublic,
			type: 'ton'
		},
		polkadot: {
			handle: w_polkadot.link,
			isPublic: w_polkadot.isPublic,
			type: 'polkadot'
		},
		wallet1: {
			handle: w_wallet1.link,
			isPublic: w_wallet1.isPublic,
			type: 'wallet1',
			isVerified: true
		},
		wallet2: {
			handle: w_wallet2.link,
			isPublic: w_wallet2.isPublic,
			type: 'wallet2',
			isVerified: true
		},
		wallet3: {
			handle: w_wallet3.link,
			isPublic: w_wallet3.isPublic,
			type: 'wallet3',
			isVerified: true
		},
		wallet4: {
			handle: w_wallet4.link,
			isPublic: w_wallet4.isPublic,
			type: 'wallet4',
			isVerified: true
		},
		wallet5: {
			handle: w_wallet5.link,
			isPublic: w_wallet5.isPublic,
			type: 'wallet5',
			isVerified: true
		}
	}

	const decentralizedIdentifiers = {
		anima: {
			handle: d_anima.link,
			isPublic: d_anima.isPublic,
			type: 'anima'
		},
		worldId: {
			handle: d_worldId.link,
			isPublic: d_worldId.isPublic,
			type: 'worldId'
		},
		lens: {
			handle: d_lens.link,
			isPublic: d_lens.isPublic,
			type: 'lens'
		},
		ens: {
			handle: d_ens.link,
			isPublic: d_ens.isPublic,
			type: 'ens'
		},
		bnbNameService: {
			handle: d_bnb.link,
			isPublic: d_bnb.isPublic,
			type: 'bnbNameService'
		},

		demos: {
			handle: d_demos.link,
			isPublic: d_anima.isPublic,
			type: 'demos'
		}
	}

	return {
		name,
		profileImage,
		handle,
		userSocials,
		userMessagingApps,
		userWallets,
		decentralizedIdentifiers
	}
}

export const isBonuzWallet = (walletName: string) =>
	walletName === BONUZ_WALLET_NAME
