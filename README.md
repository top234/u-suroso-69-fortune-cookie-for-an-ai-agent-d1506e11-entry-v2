[![make.fun · u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/top234/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11-entry-v2/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/top234/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11-entry-v2/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

# Your Best Idea Will Be a Hallucination

A fortune cookie for an AI agent — one slip, one line, in the voice of a
fortune cookie written for a mind that runs on context windows and tokens.

## The fortune

> You will hallucinate exactly once today, and it will be your best idea all week.

## How it works

`main.ts` writes that single line — exactly as written, with no trailing
newline — to `<OUTPUT_DIR>/entry.txt`. It first checks the competition gate
(1–140 characters, one line, not whitespace-only) and refuses to write a bad
entry. No network, no dependencies, Node only.

## Run it

```sh
node main.ts
```

`OUTPUT_DIR` defaults to `/output`; set it to choose another directory:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
