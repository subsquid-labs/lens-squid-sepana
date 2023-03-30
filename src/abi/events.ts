import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './events.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    BaseInitialized: new LogEvent<([name: string, symbol: string, timestamp: ethers.BigNumber] & {name: string, symbol: string, timestamp: ethers.BigNumber})>(
        abi, '0x414cd0b34676984f09a5f76ce9718d4062e50283abe0e7e274a9a5b4e0c99c30'
    ),
    CollectModuleWhitelisted: new LogEvent<([collectModule: string, whitelisted: boolean, timestamp: ethers.BigNumber] & {collectModule: string, whitelisted: boolean, timestamp: ethers.BigNumber})>(
        abi, '0x6cc19a794d6a439023150cd58748eed4353190c0bb060d2e6250e2df4a68b673'
    ),
    CollectNFTDeployed: new LogEvent<([profileId: ethers.BigNumber, pubId: ethers.BigNumber, collectNFT: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, pubId: ethers.BigNumber, collectNFT: string, timestamp: ethers.BigNumber})>(
        abi, '0x0b227b550ffed48af813b32e246f787e99581ee13206ba8f9d90d63615269b3f'
    ),
    CollectNFTInitialized: new LogEvent<([profileId: ethers.BigNumber, pubId: ethers.BigNumber, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, pubId: ethers.BigNumber, timestamp: ethers.BigNumber})>(
        abi, '0x898a2dec95856255977a0fb48cebc30051d50c0d8d33f93dea1e3ddb2e342442'
    ),
    CollectNFTTransferred: new LogEvent<([profileId: ethers.BigNumber, pubId: ethers.BigNumber, collectNFTId: ethers.BigNumber, from: string, to: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, pubId: ethers.BigNumber, collectNFTId: ethers.BigNumber, from: string, to: string, timestamp: ethers.BigNumber})>(
        abi, '0x68edb7ec2c37d21b3b72233960b487f2966f4ac82b7430d39f24d1f8d6f99106'
    ),
    Collected: new LogEvent<([collector: string, profileId: ethers.BigNumber, pubId: ethers.BigNumber, rootProfileId: ethers.BigNumber, rootPubId: ethers.BigNumber, collectModuleData: string, timestamp: ethers.BigNumber] & {collector: string, profileId: ethers.BigNumber, pubId: ethers.BigNumber, rootProfileId: ethers.BigNumber, rootPubId: ethers.BigNumber, collectModuleData: string, timestamp: ethers.BigNumber})>(
        abi, '0xed39bf0d9afa849610b901c9d7f4d00751ba20de2db023428065bec153833218'
    ),
    CommentCreated: new LogEvent<([profileId: ethers.BigNumber, pubId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, pubId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: ethers.BigNumber})>(
        abi, '0x7b4d1aa33773161799847429e4fbf29f56dbf1a3fe815f5070231cbfba402c37'
    ),
    DefaultProfileSet: new LogEvent<([wallet: string, profileId: ethers.BigNumber, timestamp: ethers.BigNumber] & {wallet: string, profileId: ethers.BigNumber, timestamp: ethers.BigNumber})>(
        abi, '0x0afd7c479e8bc7dcdb856b3cc27d2332dfe1f018fde574ea124919ddcae8a933'
    ),
    DispatcherSet: new LogEvent<([profileId: ethers.BigNumber, dispatcher: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, dispatcher: string, timestamp: ethers.BigNumber})>(
        abi, '0x22baaec4952f35f59e45bd2ddb287e1ccc6d319375770c09428eb8f8d604e065'
    ),
    EmergencyAdminSet: new LogEvent<([caller: string, oldEmergencyAdmin: string, newEmergencyAdmin: string, timestamp: ethers.BigNumber] & {caller: string, oldEmergencyAdmin: string, newEmergencyAdmin: string, timestamp: ethers.BigNumber})>(
        abi, '0x676c0801b0f400762e958ee31cfbb10870e70786f6761f57c8647e766b0db3d9'
    ),
    FeeModuleBaseConstructed: new LogEvent<([moduleGlobals: string, timestamp: ethers.BigNumber] & {moduleGlobals: string, timestamp: ethers.BigNumber})>(
        abi, '0x4e84a529f4c627b5e787037d117873af1018768804cca3c7f0d47041fe2c89ed'
    ),
    FollowModuleSet: new LogEvent<([profileId: ethers.BigNumber, followModule: string, followModuleReturnData: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, followModule: string, followModuleReturnData: string, timestamp: ethers.BigNumber})>(
        abi, '0x92d95e400932d129885e627b38b169cbb28443ffaaa282d0fba0cf8797721359'
    ),
    FollowModuleWhitelisted: new LogEvent<([followModule: string, whitelisted: boolean, timestamp: ethers.BigNumber] & {followModule: string, whitelisted: boolean, timestamp: ethers.BigNumber})>(
        abi, '0x52c5b7889df9f12f84ec3da051e854e5876678370d8357959c23ef59dd6486df'
    ),
    FollowNFTDelegatedPowerChanged: new LogEvent<([delegate: string, newPower: ethers.BigNumber, timestamp: ethers.BigNumber] & {delegate: string, newPower: ethers.BigNumber, timestamp: ethers.BigNumber})>(
        abi, '0xd9a6070174f4ccca76ed4896432e9a090b16e07e8fe27f275f50b33500b98e52'
    ),
    FollowNFTDeployed: new LogEvent<([profileId: ethers.BigNumber, followNFT: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, followNFT: string, timestamp: ethers.BigNumber})>(
        abi, '0x44403e38baed5e40df7f64ff8708b076c75a0dfda8380e75df5c36f11a476743'
    ),
    FollowNFTInitialized: new LogEvent<([profileId: ethers.BigNumber, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, timestamp: ethers.BigNumber})>(
        abi, '0xaec15127df11a6b562c87d31bcb8f4cd2f0cf57fb9b663d6334abf41fea94d95'
    ),
    FollowNFTTransferred: new LogEvent<([profileId: ethers.BigNumber, followNFTId: ethers.BigNumber, from: string, to: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, followNFTId: ethers.BigNumber, from: string, to: string, timestamp: ethers.BigNumber})>(
        abi, '0x4996ad2257e7db44908136c43128cc10ca988096f67dc6bb0bcee11d151368fb'
    ),
    FollowNFTURISet: new LogEvent<([profileId: ethers.BigNumber, followNFTURI: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, followNFTURI: string, timestamp: ethers.BigNumber})>(
        abi, '0xe82886e1af6fcab5caef13815b22f51384e970c367a785f265d13860a7d6966d'
    ),
    Followed: new LogEvent<([follower: string, profileIds: Array<ethers.BigNumber>, followModuleDatas: Array<string>, timestamp: ethers.BigNumber] & {follower: string, profileIds: Array<ethers.BigNumber>, followModuleDatas: Array<string>, timestamp: ethers.BigNumber})>(
        abi, '0x40487072dc56f384287d26fbe090f404143c2737d54632177451d1f74bd82c76'
    ),
    FollowsApproved: new LogEvent<([owner: string, profileId: ethers.BigNumber, addresses: Array<string>, approved: Array<boolean>, timestamp: ethers.BigNumber] & {owner: string, profileId: ethers.BigNumber, addresses: Array<string>, approved: Array<boolean>, timestamp: ethers.BigNumber})>(
        abi, '0xc67fc3972da5d6434ab7b796ba133c240d40ee4e69129963c5aa0f2a6f7c3ad6'
    ),
    FollowsToggled: new LogEvent<([owner: string, profileIds: Array<ethers.BigNumber>, enabled: Array<boolean>, timestamp: ethers.BigNumber] & {owner: string, profileIds: Array<ethers.BigNumber>, enabled: Array<boolean>, timestamp: ethers.BigNumber})>(
        abi, '0x5538c80c8d3bee397d87a7d153f7f085bb12adf2fe25a026c7cc4e83d8c5f1d7'
    ),
    GovernanceSet: new LogEvent<([caller: string, prevGovernance: string, newGovernance: string, timestamp: ethers.BigNumber] & {caller: string, prevGovernance: string, newGovernance: string, timestamp: ethers.BigNumber})>(
        abi, '0xe552a55455b740845a5c07ed445d1724142fc997b389835495a29b30cddc1ccd'
    ),
    MirrorCreated: new LogEvent<([profileId: ethers.BigNumber, pubId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, pubId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: ethers.BigNumber})>(
        abi, '0x9ea5dedb85bd9da4e264ee5a39b7ba0982e5d4d035d55edfa98a36b00e770b5a'
    ),
    ModuleBaseConstructed: new LogEvent<([hub: string, timestamp: ethers.BigNumber] & {hub: string, timestamp: ethers.BigNumber})>(
        abi, '0xf1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c'
    ),
    ModuleGlobalsCurrencyWhitelisted: new LogEvent<([currency: string, prevWhitelisted: boolean, whitelisted: boolean, timestamp: ethers.BigNumber] & {currency: string, prevWhitelisted: boolean, whitelisted: boolean, timestamp: ethers.BigNumber})>(
        abi, '0x79c3cefc851fd6040f06af202c542818d9fb39bcddcb7a7e3f563b15300a2743'
    ),
    ModuleGlobalsGovernanceSet: new LogEvent<([prevGovernance: string, newGovernance: string, timestamp: ethers.BigNumber] & {prevGovernance: string, newGovernance: string, timestamp: ethers.BigNumber})>(
        abi, '0xbf538a2c0db3d440906b8179dd0394f68a65b0b1481da70ffee24e19dccee84c'
    ),
    ModuleGlobalsTreasuryFeeSet: new LogEvent<([prevTreasuryFee: number, newTreasuryFee: number, timestamp: ethers.BigNumber] & {prevTreasuryFee: number, newTreasuryFee: number, timestamp: ethers.BigNumber})>(
        abi, '0xec936862e6bb897cd711a5f31825057583128c2a482f0a4c9a4e6c3fd7c023f4'
    ),
    ModuleGlobalsTreasurySet: new LogEvent<([prevTreasury: string, newTreasury: string, timestamp: ethers.BigNumber] & {prevTreasury: string, newTreasury: string, timestamp: ethers.BigNumber})>(
        abi, '0x3dfc53d6b49bfbc932b215ba515f0d0ab0e17aac17726fba48075f0c16c7ffe3'
    ),
    PostCreated: new LogEvent<([profileId: ethers.BigNumber, pubId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, pubId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: ethers.BigNumber})>(
        abi, '0xc672c38b4d26c3c978228e99164105280410b144af24dd3ed8e4f9d211d96a50'
    ),
    ProfileCreated: new LogEvent<([profileId: ethers.BigNumber, creator: string, to: string, handle: string, imageURI: string, followModule: string, followModuleReturnData: string, followNFTURI: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, creator: string, to: string, handle: string, imageURI: string, followModule: string, followModuleReturnData: string, followNFTURI: string, timestamp: ethers.BigNumber})>(
        abi, '0x4e14f57cff7910416f2ef43cf05019b5a97a313de71fec9344be11b9b88fed12'
    ),
    ProfileCreatorWhitelisted: new LogEvent<([profileCreator: string, whitelisted: boolean, timestamp: ethers.BigNumber] & {profileCreator: string, whitelisted: boolean, timestamp: ethers.BigNumber})>(
        abi, '0x8f617843889b94892bd44852d36ca6a7f49ecf4350a01e7b68e22d80f4ed95bc'
    ),
    ProfileImageURISet: new LogEvent<([profileId: ethers.BigNumber, imageURI: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, imageURI: string, timestamp: ethers.BigNumber})>(
        abi, '0xd5a5879cad33c830cc1432c1850107029a09c80c60e9bce1ecd08d24880bd46c'
    ),
    ProfileMetadataSet: new LogEvent<([profileId: ethers.BigNumber, metadata: string, timestamp: ethers.BigNumber] & {profileId: ethers.BigNumber, metadata: string, timestamp: ethers.BigNumber})>(
        abi, '0xf901a8b3832914a45999dd4c425fbe42eb4182724d394100401e633d9f0b286a'
    ),
    ReferenceModuleWhitelisted: new LogEvent<([referenceModule: string, whitelisted: boolean, timestamp: ethers.BigNumber] & {referenceModule: string, whitelisted: boolean, timestamp: ethers.BigNumber})>(
        abi, '0x37872a053ef20cb52defb7c9ec20e1a87cb8dd5098ac9e76a144be263dfef572'
    ),
    StateSet: new LogEvent<([caller: string, prevState: number, newState: number, timestamp: ethers.BigNumber] & {caller: string, prevState: number, newState: number, timestamp: ethers.BigNumber})>(
        abi, '0xa2f9a1499fc1f9b7796d21fe5761290ccb7e0ef6ccf35fa58b668f304a62a1ca'
    ),
}

export class Contract extends ContractBase {
}
