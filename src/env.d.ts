interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_API_URI: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}