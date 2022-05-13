/*
Source: [Facebook Recruiting](https://www.facebookrecruiting.com/portal/interview_prep_hub?scrollToSection=CODING_EXERCISES)

Description:
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing
it with another character that is a certain number of steps away in normal alphabetic or numerical order. For example, if the string "Zebra-493?"
is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping
around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-
alphanumeric characters remain unchanged.

Given a string and a rotation factor, return an encrypted string.

Solution:
I decided to use the module (%) operation to determine the corresponding ciphered character given the rotation number, dividing by **10** if it is 
a **number** or **26** if is a **letter**. The result will gives the position of the corresponding character or the exact number in the case of 
numerical digits.
*/

function rotationalCipher(input, rotationFactor) {
  const numbers = [...Array(10).keys()]; // array of numbers from 0 to 9
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let output = "";

  for (a of input) {
    let ch = a;

    if (a in numbers) {
      ch = (Number(a) + rotationFactor) % 10;
    } else if (letters.includes(a)) {
      ch = handleLetter(a, letters, rotationFactor);
    } else if (letters.toUpperCase().includes(a)) {
      ch = handleLetter(a, letters.toUpperCase(), rotationFactor);
    }

    output += ch;
  }

  return output;
}

// helper function that returns the character at the new calculated index
function handleLetter(a, letters, factor) {
  let i = (letters.indexOf(a) + factor) % 26;

  return letters.charAt(i);
}
