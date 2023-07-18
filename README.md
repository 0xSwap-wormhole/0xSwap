# 0xSwap v0

Welcome to 0xSwap - the future of volatility trading. 0xSwap is an intermediary liquidity pool that enables trading volatility using UniSwap. Our application is powered by smart contracts that implement pools of tokens where traders can swap their tokens.

## Table of Contents
- [Problem](#problem)
- [Solution](#solution)
- [Why 0xSwap?](#why-0xswap)
- [User Flow](#user-flow)
- [Technologies Used](#technologies-used)

## Problem
Currently, UniSwap users cannot buy volatility since they are only able to deposit ETH-based funds and can only withdraw what they previously deposited. There is no way to borrow liquidity from the existing pool.

## Solution
0xSwap's value proposition is to allow traders to buy volatility from UniSwap. This is achieved by using the 0xSwap pool (0xSP). Liquidity lenders will provide liquidity to UniSwap via 0xSP.

## Why 0xSwap?
- Eliminate Impermanent Loss: Liquidity providers on UniSwap face impermanent loss due to volatility. 0xSwap mitigates this risk by enabling traders to buy volatility instead of selling it, reducing exposure to impermanent loss.
- Decentralized Volatility Trading: We aim to pioneer decentralized volatility trading without intermediaries, providing a new DeFi use case and financial instrument.
- Cross-Chain Borrow-Lend: 0xSwap supports cross-chain value transfer, allowing users to leverage assets from different chains through the Wormhole bridge.

## User Flow
1. User buys crypto with cash using Transak.
2. User transfers crypto across different chains using the Wormhole bridge.
3. User interacts with the 0xSwap app to lend or borrow volatility.
4. User transfers crypto back to different chains using the Wormhole bridge.

## Technologies Used
- Solana, Ethereum, Polygon, Algorand: Use DataHub to deploy the app on multiple chains.
- Storj: Store LP NFTs in decentralized cloud storage.
- Skynet's Homescreen: Enable hackers to add frontend for Skynet's Homescreen.
- Transak: Allow users to buy crypto with cash.
- Wormhole SDK: Facilitate cross-chain value transfer.



