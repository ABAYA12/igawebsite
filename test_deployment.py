#!/usr/bin/env python3
"""
Deployment verification script for InsightGrid Analytics
Tests that all SPA routes are accessible
"""

import sys
from urllib.parse import urljoin

import requests


def test_routes(url):
    """Test all main routes of the application"""
    routes = [
        '/',
        '/about',
        '/services', 
        '/portfolio',
        '/blog',
        '/contact'
    ]
    
    results = []
    
    print(f"Testing routes on {url}")
    print("-" * 50)
    
    for route in routes:
        full_url = urljoin(url, route)
        try:
            response = requests.get(full_url, timeout=10)
            status = "✅ PASS" if response.status_code == 200 else f"❌ FAIL ({response.status_code})"
            results.append((route, response.status_code, status))
            print(f"{route:<12} {status}")
        except requests.RequestException as e:
            results.append((route, 0, "❌ ERROR"))
            print(f"{route:<12} ❌ ERROR: {str(e)}")
    
    print("-" * 50)
    
    # Summary
    passed = sum(1 for _, status_code, _ in results if status_code == 200)
    total = len(results)
    
    print(f"Results: {passed}/{total} routes passed")
    
    if passed == total:
        print("🎉 All routes are working correctly!")
        return True
    else:
        print("⚠️  Some routes failed. Check your server configuration.")
        return False


if __name__ == "__main__":
    base_url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8000"
    SUCCESS = test_routes(base_url)
    sys.exit(0 if SUCCESS else 1)
