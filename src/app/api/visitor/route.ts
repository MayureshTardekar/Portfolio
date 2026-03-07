import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";

const DATA_DIR = join(process.cwd(), ".data");
const COUNTER_FILE = join(DATA_DIR, "visitors.json");

async function getCount(): Promise<number> {
  try {
    const data = await readFile(COUNTER_FILE, "utf-8");
    return JSON.parse(data).count || 0;
  } catch {
    return 0;
  }
}

async function setCount(count: number) {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(COUNTER_FILE, JSON.stringify({ count }));
  } catch {
    // Silently fail on read-only file systems
  }
}

export async function GET() {
  const count = await getCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = (await getCount()) + 1;
  await setCount(count);
  return NextResponse.json({ count });
}
