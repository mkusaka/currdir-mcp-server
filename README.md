# currdir-mcp-server

A simple MCP (Model Context Protocol) server that provides a tool to get the current working directory.

## Features

- **get_current_directory**: Returns the current directory path where the MCP server is running, along with platform and Node.js version information.

## Installation

```bash
npm install @mkusaka/currdir-mcp-server
```

Or install globally:

```bash
npm install -g @mkusaka/currdir-mcp-server
```

## Usage

### Build and run

```bash
npm run build
npm start
```

### Development mode

```bash
npm run dev
```

## MCP Tool

This server provides the following tool:

### get_current_directory

Returns information about the current working directory.

**Input**: None

**Output**:
```json
{
  "currentDirectory": "/path/to/current/directory",
  "platform": "darwin",
  "nodeVersion": "v20.0.0"
}
```

## Configuration

The server can be integrated with any MCP-compatible client. Add it to your MCP client configuration:

```json
{
  "mcpServers": {
    "currdir": {
      "command": "npx",
      "args": ["@mkusaka/currdir-mcp-server"]
    }
  }
}
```

## License

MIT