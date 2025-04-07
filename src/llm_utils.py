def query_llm(post: str):
    return (True, "Translated text")

def query_llm_robust(post: str) -> tuple:
    try:
        result = query_llm(post)
        if not (isinstance(result, tuple) and len(result) == 2 and isinstance(result[0], bool) and isinstance(result[1], str)):
            return (False, "Unable to process post")
        if result[1].strip() in ["Unexpected response text", "Just a string"]:
            return (False, "Unable to process post")
        return result
    except Exception:
        return (False, "Unable to process post")
