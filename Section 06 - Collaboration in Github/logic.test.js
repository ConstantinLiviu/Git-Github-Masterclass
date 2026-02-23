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

console.log("🎉 All tests passed successfully!");
