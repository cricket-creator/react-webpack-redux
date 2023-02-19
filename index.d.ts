declare module "*.svg" {
  const content: any;
  export = content;
}

declare module "*.scss" {
  const styles: { readonly [key: string]: string };
  export = styles;
}
