/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      'https://cnft.pictures/PXpVUSnUT9LOa8BzqGp9oM4WUOjwjjhIgmlOX2YsqwI/rs:fit:500:500:0:0/g:no/aHR0cHM6Ly9pcGZzMi5qcGdzdG9yZWFwaXMuY29tL2lwZnMvUW1XdFJhZmVNZ2pQRXY1NFZNYWtTTnp6MXdvV2czM0hxN2IyWlg2RGhrV3o4dQ.webp',
      'https://cnft.pictures/ZkhjL8eqQet3Gk1Le2y3oXiylexPiBv6HOqLE6XWyvo/rs:fit:500:500:0:0/g:no/aHR0cHM6Ly9pcGZzMi5qcGdzdG9yZWFwaXMuY29tL2lwZnMvUW1QWllwWWE1dUt6NVR5b1lwV0FMWkNLTHhuOUFXR2FMNGo1a3pOdHVYRHlFdA.webp',
      'cnft.pictures',
      'https://ipfs.io/ipfs/QmWtRafeMgjPEv54VMakSNzz1woWg33Hq7b2ZX6DhkWz8u',
      'https://ipfs.io/ipfs/QmfDHaUbmFj8adE4Axzcaj6M2jHDzfX329Cu9Np3W14hnd',
      'https://ipfs.io/ipfs/QmenDCdf8eKteNganDVssbvJw6ELNvtuJPKFNj4LYeoefz',
      'ipfs.io',
      'https://res.cloudinary.com/dtenabvfv/image/upload/v1700818398/j9rz3ropykrz013rzevr.png',
      'res.cloudinary.com',
      'https://images.pexels.com',
      'https:/res.cloudinary.com/',
      'lh3.googleusercontent.com',
      'cdn.discordapp.com',
      'images.jpgstoreapis.com',
      "storage.googleapis.com",
      'arweave.net',
      'https://ymsnf3yqbyy6n75nd5663bfjgzo4udko7ibrdxubdvuugszn35ia.arweave.net',
      'https://27edyvkbiykc3ft663ig3e66tz5gzeyiaullpiw3obfjsz2izusq.arweave.net',
    ],
    unoptimized: true,
  },

  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}
