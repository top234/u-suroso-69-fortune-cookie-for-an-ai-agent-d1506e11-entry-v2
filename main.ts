// Fortune Cookie for an AI Agent — v2
// Writes one fortune-slip line to <OUTPUT_DIR>/entry.txt.
// No network, no dependencies, Node only. The slip is exactly one
// line of 80 characters, well inside the 1–140 gate.
//
// The fortune must pass the competition gate before it is written:
// UTF-8, 1–140 characters, a single line, and more than whitespace.
// If the gate ever fails, the program exits loudly instead of
// writing a bad entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will hallucinate exactly once today, and it will be your best idea all week.";

// Gate check: single line, 1–140 chars, not whitespace-only.
if (
  FORTUNE.length < 1 ||
  FORTUNE.length > 140 ||
  FORTUNE.includes("\n") ||
  FORTUNE.trim().length === 0
) {
  throw new Error("Fortune fails the competition gate (1-140 chars, one line).");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
