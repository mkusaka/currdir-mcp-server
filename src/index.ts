#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "currdir-mcp-server",
  version: "0.1.0",
});

// Define get_current_directory tool
server.tool(
  "get_current_directory",
  "Returns the current directory path where the MCP server is running",
  {},
  async () => {
    const currentDir = process.cwd();
    
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({
            currentDirectory: currentDir,
            platform: process.platform,
            nodeVersion: process.version,
          }, null, 2),
        },
      ],
    };
  }
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Current directory MCP server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});