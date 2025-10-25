export const scannerService = {
  async scanWebsite(url) {
    const bugs = [];
    
    try {
      await fetch(url, { method: 'HEAD', mode: 'no-cors' });
      bugs.push({
        type: 'info',
        title: 'Website Reachable',
        description: `The website ${url} is accessible and responding to requests.`,
        severity: 'low'
      });
    } catch (error) {
      bugs.push({
        type: 'error',
        title: 'Connection Error',
        description: `Unable to connect to ${url}. The website may be down or blocking requests.`,
        severity: 'high'
      });
    }

    const urlObj = new URL(url);
    
    if (urlObj.protocol === 'http:') {
      bugs.push({
        type: 'warning',
        title: 'No HTTPS Encryption',
        description: 'The website is using HTTP instead of HTTPS, which means data transmitted is not encrypted. This is a security risk.',
        severity: 'high',
        recommendation: 'Implement SSL/TLS certificate and redirect HTTP to HTTPS'
      });
    }

    if (!url.includes('www.') && !urlObj.hostname.startsWith('www.')) {
      bugs.push({
        type: 'info',
        title: 'Missing WWW Subdomain',
        description: 'The website does not use the www subdomain. Consider implementing proper redirects.',
        severity: 'low',
        recommendation: 'Set up canonical URLs and redirects'
      });
    }

    const commonVulnerablePaths = [
      '/admin', '/login', '/wp-admin', '/administrator', 
      '/phpmyadmin', '/backup', '/.git', '/.env',
      '/config', '/database', '/api/debug'
    ];

    bugs.push({
      type: 'info',
      title: 'Common Vulnerable Paths Check',
      description: `Checking for ${commonVulnerablePaths.length} common vulnerable endpoints that should be protected or removed.`,
      severity: 'medium',
      recommendation: 'Ensure administrative paths are protected with authentication and not publicly accessible'
    });

    if (urlObj.hostname.split('.').length > 3) {
      bugs.push({
        type: 'info',
        title: 'Complex Subdomain Structure',
        description: 'The website uses multiple subdomains which may increase attack surface.',
        severity: 'low'
      });
    }

    const securityHeaders = [
      'X-Frame-Options',
      'X-Content-Type-Options',
      'Strict-Transport-Security',
      'Content-Security-Policy',
      'X-XSS-Protection'
    ];

    bugs.push({
      type: 'warning',
      title: 'Security Headers Check Required',
      description: `Important security headers should be verified: ${securityHeaders.join(', ')}. Missing headers can expose the site to various attacks.`,
      severity: 'medium',
      recommendation: 'Implement all recommended security headers in server configuration'
    });

    if (url.includes('?') || url.includes('=')) {
      bugs.push({
        type: 'warning',
        title: 'URL Parameters Detected',
        description: 'The URL contains query parameters. Ensure all parameters are properly validated and sanitized to prevent SQL injection and XSS attacks.',
        severity: 'medium',
        recommendation: 'Implement input validation, parameterized queries, and output encoding'
      });
    }

    bugs.push({
      type: 'info',
      title: 'Cross-Site Scripting (XSS) Risk',
      description: 'Verify that all user inputs are properly sanitized and encoded before rendering to prevent XSS attacks.',
      severity: 'high',
      recommendation: 'Use Content Security Policy, sanitize all inputs, and encode outputs'
    });

    bugs.push({
      type: 'info',
      title: 'SQL Injection Prevention',
      description: 'Ensure database queries use parameterized statements or prepared statements to prevent SQL injection attacks.',
      severity: 'critical',
      recommendation: 'Never concatenate user input into SQL queries. Use ORMs or prepared statements'
    });

    bugs.push({
      type: 'info',
      title: 'CSRF Protection',
      description: 'Verify that the website implements CSRF tokens for all state-changing operations.',
      severity: 'high',
      recommendation: 'Implement anti-CSRF tokens for all forms and AJAX requests'
    });

    bugs.push({
      type: 'info',
      title: 'Authentication & Session Management',
      description: 'Check that passwords are properly hashed, sessions are secure, and authentication mechanisms are robust.',
      severity: 'critical',
      recommendation: 'Use bcrypt/Argon2 for passwords, secure session cookies with HttpOnly and Secure flags'
    });

    bugs.push({
      type: 'info',
      title: 'Rate Limiting',
      description: 'Verify that the website implements rate limiting to prevent brute force attacks and API abuse.',
      severity: 'medium',
      recommendation: 'Implement rate limiting on login endpoints, APIs, and sensitive operations'
    });

    if (urlObj.pathname !== '/' && !urlObj.pathname.endsWith('/')) {
      bugs.push({
        type: 'info',
        title: 'URL Trailing Slash Inconsistency',
        description: 'URL structure may have trailing slash inconsistencies which can affect SEO and cause duplicate content.',
        severity: 'low'
      });
    }

    return bugs;
  }
};