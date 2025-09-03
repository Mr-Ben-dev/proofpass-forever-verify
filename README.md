
# 🌐 ProofPass

### Decentralized Identity. Verified Residency. On Filecoin.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-00BFFF?style=for-the-badge)](https://proofpass-forever-verify.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-0A1128?style=for-the-badge&logo=github)](https://github.com/Mr-Ben-dev/proofpass-forever-verify)
[![Filecoin](https://img.shields.io/badge/Powered_by-Filecoin-00D4FF?style=for-the-badge&logo=filecoin)](https://filecoin.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**The world's first decentralized proof-of-residency identity network**  
*Built on Filecoin Onchain Cloud*

[🎯 Live Demo](https://proofpass-forever-verify.vercel.app/) 

---

## ⚡ The Problem

<table>
<tr>
<td width="50%">

### 🔴 **2.3 Billion People**
Lack trusted identity documents globally  
*(Source: World Bank)*

</td>
<td width="50%">

### 🔴 **900% Increase**
In AI deepfakes since 2023  
*(Identity fraud crisis)*

</td>
</tr>
<tr>
<td>

### 🔴 **$56 Billion Lost**
Annual cost of identity fraud  
*(2024 Global Report)*

</td>
<td>

### 🔴 **Zero Persistence**
Centralized systems can be hacked, deleted, or denied

</td>
</tr>
</table>

---

## ✨ The Solution

<div align="center">

### 📄 → 🤖 → 🔐 → ✅ → 🏆

**Upload Document → AI Verification → Filecoin Storage → PDP Proof → ProofStamp NFT**

**Your residency, validated. Forever on Filecoin.**

</div>

---

## 🎥 How It Works

### 🚀 Step 1: Upload & Verify  

```ts
// 📤 User uploads proof document
const proof = await ProofPass.upload({
  document: utilityBill,
  type: 'UTILITY_BILL',
  ai_verify: true
});
````

✨ **What happens here?**

* 📑 Upload **utility bills, leases, or government docs**
* 🤖 AI **extracts and validates** address data
* 🔐 **End-to-end encryption** before storage

---

### ⛓️ Step 2: Store on Filecoin

```ts
// 💾 Store encrypted proof on Filecoin
const deal = await FilecoinWarmStorage.store({
  data: encryptedProof,
  duration: 'LIFETIME',
  redundancy: 10
});
```

✨ **Why Filecoin?**

* 🪶 **Immutable storage** via Filecoin deals
* 🔄 **PDP (Proof of Data Possession)** every 24h
* 🌍 **Global replication** across miners

---

### ✅ Step 3: Mint ProofStamp

```ts
// 🏆 Mint verification NFT (soulbound)
const stamp = await ProofPass.mint({
  wallet: userWallet,
  proofCID: deal.cid,
  verificationLevel: 'GOVERNMENT_GRADE'
});
```

✨ **Key Benefits**

* 🏅 **Soulbound verification token** (non-transferable)
* 📝 Contains **encrypted metadata**
* ⏰ **Timestamped** verification history

---

### 🔍 Step 4: Instant Verification

```ts
// ⚡ Anyone can verify residency
const isValid = await Synapse.verifyResidency(
  wallet,
  region,
  expiry
);
```

✨ **Why it matters**

* ⚡ **Sub-second verification** worldwide
* 🔒 **Privacy-preserving** (ZK proofs)
* 🌐 Works with **any Web3 or Web2 app**

---

## 🏗️ Architecture

| Layer        | Technology          | Purpose                            |
| ------------ | ------------------- | ---------------------------------- |
| 🎨 Frontend  | React + Three.js    | Cinematic UI with glassmorphism    |
| 🧠 AI Engine | TensorFlow\.js      | Document parsing & fraud detection |
| ⛓️ Storage   | FilecoinWarmStorage | Immutable proof storage + PDP      |
| ⚡ CDN        | FilCDN              | <1s global retrieval               |
| 💰 Payments  | FilecoinPay         | \$5 USDFC verification fees        |
| 🔧 SDK       | Synapse             | Unified API for all services       |

```
┌─────────────────────────────────────────────────────┐
│                   USER INTERFACE                     │
│         (React + Three.js + Glassmorphism)          │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│                  AI PARSER                          │
│         (Document Extraction & Validation)          │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│            FILECOIN ONCHAIN CLOUD                   │
├──────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  Warm    │  │   PDP    │  │  FilCDN  │           │
│  │ Storage  │──│  Proofs  │──│  <1s SLA │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                      │
│  ┌──────────────────────────────────────┐            │
│  │         FilecoinPay ($5 USDFC)        │           │
│  └──────────────────────────────────────┘            │
└──────────────────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│                PROOFSTAMP NFT                       │
│            (Soulbound Verification Token)           │
└──────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites

* Node.js 18+
* Filecoin Wallet
* 10 FIL for testing

### Installation

```bash
# Clone the repository
git clone https://github.com/Mr-Ben-dev/proofpass-forever-verify
cd proofpass-forever-verify

# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Add your Filecoin API keys

# Run development server
npm run dev
```

---

## 🔥 Features

* 🤖 **AI-Powered** – Smart document parsing with fraud detection
* ⛓️ **Blockchain-Secured** – Immutable storage on Filecoin
* ⚡ **Instant Access** – <1s global retrieval via FilCDN
* 🔒 **Privacy-First** – ZK proofs + encryption
* 🌍 **Global Scale** – Works in 195 countries
* 💰 **Self-Sustaining** – \$5 verification fees via FilecoinPay

---

## 📊 Use Cases

### 🏠 Remote Workers

* Prove residency for tax purposes
* Verify address for employer compliance
* Access location-based services

### 🌍 Refugees & Displaced Persons

* Create permanent identity records
* Access humanitarian aid
* Apply for asylum with verified docs

### 🏦 DeFi & Web3

* KYC/AML compliance without doxxing
* Credit scoring based on residency history
* DAO voting eligibility

### 🏛️ Government Services

* Digital visa applications
* Social benefit distribution
* Census and voting verification

---

## 🧑‍💻 API Reference

```ts
import { Synapse, ProofPass } from '@proofpass/sdk';

// Initialize
const proofpass = new ProofPass({
  network: 'mainnet',
  apiKey: process.env.PROOFPASS_API_KEY
});

// Verify residency
const verification = await proofpass.verify({
  wallet: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb4',
  region: 'US-CA',
  minDuration: 90 // days
});

// Response
{
  valid: true,
  proofCID: 'bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi',
  verifiedAt: '2025-01-15T10:30:00Z',
  expiresAt: '2026-01-15T10:30:00Z'
}
```

---

## 💡 Why ProofPass?

| Traditional Systems        | ProofPass                   |
| -------------------------- | --------------------------- |
| ❌ Centralized databases    | ✅ Decentralized on Filecoin |
| ❌ Can be hacked or deleted | ✅ Immutable & permanent     |
| ❌ Slow verification (days) | ✅ Instant (<1 second)       |
| ❌ High fees (\$50–200)     | ✅ Low cost (\$5)            |
| ❌ Regional limitations     | ✅ Global accessibility      |

---

## 🏆 Technical Innovation

* 🔍 **PDP for Residency** – First use of Proof of Data Possession to prove persistence
* 💳 **FilecoinPay Integration** – Users pay \$1–5 in USDFC/FIL (self-sustaining, no grants)
* 🔧 **Synapse SDK as Identity Layer** – One-call verification `Synapse.verifyResidency(wallet)`
* ⚡ **FilCDN for Instant Access** – Global retrieval in <1s
* 🤝 **GTM Strategy** – Partnerships with NGOs, nomad platforms, and DeFi protocols

---

## 🤝 Contributing

We love contributions! See **CONTRIBUTING.md** for guidelines.

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m 'Add some AmazingFeature'

# Push to the branch
git push origin feature/AmazingFeature

# Open a Pull Request
```

---

## 📜 License

MIT © 2025 ProofPass. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

* **Filecoin Foundation** – For Onchain Cloud infrastructure
* **Protocol Labs** – For IPFS and libp2p
* **WaveHack Community** – For feedback and support

```


Do you want me to also add **step badges** (like [![Step 1](https://img.shields.io/badge/Step_1-Upload-blue)]()) for each step header so they look even more like a flow?
```
