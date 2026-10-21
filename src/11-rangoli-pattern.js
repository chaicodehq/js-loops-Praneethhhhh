/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *    * *
 *   * * *
 *    * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
  // Your code here
  if (
    typeof n !== "number" ||
    !Number.isFinite(n) ||
    !Number.isInteger(n) ||
    n <= 0
  ) {
    return [];
  }

  const ans = [];

  for (let i = 0; i < 2 * n - 1; i++) {
    let stars = i < n ? i + 1 : 2 * n - i - 1;
    let current = "";
    const spaces = Math.abs(n - i - 1);
    current += " ".repeat(spaces);

    for (let j = 0; j < stars; j++) {
      if (j === stars - 1) {
        current += "*";
      } else {
        current += "* ";
      }
    }
    ans.push(current);
  }

  return ans;
}
