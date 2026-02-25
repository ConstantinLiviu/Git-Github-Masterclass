import assert from "node:assert";
import { convertCelsiusToKelvin, getEmoji } from "./script.js";

// Conversion function test
try {
  const result = convertCelsiusToKelvin(0);
  assert.strictEqual(result, 273.15);
  console.log("✅ Test passed successfully!");
} catch (err) {
  console.error("❌ Test failed!");
  process.exit(1);
}

// Emoji function test
try {
  const emoji = getEmoji(40);
  assert.strictEqual(emoji, "🔥");
  console.log("✅ Test passed successfully!");
} catch (err) {
  console.error("❌ Test failed!");
  process.exit(1);
}

// Extra tests
// Conversion tests
try {
  // Test: Absolute zero
  assert.strictEqual(convertCelsiusToKelvin(-273.15), 0);
  console.log("✅ Absolute zero test passed!");

  // Test: Invalid input (str)
  const resNaN = convertCelsiusToKelvin("abc");
  assert.ok(isNaN(resNaN));
  console.log("✅ Invalid input test passed!");
} catch (err) {
  console.log("❌ 2nd conversion test failed", err.message);
  process.exit(1);
}

// Emoji tests
try {
  // Check freezing point (0)
  assert.strictEqual(getEmoji(0), "🧊");
  // Check one step above freezing point (0.1)
  assert.strictEqual(getEmoji(0.1), "☁️");
  // Check max limit for clouds (20)
  assert.strictEqual(getEmoji(20), "☁️");
  // Check min limit for sun (20.1)
  assert.strictEqual(getEmoji(20.1), "😎");
  // Check max limit for sun (35)
  assert.strictEqual(getEmoji(35), "😎");
  // Check over sun max limit (35.1)
  assert.strictEqual(getEmoji(35.1), "🔥");

  console.log("✅ Emoji boundries test passed!");
} catch (err) {
  console.log(`❌ Emoji test failed: ${err.message}`);
  process.exit(1);
}

console.log("🎉 All tests passed successfully!");
