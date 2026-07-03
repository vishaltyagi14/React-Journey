const express = require('express')
const {rateLimit} = require('express-rate-limit')
const app= express()

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	limit: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

app.get('/',limiter, (req, res) => {
  res.status(200).json({
    message: 'Working Fine',
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});