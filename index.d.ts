declare module "*.svg" {
  const content: any;
  export = content;
}

declare module "*.scss" {
  const content: Record<string, any>;
  export = content;
}
