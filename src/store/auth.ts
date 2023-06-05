import { create, StateCreator } from "zustand";
import { persist, PersistOptions, createJSONStorage } from "zustand/middleware";

interface AuthStoreProps {
  isLogin: boolean;
  accessToken: string;
  userName: string;
  setUserName: (newUserEmail: string) => void;
  setAccessToken: (newAccessToken: string) => void;
  setLogin: () => void;
  setLogout: () => void;

  userImage?: string;
  loginType?: string;
  setLoginType?: (newLoginType: string) => void;
  setUserImage?: (newUserImage: string) => void;
}

// Persist MiddleWare를 사용하기 위한 데이터 타입
export type useAuthStorePersistProps = (
  config: StateCreator<AuthStoreProps>,
  options: PersistOptions<AuthStoreProps>
) => StateCreator<AuthStoreProps>;

// 로그인 정보가 담겨있는 Store
export const useAuthStore = create<AuthStoreProps>(
  (persist as useAuthStorePersistProps)(
    (set) => ({
      loginType: "",
      isLogin: false,
      accessToken: "",
      userName: "",
      setLogin: () => set({ isLogin: true }),
      setLogout: () => set({ isLogin: false }),
      setLoginType: (newLoginType) => set({ loginType: newLoginType }),
      setUserName: (newUserName) => set({ userName: newUserName }),
      setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),
    }),
    { name: "auth-store", storage: createJSONStorage(() => sessionStorage) }
  )
);

// Github 연동 정보가 들어있는 Store
export const useGithubAuthStore = create<AuthStoreProps>(
  (persist as useAuthStorePersistProps)(
    (set) => ({
      isLogin: false,
      accessToken: "",
      userName: "",
      setLogin: () => set({ isLogin: true }),
      setLogout: () => set({ isLogin: false }),
      setUserName: (newUserName) => set({ userName: newUserName }),
      setUserImage: (newUserImage) => set({ userImage: newUserImage }),
      setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),
    }),
    { name: "git-auth-store", storage: createJSONStorage(() => sessionStorage) }
  )
);
