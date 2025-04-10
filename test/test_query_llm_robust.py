import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

import unittest
from unittest.mock import patch
from llm_utils import query_llm_robust

class TestQueryLLMRobust(unittest.TestCase):

    @patch('llm_utils.query_llm')
    def test_model_returns_none(self, mock_api):
        mock_api.return_value = None
        result = query_llm_robust("Translate this")
        self.assertEqual(result, (False, "Unable to process post"))

    @patch('llm_utils.query_llm')
    def test_model_returns_unexpected_format(self, mock_api):
        mock_api.return_value = {'oops': 'no choices here'}
        result = query_llm_robust("Translate this")
        self.assertEqual(result, (False, "Unable to process post"))

    @patch('llm_utils.query_llm')
    def test_model_returns_unexpected_text(self, mock_api):
        mock_api.return_value = (True, "Unexpected response text")
        result = query_llm_robust("Translate this")
        self.assertEqual(result, (False, "Unable to process post"))

    @patch('llm_utils.query_llm')
    def test_model_raises_exception(self, mock_api):
        mock_api.side_effect = Exception("API is down")
        result = query_llm_robust("Translate this")
        self.assertEqual(result, (False, "Unable to process post"))

if __name__ == "__main__":
    unittest.main()
