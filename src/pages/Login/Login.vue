<script lang="ts" setup>
import { reactive } from "vue";
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElMessage,
} from "element-plus";
// import request from "@/util/request";
// import {
//   UserLoginApiPath,
//   type IUserLoginApiRqeData,
//   type IUserLoginApiResData,
// } from "./api/UserLoginApi";
import { createLoginResData } from "@/mock";
import { useUserStore } from "@/store";
import styles from "./styles.module.less";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const state = reactive({
  login: {
    account: "demo",
    password: "12345",
  },
  loading: false,
});

const handleLogin = async () => {
  const { account, password } = state.login;
  if (!account || account.trim() === "") {
    ElMessage({
      type: "warning",
      message: "请填写用户账号",
    });
    return;
  }
  if (!password || password.trim() === "") {
    ElMessage({
      type: "warning",
      message: "请填写用户密码",
    });
    return;
  }
  try {
    // 模拟登录请求
    state.loading = true;
    // const { user, token } = await request<
    //   IUserLoginApiRqeData,
    //   IUserLoginApiResData
    // >(UserLoginApiPath, {
    //   ...state.login,
    // });
    const { user, token } = await createLoginResData();
    userStore.setToken(token);
    userStore.setUserInfo(user);
    router.replace("/main");
    state.loading = false;
  } catch (e) {
    const message = e instanceof Error ? e.message : "操作异常";
    ElMessage({
      type: "error",
      message,
    });
    state.loading = false;
  }
};
</script>

<template>
  <div :class="styles.header">
    <h1 :class="styles.title">Module Frame Demo</h1>
  </div>
  <div :class="styles['login-form']">
    <div :class="styles.welcome">
      <div>Welcome</div>
      <div>Login</div>
    </div>
    <ElForm labelPosition="top" v-model="state.login">
      <ElFormItem label="账号">
        <ElInput v-model="state.login.account" />
      </ElFormItem>
      <ElFormItem label="密码">
        <ElInput type="password" v-model="state.login.password" />
      </ElFormItem>
      <div :class="styles['login-button']">
        <ElButton
          type="primary"
          :loading="state.loading"
          @click="handleLogin"
        >
          登 录
        </ElButton>
      </div>
    </ElForm>
  </div>
</template>
