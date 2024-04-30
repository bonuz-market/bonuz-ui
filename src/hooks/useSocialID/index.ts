import { useAccount, useReadContract } from 'wagmi'
import { parseAbi } from 'viem'
import { useWalletInfo } from '@web3modal/wagmi/react'
import { isBonuzWallet, prepareSocialId } from './helpers'
import {
	BONUZ_SOCIAL_ID_ADDRESS,
	BONUZ_SOCIAL_ID_CHAIN,
	SUPPORTED_PLATFORMS,
    BonuzSocialIdAbi
} from './config'

export const useBonuzSocialWallet = () => {
	const { address } = useAccount()
	const { walletInfo } = useWalletInfo()

	return useReadContract({
		abi: parseAbi(BonuzSocialIdAbi),
		address: BONUZ_SOCIAL_ID_ADDRESS,
		functionName: 'getUserProfileAndSocialLinks',
		chainId: BONUZ_SOCIAL_ID_CHAIN.id,
		args: [address!, SUPPORTED_PLATFORMS],
		query: {
			enabled: !!walletInfo?.name && isBonuzWallet(walletInfo.name),
			select: prepareSocialId
		}
	})

}
