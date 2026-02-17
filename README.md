# URL Encoder/Decoder

A simple, elegant static website for encoding and decoding URLs. Perfect for developers who need quick URL encoding/decoding without leaving their browser.

## Features

- 🔒 **URL Encoder** - Convert text to URL-safe format
- 🔓 **URL Decoder** - Convert encoded URLs back to readable text
- 📋 **Copy to Clipboard** - One-click copying of results
- ⌨️ **Keyboard Shortcuts** - Press Ctrl/Cmd + Enter to encode/decode
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- ⚡ **Fast & Lightweight** - Pure HTML, CSS, and JavaScript

## Demo

Visit the live demo: [Your GitHub Pages URL]

## Usage

1. **Encoding**: Enter text in the encoder section and click "Encode" or press Ctrl/Cmd + Enter
2. **Decoding**: Enter URL-encoded text in the decoder section and click "Decode" or press Ctrl/Cmd + Enter
3. **Copy**: Click the "Copy Result" button to copy the output to clipboard
4. **Clear**: Click "Clear" to reset the inputs and outputs

## Deploy to GitHub Pages

### Before Deploying: Update SEO Settings

**Important:** Before deploying, update the following URLs in your files to match your actual GitHub Pages URL:

1. In `index.html`, replace all instances of `https://yourusername.github.io/url-endecoder/` with your actual URL
2. In `sitemap.xml`, update the URL to your actual GitHub Pages URL
3. In `robots.txt`, update the sitemap URL

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `url-encoder-decoder`)
2. Upload all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Go to repository Settings → Pages
4. Under "Source", select the main branch
5. Click Save
6. Your site will be available at `https://yourusername.github.io/url-encoder-decoder/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - URL Encoder/Decoder"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/url-encoder-decoder.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in your repository settings as described in Method 1.

## Local Development

Simply open `index.html` in your web browser. No build process or server required!

Or use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## SEO Optimization

This project includes comprehensive SEO optimization:

### Meta Tags
- **Primary Meta Tags**: Title, description, keywords for search engines
- **Open Graph Tags**: Optimized for Facebook and LinkedIn sharing
- **Twitter Cards**: Enhanced Twitter sharing with large images
- **Canonical URL**: Prevents duplicate content issues

### Structured Data
- **Schema.org JSON-LD**: Helps Google understand your web application
- Application type, features, and pricing information included

### Search Engine Files
- **robots.txt**: Tells search engines which pages to crawl
- **sitemap.xml**: Helps search engines discover all pages
- **Semantic HTML5**: Proper use of header, main, footer, and ARIA labels

### Keywords Targeted
- URL encoder, URL decoder, percent encoding
- Online URL tools, web development utilities
- Encode/decode URLs free online

### SEO Best Practices Implemented
✅ Descriptive, keyword-rich title (under 60 characters)
✅ Compelling meta description (under 160 characters)
✅ Semantic HTML5 structure
✅ Mobile-responsive design
✅ Fast loading time (no external dependencies)
✅ HTTPS ready
✅ Accessibility features (ARIA labels)
✅ Social media preview images ready

### After Deployment: Submit to Search Engines
1. **Google Search Console**: Submit your sitemap.xml
2. **Bing Webmaster Tools**: Verify and submit your site
3. **Share on social media**: To generate backlinks and traffic

## Usage Analytics Tracking

This project includes Google Analytics integration to track:
- **Page views**: How many people visit your site
- **Encode/Decode actions**: How often users use each tool
- **Copy actions**: How often users copy results
- **User demographics**: Where your users are from
- **Real-time users**: See who's using your tool right now

### Setup Google Analytics:

1. **Create a Google Analytics account**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Sign in and create a new property
   - Choose "Web" as the platform
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Add your Measurement ID**:
   - Open `index.html`
   - Replace `GA_MEASUREMENT_ID` (appears twice) with your actual ID
   - Example: `G-ABC123DEF4`

3. **View your analytics**:
   - Visit [Google Analytics](https://analytics.google.com/)
   - Check real-time reports, user demographics, and event tracking
   - See which features are most used

### Events Tracked:
- ✅ URL Encoding actions
- ✅ URL Decoding actions  
- ✅ Copy to clipboard actions
- ✅ Page views and sessions
- ✅ User locations and devices

### Privacy Considerations:
- Google Analytics is GDPR compliant
- No personal data is collected
- Only anonymous usage statistics
- Consider adding a privacy policy if needed

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- No external dependencies or frameworks

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

Free to use and modify for personal and commercial projects.

## Contributing

Feel free to fork, modify, and submit pull requests!

## Contact

If you have any questions or suggestions, feel free to open an issue.

---

Made with ❤️ by [Your Name]
