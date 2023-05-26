import { create, StateCreator } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

interface AuthStoreProps {
  isLogin: boolean;
  accessToken: string;
  userEmail: string;
  setUserEmail: (newUserEmail: string) => void;
  setAccessToken: (newAccessToken: string) => void;
  setLogin: () => void;
  setLogout: () => void;
}

// Persist MiddleWare를 사용하기 위한 데이터 타입
export type useAuthStorePersistProps = (
  config: StateCreator<AuthStoreProps>,
  options: PersistOptions<AuthStoreProps>
) => StateCreator<AuthStoreProps>;

export const useAuthStore = create<AuthStoreProps>(
  (persist as useAuthStorePersistProps)(
    (set) => ({
      isLogin: false,
      accessToken: "",
      userEmail: "",
      setLogin: () => set({ isLogin: true }),
      setLogout: () => set({ isLogin: false }),
      setUserEmail: (newUserEmail) => set({ userEmail: newUserEmail }),
      setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),
    }),
    { name: "auth-store", storage: createJSONStorage(() => sessionStorage) }
  )
);
