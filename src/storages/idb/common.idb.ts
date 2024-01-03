import * as idb from 'idb'
import { AppSettings } from '../global-state/app-settings.ts'
import { IDBPaths } from './idb-paths.ts'

export const CommonIDB = {
  openDB: async () => {
    return await idb.openDB(IDBPaths.basliqApp.dbName, 1, {
      upgrade(db) {
        db.createObjectStore(IDBPaths.basliqApp.common.dsName)
      },
    })
  },

  loadAppSettings: async (): Promise<Partial<AppSettings>> => {
    const db = await CommonIDB.openDB()
    const settings = (await db.get(IDBPaths.basliqApp.common.dsName, IDBPaths.basliqApp.common.configs)) as AppSettings
    if (settings) return settings
    await db.delete(IDBPaths.basliqApp.common.dsName, IDBPaths.basliqApp.common.configs)
    return {}
  },

  storeAppSettings: async (applicationSettings: AppSettings) => {
    const db = await CommonIDB.openDB()
    await db.put(IDBPaths.basliqApp.common.dsName, applicationSettings, IDBPaths.basliqApp.common.configs)
  },
}
