type ElectionAPI = {
    openFile: () => Promise<void>
}
interface Window {
    electronAPI: ElectionAPI
}