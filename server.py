#!/usr/bin/env python3
"""
Simple HTTP server for single-page applications (SPA).
Serves index.html for all routes that don't correspond to actual files.
"""

import http.server
import socketserver
import os
import urllib.parse
from pathlib import Path

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_GET(self):
        # Parse the URL
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path
        
        # Remove leading slash and decode
        path = path.lstrip('/')
        if path == '':
            path = 'index.html'
        
        # Check if the requested file exists
        if os.path.isfile(path):
            # File exists, serve it normally
            return super().do_GET()
        
        # Check if it's a directory with an index.html
        if os.path.isdir(path):
            index_path = os.path.join(path, 'index.html')
            if os.path.isfile(index_path):
                return super().do_GET()
        
        # If file doesn't exist and it's not a static asset, serve index.html
        # This handles SPA routes like /about, /blog, /contact, etc.
        if not any(path.endswith(ext) for ext in ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot']):
            # Serve index.html for SPA routes
            self.path = '/index.html'
            return super().do_GET()
        
        # For missing static assets, return 404
        return super().do_GET()

def run_server(port=8000):
    handler = SPAHandler
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Server running at http://localhost:{port}/")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run_server(port)
