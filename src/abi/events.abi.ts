export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "BaseInitialized",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "string",
                "name": "symbol",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "collectModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTDeployed",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collectNFT",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTInitialized",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "collectNFTId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Collected",
        "inputs": [
            {
                "type": "address",
                "name": "collector",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "rootProfileId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rootPubId",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "collectModuleData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CommentCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "contentURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "profileIdPointed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "pubIdPointed",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "collectModuleReturnData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DefaultProfileSet",
        "inputs": [
            {
                "type": "address",
                "name": "wallet",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DispatcherSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "dispatcher",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EmergencyAdminSet",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "oldEmergencyAdmin",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newEmergencyAdmin",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeModuleBaseConstructed",
        "inputs": [
            {
                "type": "address",
                "name": "moduleGlobals",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowModuleSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "followModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "followModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "followModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTDelegatedPowerChanged",
        "inputs": [
            {
                "type": "address",
                "name": "delegate",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newPower",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTDeployed",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "followNFT",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTInitialized",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "followNFTId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowNFTURISet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "followNFTURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Followed",
        "inputs": [
            {
                "type": "address",
                "name": "follower",
                "indexed": true
            },
            {
                "type": "uint256[]",
                "name": "profileIds",
                "indexed": false
            },
            {
                "type": "bytes[]",
                "name": "followModuleDatas",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowsApproved",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "addresses",
                "indexed": false
            },
            {
                "type": "bool[]",
                "name": "approved",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FollowsToggled",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256[]",
                "name": "profileIds",
                "indexed": false
            },
            {
                "type": "bool[]",
                "name": "enabled",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "GovernanceSet",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "prevGovernance",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newGovernance",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MirrorCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "profileIdPointed",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "pubIdPointed",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleBaseConstructed",
        "inputs": [
            {
                "type": "address",
                "name": "hub",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsCurrencyWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "currency",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "prevWhitelisted",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsGovernanceSet",
        "inputs": [
            {
                "type": "address",
                "name": "prevGovernance",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newGovernance",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsTreasuryFeeSet",
        "inputs": [
            {
                "type": "uint16",
                "name": "prevTreasuryFee",
                "indexed": true
            },
            {
                "type": "uint16",
                "name": "newTreasuryFee",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ModuleGlobalsTreasurySet",
        "inputs": [
            {
                "type": "address",
                "name": "prevTreasury",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newTreasury",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PostCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pubId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "contentURI",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "collectModuleReturnData",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "referenceModuleReturnData",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "string",
                "name": "handle",
                "indexed": false
            },
            {
                "type": "string",
                "name": "imageURI",
                "indexed": false
            },
            {
                "type": "address",
                "name": "followModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "followModuleReturnData",
                "indexed": false
            },
            {
                "type": "string",
                "name": "followNFTURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileCreatorWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "profileCreator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileImageURISet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "imageURI",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProfileMetadataSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "profileId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReferenceModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "referenceModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StateSet",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "prevState",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "newState",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    }
]
