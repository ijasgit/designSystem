import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/",

    createProxyMiddleware({
      target: "http://localhost:8081/",

      changeOrigin: true,
    })
  );
};
