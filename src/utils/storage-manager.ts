export class Storage {
  public static async setItem(key: string, value: string): Promise<boolean> {
    return Promise.resolve().then(async () => {
      localStorage.setItem(key, value)
      return Promise.resolve(true)
    })
  }

  public static async getItem(key: string): Promise<unknown> {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key)
    })
  }

  public static isKeyExistInStorage(key: string): boolean {
    return !!localStorage.getItem(key)
  }
}
