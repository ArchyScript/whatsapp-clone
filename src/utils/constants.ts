 
const activeDomain: string = "digiflex"

const giftcards = [
  {
    title: "Apple Gift card",
    icon: "giftcard-apple",
    range: "2 USD - 100 USD",
    color: "#000000",
    bestseller: true,
    spotlight: false,
    unique: true,
  }, 
]

const fundWithdrawalChannels  = [ 
  {
    value: "crypto_network",
    type: "withdraw",
    assetType: "crypto",
    title: "Send via crypto network",
    icon: "file-arrowup",
    description: "Recommended | Instant funding | Very low transaction fees",
  }, 
] 

export { giftcards, fundWithdrawalChannels, activeDomain }
