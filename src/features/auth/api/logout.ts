import storage from "@/lib/storage";

export async function logout(): Promise<void> {
  storage.clearToken()
}
