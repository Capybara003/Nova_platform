export const API_ENDPOINTS = {
  AUTH: {},
  PRIVATE: {
    UPDATE_PROFILE: 'auth/update-profile',
    GET_USER: 'auth/user-details/',
    POST_USER_NAME: 'auth/update-profile',
    RESET_PASSWORD: 'auth/change-password',
    POST_WALLET: 'wallet/create-wallet',
    BINANCE_TOKEN: 'collections/getHoldingAsset',
    COINBASE_TOKEN: 'collections/getHoldingAsset',
    GENERATE_NONCE: 'wallet/generate-nonce',
    VERIFY_SIGNATURE: 'wallet/verify-signature',
    LIST: 'wallet/list',
    GET_USER_PORFOLIO: 'collections/getUserPortfolio',
    GET_HOLDING_AND_GRAIN: 'collections/getHoldingsAndGrains',
    GET_HOLDING_GRAPH: 'graph',
    GET_TAXIABLE_DETAILS: 'collections/taxable-details',
    GET_MARKET: 'market',
    GET_TREE_MAP: 'market/heatmap',
  },

  PUBLIC: {
    GET_HOLDING:
      'collections/all-nft/addr1qyf6cdhh0gn246dt92ac97sgrct9dteaqn85hutzemak4j9s2fhw5xj4gzh5feq0fursxsrman00lvy9cl9un6n84msswxthgn',
    POST_ASSETS_DETAILS: 'assets/asset-details',
    GET_PORTFOLIO:
      'assets/portfolio?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_INCOME:
      'assets/income?address=addr1zyq0kyrml023kwjk8zr86d5gaxrt5w8lxnah8r6m6s4jp4g3r6dxnzml343sx8jweqn4vn3fz2kj8kgu9czghx0jrsyqqktyhv',
    GET_TAXES_CAPITAL:
      'assets/tax-capital?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_PORTFOLIO_V2: 'collections/sold-assets',
    GET_HOLDING_ASSETS:
      'assets/userHoldingAssets?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_TAXIABLE_GAIN:
      'assets/getTaxableGain?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_HOLDING_COLLECTION: 'collections/getHoldingAsset',
  },
} as const

export const QUERIES = {
  AUTH: {},
  PRIVATE: {
    UPDATE_PROFILE: 'auth/update-profile',
    GET_USER: 'auth/user-details/',
    POST_USER_NAME: 'auth/update-profile',
    RESET_PASSWORD: 'auth/change-password',
    POST_WALLET: 'wallet/create-wallet',
    GENERATE_NONCE: '/wallet/generate-nonce',
    VERIFY_SIGNATURE: 'wallet/verify-signature',
    LIST: 'wallet/list',
    GET_USER_PORFOLIO: 'collections/getUserPortfolio',
    GET_HOLDING_AND_GRAIN: 'collections/getHoldingsAndGrains',
    GET_HOLDING_GRAPH: 'graph',
    GET_TAXIABLE_DETAILS: 'collections/taxable-details',
    GET_MARKET: 'market',
    GET_TREE_MAP: 'market/heatmap',
  },
  PUBLIC: {
    GET_HOLDING:
      'collections/all-nft/addr1qyf6cdhh0gn246dt92ac97sgrct9dteaqn85hutzemak4j9s2fhw5xj4gzh5feq0fursxsrman00lvy9cl9un6n84msswxthgn',
    GET_USER: '/auth/user-details/',
    POST_USER_NAME: 'auth/update-profile',
    RESET_PASSWORD: 'auth/change-password',
    POST_ASSETS_DETAILS: 'assets/asset-details',
    GET_PORTFOLIO:
      'assets/portfolio?address=addr1zyq0kyrml023kwjk8zr86d5gaxrt5w8lxnah8r6m6s4jp4g3r6dxnzml343sx8jweqn4vn3fz2kj8kgu9czghx0jrsyqqktyhv',
    GET_INCOME:
      'assets/income?address=addr1zyq0kyrml023kwjk8zr86d5gaxrt5w8lxnah8r6m6s4jp4g3r6dxnzml343sx8jweqn4vn3fz2kj8kgu9czghx0jrsyqqktyhv',
    GET_TAXES_CAPITAL:
      'assets/tax-capital?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_PORTFOLIO_V2:
      'assets/portfolio/v2?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_HOLDING_ASSETS:
      'assets/userHoldingAssets?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
    GET_TAXIABLE_GAIN:
      'assets/getTaxableGain?address=addr1qxgscmhpp7qnnc0qv6rs2fk34tgath7nzhjq90x9ens233cxtaluc9l6as5lfvm7njvs05fqr0lkedye7lszfepzehusmucnm6',
  },
} as const
