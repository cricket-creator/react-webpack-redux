import path from "path";
import type { Configuration } from "webpack";
import type { Configuration as ServerConfiguration } from "webpack-dev-server";

const port: ServerConfiguration["port"] = process.env.PORT || 3000;

export default function setWebpackDevServer(
  isDevMode: boolean
): Configuration["devServer"] {
  return {
    static: {
      directory: path.join(__dirname, "public"),
      watch: true,
    },
    port,
    open: true,
    hot: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      reconnect: 3,
    },
    onListening: function (devServer) {
      if (!devServer) throw new Error("Server not found");

      const address = devServer.server?.address();
      if (address instanceof Object) {
        console.info(`Server is running on port: ${address.port}`);
      }
    },
  };
}
