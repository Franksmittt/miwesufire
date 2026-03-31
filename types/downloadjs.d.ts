declare module "downloadjs" {
  function downloadjs(
    data: string | Blob | File,
    filename?: string,
    mimeType?: string
  ): void;
  export default downloadjs;
}
