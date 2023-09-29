import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "t2mm7j82",
  dataset: "production",
  title: "lucasfrazier.com",
  apiVersion: "2023-08-30",
  basePath: "/admin",
  plugins: [deskTool(), vercelDeployTool()],
  schema: { types: schemas },
});

export default config;
