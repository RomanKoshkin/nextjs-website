const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const protoPath = path.join(__dirname, '../public/analytics_proto.js');
const outputPath = path.join(__dirname, '../public/analytics.js');

// Copy prototype file to analytics.js
let content = fs.readFileSync(protoPath, 'utf8');

// Replace the placeholder with the actual Google Analytics Tracking ID from environment variables
const trackingId = process.env.NEXT_PUBLIC_GTAG_ID;
content = content.replace('%%GA_TRACKING_ID%%', trackingId);

// Write the modified content to analytics.js
fs.writeFileSync(outputPath, content);
