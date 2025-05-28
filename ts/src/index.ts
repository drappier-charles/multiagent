import { env } from "@blaxel/core";
import '@blaxel/telemetry';
import Fastify from "fastify";
import fs from "fs";
import agent from "./agent";
interface RequestBody {
  inputs: string;
}

async function main() {
  const prompt = fs.readFileSync("../shared/prompt.md", "utf8");
  console.info(prompt);
  console.info("Booting up...");
  const app = Fastify();

  app.addHook("onRequest", async (request, reply) => {
    console.info(`${request.method} ${request.url}`);
  });

  app.post<{ Body: RequestBody }>("/", async (request, reply) => {
    try {
      await agent(request.body.inputs, reply.raw);
    } catch (error: any) {
      console.error(error);
      return reply.status(500).send(error.stack);
    }
  });
  const port = parseInt(env.BL_SERVER_PORT || "80");
  const host = env.BL_SERVER_HOST || "0.0.0.0";
  try {
    await app.listen({ port, host });
    console.info(`Server is running on port ${host}:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main().catch(console.error);
