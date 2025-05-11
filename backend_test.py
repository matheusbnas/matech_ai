import requests
import unittest
import json
from datetime import datetime

class MatechAIAPITester(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(MatechAIAPITester, self).__init__(*args, **kwargs)
        self.base_url = "https://06a27a7b-ecfe-46e0-a6cb-e4def8b4790b.preview.emergentagent.com"
        self.api_url = f"{self.base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def setUp(self):
        print(f"\n🔍 Testing API at {self.api_url}")
        
    def test_01_health_endpoint(self):
        """Test the health endpoint"""
        print("\n🔍 Testing health endpoint...")
        
        try:
            response = requests.get(f"{self.api_url}/health")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            
            # Check if the response contains the expected fields
            self.assertIn("status", data)
            self.assertIn("service", data)
            self.assertIn("timestamp", data)
            
            # Check if the status is "ok"
            self.assertEqual(data["status"], "ok")
            self.assertEqual(data["service"], "Matech.AI API")
            
            print(f"✅ Health endpoint test passed - Status: {response.status_code}")
            print(f"✅ Response: {data}")
            
        except Exception as e:
            self.fail(f"❌ Health endpoint test failed - Error: {str(e)}")

    def test_02_services_endpoint(self):
        """Test the services endpoint"""
        print("\n🔍 Testing services endpoint...")
        
        try:
            response = requests.get(f"{self.api_url}/services")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            
            # Check if the response is a list
            self.assertIsInstance(data, list)
            
            # Check if the list contains at least one service
            self.assertGreater(len(data), 0)
            
            # Check if each service has the expected fields
            for service in data:
                self.assertIn("id", service)
                self.assertIn("title", service)
                self.assertIn("description", service)
                self.assertIn("icon", service)
            
            print(f"✅ Services endpoint test passed - Status: {response.status_code}")
            print(f"✅ Found {len(data)} services")
            
        except Exception as e:
            self.fail(f"❌ Services endpoint test failed - Error: {str(e)}")

    def test_03_success_cases_endpoint(self):
        """Test the success-cases endpoint"""
        print("\n🔍 Testing success-cases endpoint...")
        
        try:
            response = requests.get(f"{self.api_url}/success-cases")
            self.assertEqual(response.status_code, 200)
            data = response.json()
            
            # Check if the response is a list
            self.assertIsInstance(data, list)
            
            # Check if the list contains at least one success case
            self.assertGreater(len(data), 0)
            
            # Check if each success case has the expected fields
            for case in data:
                self.assertIn("id", case)
                self.assertIn("title", case)
                self.assertIn("description", case)
                self.assertIn("industry", case)
                self.assertIn("impact", case)
            
            print(f"✅ Success cases endpoint test passed - Status: {response.status_code}")
            print(f"✅ Found {len(data)} success cases")
            
        except Exception as e:
            self.fail(f"❌ Success cases endpoint test failed - Error: {str(e)}")

    def test_04_contact_endpoint(self):
        """Test the contact endpoint"""
        print("\n🔍 Testing contact endpoint...")
        
        try:
            # Prepare test data
            contact_data = {
                "name": "Test User",
                "email": "test@example.com",
                "subject": "API Test",
                "message": "This is a test message from the API test script."
            }
            
            # Send POST request
            response = requests.post(
                f"{self.api_url}/contact", 
                json=contact_data,
                headers={"Content-Type": "application/json"}
            )
            
            self.assertEqual(response.status_code, 200)
            data = response.json()
            
            # Check if the response contains the expected fields
            self.assertIn("success", data)
            self.assertIn("message", data)
            self.assertIn("id", data)
            self.assertIn("timestamp", data)
            
            # Check if the success flag is True
            self.assertTrue(data["success"])
            
            print(f"✅ Contact endpoint test passed - Status: {response.status_code}")
            print(f"✅ Response: {data}")
            
        except Exception as e:
            self.fail(f"❌ Contact endpoint test failed - Error: {str(e)}")

if __name__ == "__main__":
    unittest.main()