declare global {
    interface Window {
      require: any;
    }
}
const {ipcRenderer} = window.require('electron');

export function addItem(item: string) {
    console.log('peepeepoopoo');
    ipcRenderer.send('item:add', item);
}