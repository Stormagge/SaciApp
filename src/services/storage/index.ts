import { STORAGE_KEYS } from '../config/constants';

class StorageService {
  async setItem(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving data', error);
      throw error;
    }
  }

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error reading data', error);
      throw error;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data', error);
      throw error;
    }
  }
}

export const storageService = new StorageService();
