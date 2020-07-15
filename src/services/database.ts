import { AsyncStorage } from "react-native";

const DATABASE_KEY = "_database";

interface Database {
  token?: string;
  refresh_token?: string;
  currentUser?: any;
  nextLottery?: any;
  random_question?: any[];
}

export async function database_store(obj: Database) {
  const data = await database_query();
  const newData = { ...data, ...obj };

  try {
    await AsyncStorage.removeItem(DATABASE_KEY);
    await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(newData));
  } catch (err) {
    console.error("ERROR:::", err);
    return null;
  }

  return newData;
}

export async function database_query(ids: string[] | string = []) {
  try {
    const fromStorage = await AsyncStorage.getItem(DATABASE_KEY);
    const data =
      fromStorage && fromStorage !== "" ? JSON.parse(fromStorage) : {};

    if (typeof ids === "string" && ids !== "")
      return data && data[ids] ? data[ids] : "";

    if (Array.isArray(ids) && ids.length > 0 && data)
      Object.keys(data).map((key) => {
        if (!ids.includes(key)) delete data[key];
      });

    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
}
