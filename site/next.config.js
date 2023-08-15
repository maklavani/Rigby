/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')

// Production
const isProd = process.env.NODE_ENV === 'production'

// PWA
const withPWA = require('next-pwa')({
	dest: 'public',
	maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
})

// Analyze
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

// Configurations
const nextConfig = {
	// output: 'standalone',
	output: 'export',
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	sassOptions: { includePaths: [path.join(__dirname, 'styles')] }
}

module.exports = withBundleAnalyzer(isProd ? withPWA(nextConfig) : nextConfig)
