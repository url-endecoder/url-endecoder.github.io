// URL Encoder Function
function encodeURL() {
    const input = document.getElementById('encodeInput').value;
    const output = document.getElementById('encodeOutput');
    
    if (!input.trim()) {
        showToast('Please enter text to encode', 'error');
        return;
    }
    
    try {
        const encoded = encodeURIComponent(input);
        output.value = encoded;
        showToast('Text encoded successfully!', 'success');
        
        // Track event in Google Analytics
        trackEvent('encode', 'URL Encoder', 'Text Encoded');
    } catch (error) {
        showToast('Error encoding text', 'error');
        console.error(error);
    }
}

// URL Decoder Function
function decodeURL() {
    const input = document.getElementById('decodeInput').value;
    const output = document.getElementById('decodeOutput');
    
    if (!input.trim()) {
        showToast('Please enter text to decode', 'error');
        return;
    }
    
    try {
        const decoded = decodeURIComponent(input);
        output.value = decoded;
        showToast('Text decoded successfully!', 'success');
        
        // Track event in Google Analytics
        trackEvent('decode', 'URL Decoder', 'Text Decoded');
    } catch (error) {
        showToast('Error decoding text - invalid URL encoding', 'error');
        console.error(error);
    }
}

// Clear Encode Section
function clearEncode() {
    document.getElementById('encodeInput').value = '';
    document.getElementById('encodeOutput').value = '';
    showToast('Encoder cleared', 'success');
}

// Clear Decode Section
function clearDecode() {
    document.getElementById('decodeInput').value = '';
    document.getElementById('decodeOutput').value = '';
    showToast('Decoder cleared', 'success');
}

// Copy Encoded Result
function copyEncoded() {
    const output = document.getElementById('encodeOutput');
    copyToClipboard(output.value, 'Encoded text copied to clipboard!');
    trackEvent('copy', 'Copy Action', 'Copied Encoded Text');
}

// Copy Decoded Result
function copyDecoded() {
    const output = document.getElementById('decodeOutput');
    copyToClipboard(output.value, 'Decoded text copied to clipboard!');
    trackEvent('copy', 'Copy Action', 'Copied Decoded Text');
}

// Helper function to copy text to clipboard
function copyToClipboard(text, successMessage) {
    if (!text) {
        showToast('Nothing to copy', 'error');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage, 'success');
    }).catch(err => {
        // Fallback method for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            showToast(successMessage, 'success');
        } catch (error) {
            showToast('Failed to copy', 'error');
        }
        
        document.body.removeChild(textarea);
    });
}

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add keyboard shortcuts
document.addEventListener('DOMContentLoaded', () => {
    // Auto-encode on Ctrl/Cmd + Enter in encode input
    document.getElementById('encodeInput').addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            encodeURL();
        }
    });
    
    // Auto-decode on Ctrl/Cmd + Enter in decode input
    document.getElementById('decodeInput').addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            decodeURL();
        }
    });
});

// Google Analytics Event Tracking
function trackEvent(action, category, label) {
    // Check if gtag is available (Google Analytics loaded)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}
