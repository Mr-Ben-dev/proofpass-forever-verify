

# 🌐 ProofPass

### Decentralized Identity. Verified Residency. On Filecoin.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-00BFFF?style=for-the-badge)](https://proofpass-forever-verify.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-0A1128?style=for-the-badge&logo=github)](https://github.com/Mr-Ben-dev/proofpass-forever-verify)
[![Filecoin](https://img.shields.io/badge/Powered_by-Filecoin-00D4FF?style=for-the-badge&logo=filecoin)](https://filecoin.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**The world's first decentralized proof-of-residency identity network**  
*Built on Filecoin Onchain Cloud*

[🎯 Live Demo](https://proofpass-forever-verify.vercel.app/) 

</div>

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

### 🔴 **\$56 Billion Lost**
Annual cost of identity fraud
*(2024 Global Report)*

</td>
<td>

### 🔴 **Zero Persistence**
Centralized systems can be hacked, deleted, or denied

</td>
</tr>
</table>

## ✨ The Solution

<div align="center">

### 📄 → 🤖 → 🔐 → ✅ → 🏆

**Upload Document → AI Verification → Filecoin Storage → PDP Proof → ProofStamp NFT**

**Your residency, validated. Forever on Filecoin.**

</div>

---

🎥 How It Works
🚀 Step 1: Upload & Verify
// 📤 User uploads proof document
const proof = await ProofPass.upload({
  document: utilityBill,
  type: 'UTILITY_BILL',
  ai_verify: true
});


✨ What happens here?

📑 Upload utility bills, leases, or government docs

🤖 AI extracts and validates address data

🔐 End-to-end encryption before storage

⛓️ Step 2: Store on Filecoin
// 💾 Store encrypted proof on Filecoin
const deal = await FilecoinWarmStorage.store({
  data: encryptedProof,
  duration: 'LIFETIME',
  redundancy: 10
});


✨ Why Filecoin?

🪶 Immutable storage via Filecoin deals

🔄 PDP (Proof of Data Possession) every 24h

🌍 Global replication across miners

✅ Step 3: Mint ProofStamp
// 🏆 Mint verification NFT (soulbound)
const stamp = await ProofPass.mint({
  wallet: userWallet,
  proofCID: deal.cid,
  verificationLevel: 'GOVERNMENT_GRADE'
});


✨ Key Benefits

🏅 Soulbound verification token (non-transferable)

📝 Contains encrypted metadata

⏰ Timestamped verification history

🔍 Step 4: Instant Verification
// ⚡ Anyone can verify residency
const isValid = await Synapse.verifyResidency(
  wallet,
  region,
  expiry
);


✨ Why it matters

⚡ Sub-second verification worldwide

🔒 Privacy-preserving (ZK proofs)

🌐 Works with any Web3 or Web2 app


