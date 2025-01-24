type ElectionAPI = {
    openFile: () => Promise<void>,
    onLoadFile: (callback: (data: string[]) => Promise<void>) => void
}
interface Window {
    electronAPI: ElectionAPI
}