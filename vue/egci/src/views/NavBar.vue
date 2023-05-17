<template>
  <div class="max-w-[1500px] m-auto">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <router-link to="/" class="font-bold uppercase text-5xl text-primary">EGCI</router-link>
        <p class="ml-2 text-secondary font-mono font-bold">
          Everything Great Comes<br />
          from Innerstillness
        </p>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="@/assets/img/profile2.jpg" />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a @click="Logout">Logout</a></li>
          </ul>
        </div>
        <theme-vue></theme-vue>
      </div>
    </div>
  </div>
</template>

<script setup>
import { signOut } from "@/api/auth";
import ThemeVue from "@/components/units/Theme.vue";
import { useAuthStore } from "@/stores/authStore";

const authInfo = useAuthStore();


const Logout = async () => {
  const isConfirm = confirm('로그아웃 하시겠습니까?');
  if(isConfirm) {
    authInfo.setIsLogout();
    await signOut();
  }
}
</script>

<style lang="scss" scoped></style>
