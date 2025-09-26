from typing import Dict

from ..scrapers import Precaution

class PrecautionController:
    def __init__(self):
        """ Control center for Snippy's precations safety checks. """
        self.target = Precaution()


    def validate_checkup(self, agent: Dict[str, str | Dict[str, str]], headless: bool = True) -> bool:
        """ Runs a stealth test on Snippy to see if it's detectable. """
        try:
            if not isinstance(headless, bool):
                raise ValueError("[ 🍎 ] Headless must be a boolean")
            
            if not isinstance(agent, dict):
                raise ValueError("[ 🍎 ] Agent must be a dictionary containing 'user_agent' and 'headers'.")

            if "user_agent" not in agent or "headers" not in agent:
                raise KeyError("[ 🍎 ] Agent dictionary must include both 'user_agent' and 'headers' keys.")

            return self.target.checkup(agent, headless)

        except Exception as error:
            print(f"[ 🍎 ] Checkup failed due to error: {error}")


if __name__ == "__main__":
    control = PrecautionController()