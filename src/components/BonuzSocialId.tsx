import { useBonuzSocialWallet } from '../hooks/useSocialID'
import { isBonuzWallet } from '../hooks/useSocialID/helpers'
import { useWalletInfo } from '@web3modal/wagmi/react'
import Image from 'next/image'

import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { HiXCircle } from 'react-icons/hi'
import { useAccount } from 'wagmi'

interface BonuzIdModalProps {
	address: string;
}
const BonuzIdModal = ({ address }: BonuzIdModalProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				className="rounded-full bg-indigo-500 p-2 shadow-lg border-none cursor-pointer"
				onClick={() => setIsOpen((state) => !state)}
			>
				{!isOpen ? (
					<Image
						src={'https://bonuz.market/_next/static/media/icon-1.d33d96ee.svg'}
						width={48}
						height={48}
						alt="bonuz"
					/>
				) : (
					<HiXCircle size={48} />
				)}
			</button>
			<Transition appear show={isOpen} as={Fragment}>
				<div className="fixed bottom-24 right-4 overflow-y-auto">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<iframe
							src={`https://bonuz.id/${address}`}
							width="400px"
							height="450px"
							className="border-none rounded bg-gray-800"
						/>
					</Transition.Child>
				</div>
			</Transition>
		</>
	)
}

export const BonuzSocialId = () => {
	const { walletInfo } = useWalletInfo()
	const isEnabled = !!walletInfo?.name && isBonuzWallet(walletInfo.name)
	const { data } = useBonuzSocialWallet()
	const { address } = useAccount()

	if (!isEnabled) return null

	console.log(data, 'bonuz social id')

	return (
		<div className="fixed bottom-4 right-4">
			<BonuzIdModal address={address!} />
		</div>
	)
}
